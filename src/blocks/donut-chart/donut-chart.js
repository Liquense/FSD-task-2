import { getAverageNum, ruDeclination } from '../../common/functions';
import { calculateAngleFromArcLength, polarCoordinatesToCartesian } from '../../common/math';

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

    this.donutParams.canvasWidth = this.donutParams.activeStyle.outerRadius;
    this.donutParams.canvasHeight = this.donutParams.activeStyle.outerRadius;
    this.donutParams.gapsAngle = calculateAngleFromArcLength(
      this.donutParams.arcsGap, arcDefaultRadius,
    );
    this.donutParams.startingAngle = 90 + this.donutParams.gapsAngle / 2;

    const { arcs, rates } = this._getArcsAndRatesAmounts();
    this.donutParams.notZeroArcs = arcs;
    this.donutParams.allRatesAmount = rates;
    this.donutParams.ratesAmountWithGaps = this._calculateRatesWithGaps();
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

  static _calculateArcEndingAngle(startingAngle, arcValue, allRatesAmount) {
    const arcValueProportion = arcValue / allRatesAmount;
    const arcAngle = 360 * arcValueProportion;

    return startingAngle + arcAngle;
  }

  _changeActiveArc(arc) {
    const oldActiveArc = this.activeArc;

    if (arc === this.activeArc) { this.activeArc = undefined; } else {
      this.activeArc = arc;
      if (arc) arc.$arc.addClass(DonutChart.donutArcActiveClass);
    }

    if (oldActiveArc) {
      oldActiveArc.$arc.removeClass(DonutChart.donutArcActiveClass);
      this._drawArc(oldActiveArc);
    }
  }

  _drawArc(arc) {
    const arcDrawData = this._getArcDrawData(arc);

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

  _getArcDrawData(arc) {
    const currentStyle = this._getArcStyle(arc);
    const allRatesAmount = this.donutParams.ratesAmountWithGaps;
    const canvasSize = {
      width: this.donutParams.canvasWidth,
      height: this.donutParams.canvasHeight,
    };
    const { startingAngle } = arc;

    const endingAngle = DonutChart._calculateArcEndingAngle(
      startingAngle, arc.value, allRatesAmount,
    );
    arc.endingAngle = endingAngle;
    const startX = canvasSize.width / 2;
    const startY = canvasSize.height / 2;
    const strokeWidth = currentStyle.outerRadius - currentStyle.innerRadius;
    const arcRadius = currentStyle.outerRadius / 2 - strokeWidth / 2;
    const arcAngle = endingAngle - startingAngle;

    const firstPoint = polarCoordinatesToCartesian(
      arcRadius, startingAngle, startX, startY,
    );
    const secondPoint = polarCoordinatesToCartesian(
      arcRadius, endingAngle, startX, startY,
    );

    return {
      firstPoint, secondPoint, arcRadius, strokeWidth, startX, startY, arcAngle,
    };
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
    this._drawArc(arc);
    this._updateActiveCaption(this.activeArc?.value, this.activeArc?.color);
  }

  _handleArcMouseEnter(arc, mouseEvent) {
    $(mouseEvent.target).addClass(DonutChart.donutArcActiveClass);
    this._drawArc(arc);
  }

  _handleArcMouseLeave(arc, mouseEvent) {
    if (arc !== this.activeArc) $(mouseEvent.target).removeClass(DonutChart.donutArcActiveClass);
    this._drawArc(arc);
  }

  _addHandlerToArcs(eventName, handler) {
    this.arcs.forEach((arc) => {
      const handleExactArcEvent = (event) => {
        handler.apply(this, [arc, event]);
      };

      arc.$arc.on(`${eventName}.donut-chart`, handleExactArcEvent);
    });
  }

  _calculateRatesWithGaps() {
    const { rates, arcs } = this._getArcsAndRatesAmounts();

    return rates / (1 - ((this.donutParams.gapsAngle * arcs) / 360));
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

  _drawDonutOnCanvas() {
    this.arcs[0].startingAngle = this.donutParams.startingAngle;

    this.arcs.forEach((arc, i) => {
      if (arc.isActive) this._changeActiveArc(arc);

      this._drawArc(arc);

      if (i + 1 < this.arcs.length) {
        this.arcs[i + 1].startingAngle = arc.endingAngle + this.donutParams.gapsAngle;
      }
    });

    this._updateActiveCaption();
  }
}

export default DonutChart;
