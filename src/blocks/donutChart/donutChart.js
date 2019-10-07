import "../Text/text"
import "./donutChart.scss"
import {copyArrayOfObjects, ruDeclination} from "../../common/functions";

jQuery.fn.extend({
	donutChart: createDonut
});

const donutHTML = require("./donutTemplate.pug");
const donutArcActiveClass = "donutChart__svgArc_active";

function createDonut(params = {
	data: [
		{caption: "1", value: 1, background: "red"},
		{caption: "2", value: 2, background: "green"},
		{caption: "3", value: 3, background: "blue"},
		{caption: "4", value: 4, background: "black"}
	],
	defaultStyle: {
		outerRadius: 100,
		innerRadius: 95,
	},
	activeStyle: {
		outerRadius: 105,
		innerRadius: 90,
	},
	arcsGap: 5
}) {
	const $donutContainer = $(this);
	let arcsData = copyArrayOfObjects(params.data);
	$donutContainer.html(donutHTML({arcs: arcsData}));
	const $dataTextContainer = getDataTextContainer($donutContainer);
	const $donutCanvas = $donutContainer.find(".donutChart__svg");
	const $donutArcs = $donutCanvas.find(".donutChart__svgArc");
	const $donutLegend = $donutContainer.find(".donutChart__legend");
	const $legendItems = $donutLegend.find(".donutChart__legendItem");

	setAdditionalParams(params);
	addJQLinksToArcs(arcsData, $donutArcs, $legendItems);
	drawArcsOnSVGCanvas(arcsData, params);

	$donutCanvas.attr("viewBox", `0 0 ${params.canvasWidth} ${params.canvasHeight}`);
	addOnClickHandlerToArcs(arcsData, params, $dataTextContainer);
}

function getDataTextContainer($donutContainer) {
	const $imageContainer = $donutContainer.find(".donutChart__imageContainer");
	return $imageContainer.find(".donutChart__activeData");
}

function addOnClickHandlerToArcs(arcsArray, params, $dataTextContainer) {
	let activeArcIndex;

	for (let i = 0; i < arcsArray.length; i++) {
		arcsArray[i].$Arc.click(function () {
			const arc = arcsArray[i];
			clearArcsActivity(arcsArray, arc, params);

			arc.$Arc.toggleClass(donutArcActiveClass);
			initDrawArc(arc, params);

			if (arc.$Arc.hasClass(donutArcActiveClass))
				changeDataText($dataTextContainer, arc.value, arc.firstColor);
			else
				changeDataText($dataTextContainer, 0, arc.firstColor);
		});
	}
}

function clearArcsActivity(arcsArray, currentArc, params) {
	for (let arc of arcsArray) {
		if (arc === currentArc)
			continue;
		arc.$Arc.removeClass(donutArcActiveClass);
		initDrawArc(arc, params);
	}
}

/**
 * Функция выводит в текстовое поле значение выбранной дуги и меняет его цвет
 * Если передать 0, то текст очистится
 * @param $dataTextContainer
 * @param value
 * @param color
 */
function changeDataText($dataTextContainer, value, color) {
	const $activeValue = $dataTextContainer.find(".donutChart__activeValue");
	const $valueText = $dataTextContainer.find(".donutChart__valueText");

	if (value === 0) {
		$activeValue.text("");
		$valueText.text("");
	} else {
		$activeValue.text(value);
		$activeValue.css("color", color);
		$valueText.text(ruDeclination(value, "голос||а|ов"));
		$valueText.css("color", color);
	}
}

function getRatesWithGaps(rates, gapAngle, arcsCount) {
	return rates / (1 - ((gapAngle * arcsCount) / 360));
}

function getArcsAndRatesCount(arcsArray) {
	let result = {arcs: 0, rates: 0};

	for (let arc of arcsArray) {
		if (arc.value === 0)
			continue;
		result.rates += arc.value;
		result.arcs++;
	}

	return result;
}

function setAdditionalParams(params) {
	const arcDefaultRadius = getMiddleNum(params.defaultStyle.outerRadius, params.defaultStyle.innerRadius);
	const arcsAndRatesCount = getArcsAndRatesCount(params.data);

	params.canvasWidth = params.activeStyle.outerRadius;
	params.canvasHeight = params.activeStyle.outerRadius;
	params.gapsAngle = getAngleFromArcLength(params.arcsGap, arcDefaultRadius);
	params.startingAngle = 90 + params.gapsAngle / 2;
	params.notZeroArcs = arcsAndRatesCount.arcs;
	params.ratesCount = getRatesWithGaps(arcsAndRatesCount.rates, params.gapsAngle, arcsAndRatesCount.arcs);
}

