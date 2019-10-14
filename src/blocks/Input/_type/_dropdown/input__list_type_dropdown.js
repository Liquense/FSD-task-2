import "jquery-ui/ui/effects/effect-fade"
import {ruDeclination} from "../../../../common/functions";
import {disableButtonsAtExtremum} from "../_spinner/input_type_spinner";

/**
 * Функция для получения пар имя-значение со всех переданных спиннеров
 *
 * @param spinnerElements   массив спиннеров
 * @returns {Array}
 */
function getCurrentNamesValues(spinnerElements) {
	let result = [];

	$(spinnerElements).each(function () {
		result.push({
			name: $(this).attr("data-name"),
			value: parseInt($(this).val()),
		});
	});
	return result;
}

const typeRooms = "rooms", typeCustomers = "customers";
let getDropdownType = function (dropdown) {
	let dropdownType = {};
	if ($(dropdown).hasClass("input__dropdownListWrapper_unified")) {
		dropdownType.isUnified = true;
	}
	if ($(dropdown).hasClass("input__dropdownListWrapper_rooms")) {
		dropdownType.name = typeRooms;
	} else if ($(dropdown).hasClass("input__dropdownListWrapper_customers")) {
		dropdownType.name = typeCustomers;
	} else return false;

	return dropdownType;
};

function selectNiceWord(itemsCount, itemName) {
	let result = "";

	switch (itemName.toLowerCase()) {
		case "спальни":
			result = ruDeclination(itemsCount, "Спал|ьня|ьни|ен");
			break;
		case "кровати":
			result = ruDeclination(itemsCount, "Кроват|ь|и|ей");
			break;
		case "ванные комнаты":
			result = ruDeclination(itemsCount, "Ванн|ая|ых|ых") + " "
				+ ruDeclination(itemsCount, "комнат|а|ы|");
			break;
		case "гости":
			result = ruDeclination(itemsCount, "гост|ь|я|ей");
			break;
		case "младенцы":
			result = ruDeclination(itemsCount, "младен|ец|ца|цев")
	}

	return result;
}

/**
 * Создание строки, содержащей суммарную информацию по дропдауну.
 * Формат строки зависит от типа дропдауна
 *
 * @param namesValues   массив пар имя-значение, из которых составляется строка
 * @param dropdownType  тип дропдауна
 * @returns {string}    результирующая строка
 */
function createInputText(namesValues, dropdownType) {
	let result = "";
	if (isAllValuesZero(namesValues)) return result;

	switch (dropdownType.name) {
		case typeRooms: {
			result = createRoomsString(namesValues, dropdownType.isUnified);
			break;
		}
		case typeCustomers: {
			result = createCustomersString(namesValues, dropdownType.isUnified);
			break;
		}
		default: {
			let sum = 0;
			for (let i = 0; i < namesValues.length; i++) {
				sum += namesValues[i].value;
			}
			result += `${sum} чего-то`;
			break;
		}
	}
	return result;
}

function createUnifiedString(namesValues, declinationsString) {
	let sum = 0;

	for (let i = 0; i < namesValues.length; i++) {
		sum += parseInt(namesValues[i].value);
	}

	return `${sum} ${ruDeclination(sum, declinationsString)}`;
}

function createRoomsString(namesValues, isUnified) {
	let result;

	if (isUnified) {
		result = createUnifiedString(namesValues, "комнаты")
	} else {
		result = createSeparateRoomsString(namesValues);
	}

	return result;
}

function createSeparateRoomsString(namesValues) {
	let result = "";

	for (let i = 0; i < namesValues.length; i++) {
		result += `${namesValues[i].value} ${selectNiceWord(namesValues[i].value, namesValues[i].name)}, `;
	}
	result = result.substring(0, result.length - 2);

	return result;
}

function createCustomersString(namesValues, isUnified) {
	let resultString;

	if (isUnified) {
		resultString = createUnifiedString(namesValues, "гост|ь|я|ей");
	} else {
		resultString = createCustomersWithInfantsString(namesValues);
	}

	return resultString;
}

function createCustomersWithInfantsString(namesValues) {
	let infants = 0;
	let sum = 0;

	for (let i = 0; i < namesValues.length; i++) {
		if (namesValues[i].name.toLowerCase() === "младенцы") {
			infants = namesValues[i].value;
			continue;
		}
		sum += parseInt(namesValues[i].value);
	}

	return `${sum} ${selectNiceWord(sum, "гости")}, ` +
		`${infants} ${selectNiceWord(infants, "младенцы")}`;
}

function changeInputText(dropdown, namesValues, input) {
	let dropdownType = getDropdownType(dropdown);
	let newInputText = createInputText(namesValues, dropdownType);
	$(input).val(newInputText);
}


function isAllValuesZero(namesValues) {
	for (let i = 0; i < namesValues.length; i++) {
		if (parseInt((namesValues[i].value)) !== 0) {
			return false;
		}
	}
	return true;
}

/**
 * Поэлементное сравнение двух массивов имя-значение по значениям.
 * @param namesValues1  первый массив
 * @param namesValues2  второй массив
 * @returns {boolean}   равны ли они
 */
function isValuesEqual(namesValues1, namesValues2) {
	if (namesValues1.length !== namesValues2.length) return false;

	for (let i = 0; i < namesValues1.length; i++) {
		if (namesValues1[i].value !== namesValues2[i].value) return false;
	}

	return true;
}

