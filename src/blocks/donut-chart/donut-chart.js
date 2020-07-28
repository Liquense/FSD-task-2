import { getAverageNum, ruDeclination } from '../../common/functions';

class DonutChart {
  static donutArcActiveClass = 'donut-chart__svg-arc_active';

  $donutContainer;

  $dataTextContainer;

  $donutCanvas;

  $donutArcs;

  $donutLegend;

  $legendItems;

  $activeValue;

  $activeValueText;

  donutParams = {};

  arcs = [];

  activeArc;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._readParamsFromElements();

    this._calculateAdditionalParams();
    this._createDonut();
    this._initEvents();
  }

  _initElements(rootElement) {
    this.$donutContainer = $(rootElement);
    this.$dataTextContainer = this.$donutContainer.find('.js-donut-chart__active-data');
    this.$donutCanvas = this.$donutContainer.find('.js-donut-chart__svg');
    this.$donutArcs = this.$donutCanvas.find('.js-donut-chart__svg-arc');
    this.$donutLegend = this.$donutContainer.find('.js-donut-chart__legend');
    this.$legendItems = this.$donutLegend.find('.js-donut-chart__legend-item');
    this.$activeValue = this.$dataTextContainer.find('.js-donut-chart__active-value');
    this.$activeValueText = this.$dataTextContainer.find('.js-donut-chart__value-text');
  }

  _readParamsFromElements() {
    this.donutParams.arcsGap = this.$donutCanvas.attr('data-arcs-gap');
    this.donutParams.defaultStyle = {
      outerRadius: this.$donutCanvas.attr('data-default-outer-radius'),
      innerRadius: this.$donutCanvas.attr('data-default-inner-radius'),
    };
    this.donutParams.activeStyle = {
      outerRadius: this.$donutCanvas.attr('data-active-outer-radius'),
      innerRadius: this.$donutCanvas.attr('data-active-inner-radius'),
    };
    this.$donutArcs.each((index, arc) => { this._readArcParams($(arc)); });
  }

  _readArcParams($arc) {
    const value = Number.parseFloat($arc.attr('data-value'));
    const color = $arc.attr('data-color');
    const isActive = $arc.attr('data-is-active') === 'true';
    this.arcs.push({
      value, $arc, isActive, color,
    });
  }

  _calculateAdditionalParams() {
    const arcDefaultRadius = getAverageNum(
      this.donutParams.defaultStyle.outerRadius, this.donutParams.defaultStyle.innerRadius,
    );
    const arcsAndRatesAmounts = this._getArcsAndRatesAmounts();

    this.donutParams.canvasWidth = this.donutParams.activeStyle.outerRadius;
    this.donutParams.canvasHeight = this.donutParams.activeStyle.outerRadius;
    this.donutParams.gapsAngle = DonutChart._getAngleFromArcLength(
      this.donutParams.arcsGap, arcDefaultRadius,
    );
    this.donutParams.startingAngle = 90 + this.donutParams.gapsAngle / 2;
    this.donutParams.notZeroArcs = arcsAndRatesAmounts.arcs;
    this.donutParams.allRatesAmount = arcsAndRatesAmounts.rates;
    this.donutParams.ratesAmountWithGaps = DonutChart._getRatesWithGaps(
      arcsAndRatesAmounts.rates,
      this.donutParams.gapsAngle,
      arcsAndRatesAmounts.arcs,
    );
  }

  _createDonut() {
    this._drawDonutOnCanvas();

    this.$donutCanvas.attr(
      'viewBox', `0 0 ${this.donutParams.canvasWidth} ${this.donutParams.canvasHeight}`,
    );
  }

  _initEvents() {
    this._addHandlerToArcs('click', this._handleArcClick);
    this._addHandlerToArcs('mouseenter', this._handleArcMouseEnter);
    this._addHandlerToArcs('mouseleave', this._handleArcMouseLeave);
  }

  _getArcStyle(arc) {
    if (arc.$arc.hasClass(DonutChart.donutArcActiveClass)) return this.donutParams.activeStyle;
    return this.donutParams.defaultStyle;
  }

  static _getSecondAngle(firstAngle, arcValue, allRatesAmount) {
    const arcValueProportion = arcValue / allRatesAmount;
    const arcAngle = 360 * arcValueProportion;

    return firstAngle + arcAngle;
  }

  static _degreesToRads(degreeAngleValue) {
    return (degreeAngleValue / 180) * Math.PI;
  }

  static _toCartesian(length, angle, x0 = 0, y0 = 0) {
    const result = { x: 0, y: 0 };
    const angleRads = DonutChart._degreesToRads(angle);

    result.x = x0 + length * Math.cos(angleRads);
    result.y = y0 - length * Math.sin(angleRads);

    return result;
  }

  _changeActiveArc(arc) {
    const oldActiveArc = this.activeArc;

    if (arc === this.activeArc) { this.activeArc = undefined; } else {
      this.activeArc = arc;
      if (arc) arc.$arc.addClass(DonutChart.donutArcActiveClass);
    }

    if (oldActiveArc) {
      oldActiveArc.$arc.removeClass(DonutChart.donutArcActiveClass);
      this._redrawArc(oldActiveArc);
    }
  }

  static _calculateArcDrawData(arc, style, allRatesAmount, canvasSize) {
    const { startingAngle } = arc;

    const endingAngle = DonutChart._getSecondAngle(
      startingAngle, arc.value, allRatesAmount,
    );
    arc.endingAngle = endingAngle;
    const startX = canvasSize.width / 2;
    const startY = canvasSize.height / 2;
    const strokeWidth = style.outerRadius - style.innerRadius;
    const arcRadius = style.outerRadius / 2 - strokeWidth / 2;
    const arcAngle = endingAngle - startingAngle;

    const firstPoint = DonutChart._toCartesian(
      arcRadius, startingAngle, startX, startY,
    );
    const secondPoint = DonutChart._toCartesian(
      arcRadius, endingAngle, startX, startY,
    );

    return {
      firstPoint,
      secondPoint,
      arcRadius,
      strokeWidth,
      startX,
      startY,
      arcAngle,
    };
  }

  static _drawArc(arc, arcDrawData) {
    let isLargeArc = 0;
    if (arcDrawData.arcAngle > 180) { isLargeArc = 1; }

    arc.$arc.attr('stroke-width', arcDrawData.strokeWidth);
    arc.$arc.attr(
      'd', `M ${arcDrawData.firstPoint.x},${arcDrawData.firstPoint.y} `
      + `A ${arcDrawData.arcRadius} ${arcDrawData.arcRadius} `
      + `0 ${isLargeArc} `
      + `0 ${arcDrawData.secondPoint.x},${arcDrawData.secondPoint.y}`,
    );
  }

  _redrawArc(arc) {
    const arcDrawData = this._getArcDrawData(arc);
    DonutChart._drawArc(arc, arcDrawData);
  }

  _getArcDrawData(arc) {
    const currentStyle = this._getArcStyle(arc);
    return DonutChart._calculateArcDrawData(
      arc,
      currentStyle,
      this.donutParams.ratesAmountWithGaps,
      { width: this.donutParams.canvasWidth, height: this.donutParams.canvasHeight },
    );
  }

  _updateActiveCaption() {
    if (!this.activeArc?.value) {
      this.$activeValue.text(this.donutParams.allRatesAmount);
      this.$activeValue.css('color', 'grey');

      this.$activeValueText.text(ruDeclination(
        this.donutParams.allRatesAmount, 'голос||а|ов',
      ));
      this.$activeValueText.css('color', 'grey');
    } else {
      this.$activeValue.text(this.activeArc.value);
      this.$activeValue.css('color', this.activeArc.color);

      this.$activeValueText.text(ruDeclination(this.activeArc.value, 'голос||а|ов'));
      this.$activeValueText.css('color', this.activeArc.color);
    }
  }

  _handleArcClick(arc) {
    this._changeActiveArc(arc);
    this._redrawArc(arc);
    this._updateActiveCaption(this.activeArc?.value, this.activeArc?.color);
  }

  _handleArcMouseEnter(arc, mouseEvent) {
    $(mouseEvent.target).addClass(DonutChart.donutArcActiveClass);
    this._redrawArc(arc);
  }

  _handleArcMouseLeave(arc, mouseEvent) {
    if (arc !== this.activeArc) $(mouseEvent.target).removeClass(DonutChart.donutArcActiveClass);
    this._redrawArc(arc);
  }

  _addHandlerToArcs(eventName, handler) {
    this.arcs.forEach((arc) => {
      const handleExactArcEvent = (event) => {
        handler.apply(this, [arc, event]);
      };

      arc.$arc.on(`${eventName}.donut-chart`, handleExactArcEvent);
    });
  }

  static _getRatesWithGaps(rates, gapAngle, arcsCount) {
    return rates / (1 - ((gapAngle * arcsCount) / 360));
  }

  _getArcsAndRatesAmounts() {
    const result = { arcs: 0, rates: 0 };

    this.arcs.forEach((arc) => {
      if (arc.value === 0) { return; }

      result.rates += arc.value;
      result.arcs += 1;
    });

    return result;
  }

  static _getAngleFromArcLength(arcLength, radius) {
    return (180 * arcLength) / (Math.PI * radius);
  }

  _drawDonutOnCanvas() {
    this.arcs[0].startingAngle = this.donutParams.startingAngle;

    this.arcs.forEach((arc, i) => {
      if (arc.isActive) this._changeActiveArc(arc);

      this._redrawArc(arc);

      if (i + 1 < this.arcs.length) {
        this.arcs[i + 1].startingAngle = arc.endingAngle + this.donutParams.gapsAngle;
      }
    });

    this._updateActiveCaption();
  }
}

export default DonutChart;