function drawArcsOnSVGCanvas(arcsArray, params) {
	arcsArray[0].$Arc.data("startingAngle", params.startingAngle);

	for (let i = 0; i < arcsArray.length; i++) {
		if (arcsArray[i].value === 0) {
			if (i + 1 < arcsArray.length)
				arcsArray[i + 1].$Arc.data("startingAngle", params.startingAngle);
			continue;
		}

		const arcDrawData = initDrawArc(arcsArray[i], params);

		if (i + 1 < arcsArray.length)
			arcsArray[i + 1].$Arc.data("startingAngle", arcDrawData.endingAngle + params.gapsAngle);
	}
}

function initDrawArc(arc, params) {
	const currentStyle = getArcStyle(arc, params);
	const arcDrawData = getArcDrawData(
		arc,
		currentStyle,
		params.ratesCount,
		{width: params.canvasWidth, height: params.canvasHeight}
	);
	drawArc(arc, arcDrawData);

	return arcDrawData;
}

function drawArc(arc, arcDrawData) {
	let isLargeArc = 0;
	if (arcDrawData.arcAngle > 180)
		isLargeArc = 1;

	arc.$Arc.attr("stroke-width", arcDrawData.strokeWidth);
	arc.$Arc.attr("d", `M ${arcDrawData.firstPoint.x},${arcDrawData.firstPoint.y}
	A ${arcDrawData.arcRadius} ${arcDrawData.arcRadius} 0 ${isLargeArc} 0 ${arcDrawData.secondPoint.x},${arcDrawData.secondPoint.y}`);
}

function getArcStyle(arc, params) {
	if (arc.$Arc.hasClass(donutArcActiveClass))
		return params.activeStyle;
	else
		return params.defaultStyle
}

/**
 * Формирует и возвращает массив данных, необходимых для отрисовки дуги
 * @param arc
 * @param style активная или обычная
 * @param ratesCount общее количество отзывов
 * @param canvasSize
 * @returns {{secondPoint: *, strokeWidth: *, firstPoint: *, arcRadius: *, endingAngle: *, startY: *, startX: *, arcAngle: *}}
 */
function getArcDrawData(arc, style, ratesCount, canvasSize) {
	const startingAngle = arc.$Arc.data("startingAngle");
	const endingAngle = getSecondAngle(startingAngle, arc.value, ratesCount);
	const startX = canvasSize.width / 2;
	const startY = canvasSize.height / 2;
	const strokeWidth = style.outerRadius - style.innerRadius;
	const arcRadius = style.outerRadius / 2 - strokeWidth / 2;
	const arcAngle = endingAngle - startingAngle;

	const firstPoint = toCartesian(arcRadius, startingAngle, startX, startY);
	const secondPoint = toCartesian(arcRadius, endingAngle, startX, startY);

	return {
		firstPoint: firstPoint,
		secondPoint: secondPoint,
		arcRadius: arcRadius,
		strokeWidth: strokeWidth,
		startX: startX,
		startY: startY,
		arcAngle: arcAngle,
		endingAngle: endingAngle
	};
}

function getMiddleNum(firstNum, secondNum) {
	return (firstNum + secondNum) / 2;
}

function getSecondAngle(firstAngle, arcValue, ratesCount) {
	const arcValueProportion = arcValue / ratesCount;
	const arcAngle = 360 * arcValueProportion;

	return firstAngle + arcAngle;
}

function addJQLinksToArcs(arcsObjArray, $arcs, $legendItems) {
	for (let i = 0; i < arcsObjArray.length; i++) {
		arcsObjArray[i].$Arc = $($arcs[i]);
		arcsObjArray[i].$Legend = $($legendItems[i]);
	}
}

function getAngleFromArcLength(arcLength, radius) {
	return (180 * arcLength) / (Math.PI * radius);
}

function degreesToRads(degreeAngleValue) {
	return (degreeAngleValue / 180) * Math.PI;
}

function toPolar(x0, y0, x, y) {
	let result = {angle: 0, length: 0};
	const localX = x - x0;
	const localY = y - y0;

	result.length = Math.sqrt(localX * localX + localY * localY);
	result.angle = Math.acos(localX / result.length);

	return result;
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
	let result = {x: 0, y: 0};
	const angleRads = degreesToRads(angle);

	result.x = x0 + length * Math.cos(angleRads);
	result.y = y0 - length * Math.sin(angleRads); //вычитаем, потому что на канвасе ось перевёрнута

	return result;
}