function manageControlsVisibility(oldNamesValues, namesValues, clearButton, confirmButton, buttonsContainer) {
	let clearVisibleClass = "input__clearButton_visible",
		confirmVisibleClass = "input__confirmButton_visible",
		containerVisibleClass = "input__controlButtonsContainer_visible";

	if (isAllValuesZero(namesValues))
		$(clearButton).removeClass(clearVisibleClass);
	else
		$(clearButton).addClass(clearVisibleClass);

	if (isValuesEqual(namesValues, oldNamesValues))
		$(confirmButton).removeClass(confirmVisibleClass);
	else
		$(confirmButton).addClass(confirmVisibleClass);

	if (!($(clearButton).hasClass(clearVisibleClass) || $(confirmButton).hasClass(confirmVisibleClass)))
		$(buttonsContainer).removeClass(containerVisibleClass);
	else
		$(buttonsContainer).addClass(containerVisibleClass);
}

function clearSpinnersValues(namesValues, spinners) {
	setSpinnerValues(0, namesValues, spinners, ["value"])
}

function setSpinnerValues(namesValuesToSet, namesValuesToChange, $spinners, options) {
	for (let i = 0; i < $spinners.length; i++) {
		const $currentSpinner = $($spinners[i]);

		if (options.includes("array")) {
			namesValuesToChange[i].value = namesValuesToSet[i].value;
			$($currentSpinner).spinner("value", namesValuesToSet[i].value);
			disableButtonsAtExtremum($currentSpinner, namesValuesToSet[i].value)
		}
		if (options.includes("value")) {
			namesValuesToChange[i].value = namesValuesToSet;
			$($currentSpinner).spinner("value", namesValuesToSet);
			disableButtonsAtExtremum($currentSpinner, namesValuesToSet)
		}
	}
}

function dropdownOnChange(oldNamesValues, namesValues, spinners, clearButton, confirmButton, buttonsContainer, dropdown, input) {
	setSpinnerValues(oldNamesValues, namesValues,
		spinners, ["array"]);
	manageControlsVisibility(oldNamesValues, namesValues,
		clearButton, confirmButton, buttonsContainer);
	changeInputText(dropdown, namesValues, input);
}

function getInitialNamesValues($spinnerElements) {
	let result = [];

	$($spinnerElements).each(function () {
		const $spinnerElement = $(this);
		result.push({
			name: $spinnerElement.attr("data-name"),
			value: parseInt($spinnerElement.attr("value") ? $spinnerElement.attr("value") : 0),
		});
	});

	return result;
}

const dropdownVisibleClass = "input__dropdownListWrapper_visible";
$(".input_type_dropdown").each(function () {
	const $inputWrapper = $(this);
	const $dropdown = $(this).children(".input__dropdownListWrapper_type_dropdown");
	const $control = $(this).find(".input__control_type_dropdown");
	const $spinnerValueElements = $(this).find(".input__value_type_spinner");
	const $controlButtonsContainer = $(this).find(".input__controlButtonsContainer");
	const $clearButton = $(this).find(".input__clearButton");
	const $confirmButton = $(this).find(".input__confirmButton");

	let spinnersNameValue = getInitialNamesValues($spinnerValueElements);
	let oldSpinnersNameValue = getInitialNamesValues($spinnerValueElements);
	changeInputText($dropdown, spinnersNameValue, $control);

	$($clearButton).click(function () {
		clearSpinnersValues(spinnersNameValue, $spinnerValueElements);

		manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue,
			$clearButton, $confirmButton, $controlButtonsContainer);

		changeInputText($dropdown, spinnersNameValue, $control);
	});

	$($confirmButton).click(function () {
		$($control).removeClass("input__control_focused");
		$($dropdown).toggle("fade");
		$($dropdown).toggleClass(dropdownVisibleClass);

		oldSpinnersNameValue = getCurrentNamesValues($spinnerValueElements);

		manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue,
			$clearButton, $confirmButton, $controlButtonsContainer);
	});

	//on spin
	$($spinnerValueElements).each(function () {
		const $spinner = $(this);

		$spinner.on("spin", function (event, ui) {
			spinnersNameValue[$spinner.attr("data-index")].value = ui.value;

			changeInputText(
				$dropdown,
				spinnersNameValue,
				$control
			);
			manageControlsVisibility(
				oldSpinnersNameValue,
				spinnersNameValue,
				$clearButton,
				$confirmButton,
				$controlButtonsContainer
			);
		});
	});

	$($dropdown).position({
		my: "center",
		at: "center",
		of: $control
	});

	let clickedElement;

	$(document).click(function (event) {
		clickedElement = $(event.target);

		//если клик происходит не в дропдауне
		if (!$.contains($($inputWrapper).get(0), $(clickedElement).get(0))) {
			//и дропдаун отображается
			if ($($dropdown).hasClass(dropdownVisibleClass)) {
				$($dropdown).toggle("fade");
				$($dropdown).toggleClass(dropdownVisibleClass);

				setSpinnerValues(oldSpinnersNameValue, spinnersNameValue,
					$spinnerValueElements, ["array"]);
				manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue,
					$clearButton, $confirmButton, $controlButtonsContainer);
				changeInputText($dropdown, spinnersNameValue, $control);
			}
			$($control).removeClass("input__control_focused");
		}
	});

	$($control).click(function () {
		$($control).toggleClass("input__control_focused");
		$($dropdown).toggle("fade");
		$($dropdown).toggleClass(dropdownVisibleClass);

		if (!$($dropdown).hasClass(dropdownVisibleClass)) {
			dropdownOnChange(oldSpinnersNameValue, spinnersNameValue,
				$spinnerValueElements, $clearButton, $confirmButton,
				$controlButtonsContainer, $dropdown, $control);
		}
	});
});

