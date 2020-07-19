/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком
import { getAverageNum, ruDeclination } from '../../common/functions';

const donutTemplate = require('./donut-template.pug');

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

  activeArc;

  constructor(rootElement, donutParams) {
    this._initParams(rootElement, donutParams);
    this._createDonut();
    this._initEvents();
  }

  _initElementsParams() {
    this.$dataTextContainer = this.$donutContainer.find('.js-donut-chart__active-data');
    this.$donutCanvas = this.$donutContainer.find('.js-donut-chart__svg');
    this.$donutArcs = this.$donutCanvas.find('.js-donut-chart__svg-arc');
    this.$donutLegend = this.$donutContainer.find('.js-donut-chart__legend');
    this.$legendItems = this.$donutLegend.find('.js-donut-chart__legend-item');
    this.$activeValue = this.$dataTextContainer.find('.js-donut-chart__active-value');
    this.$activeValueText = this.$dataTextContainer.find('.js-donut-chart__value-text');
  }

  _initParams(rootElement,
    params = {
      data: [
        { caption: '1', value: 1, background: 'red' },
        { caption: '2', value: 2, background: 'green' },
        { caption: '3', value: 3, background: 'blue' },
        { caption: '4', value: 4, background: 'black' },
      ],
      defaultStyle: {
        outerRadius: 100,
        innerRadius: 95,
      },
      activeStyle: {
        outerRadius: 105,
        innerRadius: 90,
      },
      arcsGap: 5,
    }) {
    this.$donutContainer = $(rootElement);

    this.$donutContainer.html(donutTemplate({ arcs: params.data }));
    this._initElementsParams();

    const additionalParams = DonutChart._getAdditionalParams(params);
    this.donutParams = { ...params, ...additionalParams };
  }

  _createDonut() {
    this._addJqObjectsToArcs();
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

  static _getSecondAngle(firstAngle, arcValue, ratesCount) {
    const arcValueProportion = arcValue / ratesCount;
    const arcAngle = 360 * arcValueProportion;

    return firstAngle + arcAngle;
  }

  static _degreesToRads(degreeAngleValue) {
    return (degreeAngleValue / 180) * Math.PI;
  }

  /**
   * Получить прямоугольные координаты из полярных
   * @param length радиус окружности
   * @param angle угол поворота
   * @param x0 Х точки отсчёта
   * @param y0 У точки отсчёта
   * @returns {{x: number, y: number}}
   */
  static _toCartesian(length, angle, x0 = 0, y0 = 0) {
    const result = { x: 0, y: 0 };
    const angleRads = DonutChart._degreesToRads(angle);

    result.x = x0 + length * Math.cos(angleRads);
    // вычитаем, потому что на канве ось перевёрнута
    result.y = y0 - length * Math.sin(angleRads);

    return result;
  }

  /**
   * Если arc равен this.activeArc - активное состояние снимается
   * @param arc
   * @private
   */
  _changeActiveArc(arc) {
    const oldActiveArc = this.activeArc;

    if (arc === this.activeArc) { this.activeArc = undefined; } else {
      this.activeArc = arc;
      // eslint-disable-next-line no-unused-expressions
      arc?.$arc.addClass(DonutChart.donutArcActiveClass);
    }

    if (oldActiveArc) {
      oldActiveArc.$arc.removeClass(DonutChart.donutArcActiveClass);
      this._redrawArc(oldActiveArc);
    }
  }

  /**
   * Формирует и возвращает массив данных, необходимых для отрисовки дуги
   * @param arc
   * @param style активная или обычная
   * @param ratesCount общее количество отзывов
   * @param canvasSize
   * @returns
   * {secondPoint, strokeWidth, firstPoint, arcRadius, endingAngle, startY, startX, arcAngle}
   */
  static _calculateArcDrawData(arc, style, ratesCount, canvasSize) {
    const { startingAngle } = arc;

    const endingAngle = DonutChart._getSecondAngle(
      startingAngle, arc.value, ratesCount,
    );
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
      endingAngle,
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
      this.donutParams.ratesCountWithGaps,
      { width: this.donutParams.canvasWidth, height: this.donutParams.canvasHeight },
    );
  }

  /**
   * Выводит в текстовое поле значение выбранной дуги и меняет его цвет
   */
  _updateActiveValue() {
    if (!this.activeArc?.value) {
      this.$activeValue.text(this.donutParams.ratesCount);
      this.$activeValue.css('color', 'grey');

      this.$activeValueText.text(ruDeclination(
        this.donutParams.ratesCount, 'голос||а|ов',
      ));
      this.$activeValueText.css('color', 'grey');
    } else {
      this.$activeValue.text(this.activeArc.value);
      this.$activeValue.css('color', this.activeArc.firstColor);

      this.$activeValueText.text(ruDeclination(this.activeArc.value, 'голос||а|ов'));
      this.$activeValueText.css('color', this.activeArc.firstColor);
    }
  }

  _handleArcClick(arc) {
    this._changeActiveArc(arc);
    this._redrawArc(arc);
    this._updateActiveValue(this.activeArc?.value, this.activeArc?.firstColor);
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
    this.donutParams.data.forEach((arc) => {
      const handleExactArcEvent = (event) => {
        handler.apply(this, [arc, event]);
      };

      arc.$arc.on(`${eventName}.donut-chart`, handleExactArcEvent);
    });
  }

  static _getRatesWithGaps(rates, gapAngle, arcsCount) {
    return rates / (1 - ((gapAngle * arcsCount) / 360));
  }

  static _getArcsAndRatesAmount(arcsArray) {
    const result = { arcs: 0, rates: 0 };

    arcsArray.forEach((arc) => {
      if (arc.value === 0) { return; }
      result.rates += arc.value;
      result.arcs += 1;
    });

    return result;
  }

  static _getAngleFromArcLength(arcLength, radius) {
    return (180 * arcLength) / (Math.PI * radius);
  }

  static _getAdditionalParams(params) {
    const additionalParams = {};
    const arcDefaultRadius = getAverageNum(
      params.defaultStyle.outerRadius, params.defaultStyle.innerRadius,
    );
    const arcsAndRatesCount = DonutChart._getArcsAndRatesAmount(params.data);

    additionalParams.canvasWidth = params.activeStyle.outerRadius;
    additionalParams.canvasHeight = params.activeStyle.outerRadius;
    additionalParams.gapsAngle = DonutChart._getAngleFromArcLength(
      params.arcsGap, arcDefaultRadius,
    );
    additionalParams.startingAngle = 90 + additionalParams.gapsAngle / 2;
    additionalParams.notZeroArcs = arcsAndRatesCount.arcs;
    additionalParams.ratesCount = arcsAndRatesCount.rates;
    additionalParams.ratesCountWithGaps = DonutChart._getRatesWithGaps(
      arcsAndRatesCount.rates,
      additionalParams.gapsAngle,
      arcsAndRatesCount.arcs,
    );

    return additionalParams;
  }

  _drawDonutOnCanvas() {
    const arcsDataArray = this.donutParams.data;

    arcsDataArray[0].startingAngle = this.donutParams.startingAngle;

    arcsDataArray.forEach((arc, i) => {
      // добавляем класс, если в параметрах передано, что дуга активная
      if (arc.isActive) this._changeActiveArc(arc);

      const arcDrawData = this._getArcDrawData(arc);
      DonutChart._drawArc(arc, arcDrawData);

      if (i + 1 < arcsDataArray.length) {
        // записываем в следующую дугу угол, с которого она должна начинаться
        arcsDataArray[i + 1]
          .startingAngle = arcDrawData.endingAngle + this.donutParams.gapsAngle;
      }
    });

    this._updateActiveValue();
  }

  _addJqObjectsToArcs() {
    this.donutParams.data.forEach((arc, i) => {
      arc.$arc = $(this.$donutArcs[i]);
      arc.$legend = $(this.$legendItems[i]);
    });
  }
}

export default DonutChart;
