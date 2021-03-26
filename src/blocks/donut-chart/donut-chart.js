import { getAverageNum, ruDeclination } from '../../common/functions';
import {
  calculateAngleFromArcLength,
  calculateCircleLength,
  polarCoordinatesToCartesian,
} from '../../common/math';

import './donut-chart.scss';

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

  donutParams;

  arcs = [];

  activeArc;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initDonutParams();
    this._initArcs();
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

  _initDonutParams() {
    const defaultInnerRadius = parseFloat(this.$donutCanvas.attr('data-default-inner-radius'));
    const defaultOuterRadius = parseFloat(this.$donutCanvas.attr('data-default-outer-radius'));
    const arcDefaultRadius = getAverageNum(defaultOuterRadius, defaultInnerRadius);
    const activeOuterRadius = parseFloat(this.$donutCanvas.attr('data-active-outer-radius'));

    const arcGap = parseFloat(this.$donutCanvas.attr('data-arcs-gap'));
    const gapPart = arcGap / calculateCircleLength(arcDefaultRadius);

    const { arcs, rates } = this._getArcsAndRatesAmounts();

    this.donutParams = {
      arcGap,
      defaultStyle: {
        midRadius: arcDefaultRadius,
        innerRadius: defaultInnerRadius,
        outerRadius: defaultOuterRadius,
      },
      activeStyle: {
        innerRadius: parseFloat(this.$donutCanvas.attr('data-active-inner-radius')),
        outerRadius: activeOuterRadius,
      },
      canvasWidth: activeOuterRadius * 2,
      canvasHeight: activeOuterRadius * 2,
      gapAngle: calculateAngleFromArcLength(arcGap, arcDefaultRadius),
      nonZeroArcs: arcs,
      ratesAmount: rates,
      ratesAmountWithGaps: rates / (1 - (gapPart * arcs)),
    };
  }

  _initArcs() {
    this.$donutArcs.each(this._initArc);
  }

  _initArc = (index, arc) => {
    const $arc = $(arc);
    const value = Number.parseFloat($arc.attr('data-value'));
    const color = $arc.attr('data-color');
    const isActive = $arc.attr('data-is-active') === 'true';
    const startingAngle = index
      ? this.arcs.slice(-1)[0].endingAngle + this.donutParams.gapAngle
      : 90 + (this.donutParams.gapAngle / 2);

    this.arcs.push({
      value,
      $arc,
      isActive,
      color,
      startingAngle,
      endingAngle: this._calculateArcEndingAngle({ startingAngle, value }),
    });
  }

  _calculateArcEndingAngle({ startingAngle, value }) {
    const arcValueProportion = value / this.donutParams.ratesAmountWithGaps;
    const pieLength = 2 * Math.PI * this.donutParams.defaultStyle.midRadius;
    const arcAngle = calculateAngleFromArcLength(
      arcValueProportion * pieLength,
      this.donutParams.defaultStyle.midRadius,
    );

    return startingAngle + arcAngle;
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

  _changeActiveArc(arc) {
    const oldActiveArc = this.activeArc;

    if (arc === this.activeArc) {
      this.activeArc = null;
    } else {
      this.activeArc = arc;
      arc?.$arc.addClass(DonutChart.donutArcActiveClass);
    }

    if (oldActiveArc) {
      oldActiveArc.$arc.removeClass(DonutChart.donutArcActiveClass);
      this._drawArc(oldActiveArc);
    }
  }

  _drawArc(arc) {
    const {
      arcAngle, arcRadius, firstPoint, secondPoint, strokeWidth,
    } = this._getArcDrawData(arc);
    const isLargeArc = arcAngle > 180 ? 1 : 0;

    arc.$arc.attr('stroke-width', strokeWidth);
    arc.$arc.attr(
      'd',
      `M ${firstPoint.x},${firstPoint.y} A ${arcRadius} ${arcRadius} 0 ${isLargeArc} 0 ${secondPoint.x},${secondPoint.y}`,
    );
  }

  _getArcDrawData(arc) {
    const currentStyle = this._getArcStyle(arc);
    const { startingAngle } = arc;
    const { endingAngle } = arc;

    const startX = this.donutParams.canvasWidth / 2;
    const startY = this.donutParams.canvasHeight / 2;
    const strokeWidth = currentStyle.outerRadius - currentStyle.innerRadius;
    const arcRadius = (currentStyle.outerRadius - (strokeWidth / 2));
    const arcAngle = endingAngle - startingAngle;
    const firstPoint = polarCoordinatesToCartesian(
      arcRadius, startingAngle, startX, startY,
    );
    const secondPoint = polarCoordinatesToCartesian(
      arcRadius, endingAngle, startX, startY,
    );

    return {
      firstPoint, secondPoint, arcRadius, strokeWidth, arcAngle,
    };
  }

  _updateActiveCaption() {
    if (!this.activeArc?.value) {
      this.$activeValue.text(this.donutParams.ratesAmount);
      this.$activeValueText.text(ruDeclination(this.donutParams.ratesAmount, 'голос||а|ов'));

      this.$dataTextContainer.css('--color', 'black');
    } else {
      this.$activeValue.text(this.activeArc.value);
      this.$activeValueText.text(ruDeclination(this.activeArc.value, 'голос||а|ов'));

      this.$dataTextContainer.css('--color', this.activeArc.color);
    }
  }

  _handleArcClick(arc) {
    this._changeActiveArc(arc);
    this._drawArc(arc);
    this._updateActiveCaption();
  }

  _handleArcMouseEnter(arc, mouseEvent) {
    $(mouseEvent.target).addClass(DonutChart.donutArcActiveClass);
    this._drawArc(arc);
  }

  _handleArcMouseLeave(arc, mouseEvent) {
    if (arc !== this.activeArc) {
      $(mouseEvent.target).removeClass(DonutChart.donutArcActiveClass);
    }
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

  _getArcsAndRatesAmounts() {
    const result = { arcs: 0, rates: 0 };

    this.$donutArcs.each((index, arc) => {
      const value = Number.parseFloat($(arc).attr('data-value'));
      result.rates += value;
      result.arcs += value ? 1 : 0;
    });

    return result;
  }

  _drawDonutOnCanvas() {
    this.arcs.forEach((arc) => {
      if (arc.isActive) this._changeActiveArc(arc);

      this._drawArc(arc);
    });

    this._updateActiveCaption();
  }
}

export default DonutChart;
