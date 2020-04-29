/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком
import '../Text/text';
import './donutChart.scss';
import { copyArrayOfObjects, ruDeclination } from '../../common/functions';

const donutHTML = require('./donutTemplate.pug');

const donutArcActiveClass = 'donutChart__svgArc_active';

function getDataTextContainer($donutContainer) {
  const $imageContainer = $donutContainer.find('.donutChart__imageContainer');
  return $imageContainer.find('.donutChart__activeData');
}

function getArcStyle(arc, params) {
  if (arc.$arc.hasClass(donutArcActiveClass)) { return params.activeStyle; }
  return params.defaultStyle;
}

function getSecondAngle(firstAngle, arcValue, ratesCount) {
  const arcValueProportion = arcValue / ratesCount;
  const arcAngle = 360 * arcValueProportion;

  return firstAngle + arcAngle;
}

function degreesToRads(degreeAngleValue) {
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
function toCartesian(length, angle, x0 = 0, y0 = 0) {
  const result = { x: 0, y: 0 };
  const angleRads = degreesToRads(angle);

  result.x = x0 + length * Math.cos(angleRads);
  result.y = y0 - length * Math.sin(angleRads); // вычитаем, потому что на канвасе ось перевёрнута

  return result;
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
function getArcDrawData(arc, style, ratesCount, canvasSize) {
  const startingAngle = arc.$arc.data('startingAngle');
  const endingAngle = getSecondAngle(
    startingAngle, arc.value, ratesCount,
  );
  const startX = canvasSize.width / 2;
  const startY = canvasSize.height / 2;
  const strokeWidth = style.outerRadius - style.innerRadius;
  const arcRadius = style.outerRadius / 2 - strokeWidth / 2;
  const arcAngle = endingAngle - startingAngle;

  const firstPoint = toCartesian(arcRadius, startingAngle, startX, startY);
  const secondPoint = toCartesian(arcRadius, endingAngle, startX, startY);

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

function drawArc(arc, arcDrawData) {
  let isLargeArc = 0;
  if (arcDrawData.arcAngle > 180) { isLargeArc = 1; }

  arc.$arc.attr('stroke-width', arcDrawData.strokeWidth);
  arc.$arc.attr(
    'd', `M ${arcDrawData.firstPoint.x},${arcDrawData.firstPoint.y}
  A ${arcDrawData.arcRadius} ${arcDrawData.arcRadius}
  0 ${isLargeArc}
  0 ${arcDrawData.secondPoint.x},${arcDrawData.secondPoint.y}`,
  );
}

function initDrawArc(arc, params) {
  const currentStyle = getArcStyle(arc, params);
  const arcDrawData = getArcDrawData(
    arc,
    currentStyle,
    params.ratesCountWithGaps,
    { width: params.canvasWidth, height: params.canvasHeight },
  );
  drawArc(arc, arcDrawData);

  return arcDrawData;
}

function clearArcsActivity(arcsArray, currentArc, params) {
  arcsArray.forEach((arc) => {
    if (arc === currentArc) { return; }
    arc.$arc.removeClass(donutArcActiveClass);
    initDrawArc(arc, params);
  });
}

/**
 * Выводит в текстовое поле значение выбранной дуги и меняет его цвет
 * Если передать 0, то текст очистится
 * @param $dataTextContainer
 * @param value
 * @param color
 * @param overallCount
 */
function changeDataText($dataTextContainer, value, color, overallCount) {
  const $activeValue = $dataTextContainer.find('.donutChart__activeValue');
  const $valueText = $dataTextContainer.find('.donutChart__valueText');

  if (value === 0) {
    $activeValue.text(overallCount);
    $activeValue.css('color', 'grey');
    $valueText.text(ruDeclination(overallCount, 'голос||а|ов'));
    $valueText.css('color', 'grey');
  } else {
    $activeValue.text(value);
    $activeValue.css('color', color);
    $valueText.text(ruDeclination(value, 'голос||а|ов'));
    $valueText.css('color', color);
  }
}

function addOnClickHandlerToArcs(arcsArray, params, $dataTextContainer) {
  arcsArray.forEach((arc) => {
    arc.$arc.click(() => {
      clearArcsActivity(arcsArray, arc, params);

      arc.$arc.toggleClass(donutArcActiveClass);
      initDrawArc(arc, params);

      if (arc.$arc.hasClass(donutArcActiveClass)) {
        changeDataText(
          $dataTextContainer, arc.value, arc.firstColor,
        );
      } else {
        changeDataText(
          $dataTextContainer, 0, undefined, params.ratesCount,
        );
      }
    });
  });
}

function getRatesWithGaps(rates, gapAngle, arcsCount) {
  return rates / (1 - ((gapAngle * arcsCount) / 360));
}

function getArcsAndRatesCount(arcsArray) {
  const result = { arcs: 0, rates: 0 };

  arcsArray.forEach((arc) => {
    if (arc.value === 0) { return; }
    result.rates += arc.value;
    result.arcs += 1;
  });

  return result;
}

function getMiddleNum(firstNum, secondNum) {
  return (firstNum + secondNum) / 2;
}

function getAngleFromArcLength(arcLength, radius) {
  return (180 * arcLength) / (Math.PI * radius);
}

function getAdditionalParams(params) {
  const additionalParams = {};
  const arcDefaultRadius = getMiddleNum(
    params.defaultStyle.outerRadius, params.defaultStyle.innerRadius,
  );
  const arcsAndRatesCount = getArcsAndRatesCount(params.data);

  additionalParams.canvasWidth = params.activeStyle.outerRadius;
  additionalParams.canvasHeight = params.activeStyle.outerRadius;
  additionalParams.gapsAngle = getAngleFromArcLength(params.arcsGap, arcDefaultRadius);
  additionalParams.startingAngle = 90 + additionalParams.gapsAngle / 2;
  additionalParams.notZeroArcs = arcsAndRatesCount.arcs;
  additionalParams.ratesCount = arcsAndRatesCount.rates;
  additionalParams.ratesCountWithGaps = getRatesWithGaps(
    arcsAndRatesCount.rates, additionalParams.gapsAngle, arcsAndRatesCount.arcs,
  );

  return additionalParams;
}

function drawArcsOnSVGCanvas(arcsArray, params, $dataTextContainer) {
  arcsArray[0].$arc.data('startingAngle', params.startingAngle);

  let activeArc = null;
  arcsArray.forEach((arc, i) => {
    if (arc.value === 0) {
      if (i + 1 < arcsArray.length) { arcsArray[i + 1].$arc.data('startingAngle', params.startingAngle); }
      return;
    }
    // добавляем класс, если в параметрах передано, что дуга активная
    if (arcsArray[i].isActive) {
      arc.$arc.addClass(donutArcActiveClass);
      activeArc = arc;
    }
    // узнаём данные о нарисованной дуге
    const arcDrawData = initDrawArc(arcsArray[i], params);
    if (i + 1 < arcsArray.length) {
      // записываем в следующую дугу угол, с которого она должна начинаться
      arcsArray[i + 1].$arc.data('startingAngle', arcDrawData.endingAngle + params.gapsAngle);
    }
  });

  if (activeArc.$arc.hasClass(donutArcActiveClass)) {
    changeDataText(
      $dataTextContainer, activeArc.value, activeArc.firstColor,
    );
  } else {
    changeDataText(
      $dataTextContainer, 0,
    );
  }
}

function addJQLinksToArcs(arcsObjArray, $arcs, $legendItems) {
  arcsObjArray.forEach((arcObj, i) => {
    arcObj.$arc = $($arcs[i]);
    arcObj.$legend = $($legendItems[i]);
  });
}

function createDonut(params = {
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
  const $donutContainer = $(this);
  const arcsData = copyArrayOfObjects(params.data);
  $donutContainer.html(donutHTML({ arcs: arcsData }));
  const $dataTextContainer = getDataTextContainer($donutContainer);
  const $donutCanvas = $donutContainer.find('.donutChart__svg');
  const $donutArcs = $donutCanvas.find('.donutChart__svgArc');
  const $donutLegend = $donutContainer.find('.donutChart__legend');
  const $legendItems = $donutLegend.find('.donutChart__legendItem');

  const additionalParams = getAdditionalParams(params);
  const fullParams = { ...params, ...additionalParams };
  addJQLinksToArcs(arcsData, $donutArcs, $legendItems);
  drawArcsOnSVGCanvas(arcsData, fullParams, $dataTextContainer);

  $donutCanvas.attr('viewBox', `0 0 ${fullParams.canvasWidth} ${fullParams.canvasHeight}`);
  addOnClickHandlerToArcs(arcsData, fullParams, $dataTextContainer);
}

jQuery.fn.extend({
  donutChart: createDonut,
});
