import "jquery-ui/ui/effects/effect-fade"
import {ruDeclination} from "../../../../common/functions";

/**
 * Функция для получения пар имя-значение со всех переданных спиннеров
 *
 * @param spinnerElements   массив спиннеров
 * @returns {Array}
 */
let getAllNamesValues = function (spinnerElements) {
    let result = [];

    $(spinnerElements).each(function () {
        result.push({
            name: $(this).attr("data-name"),
            value: parseInt($(this).val()),
        });
    });
    return result;
};

const typeRooms = "rooms", typeCustomers = "customers";
let getDropdownType = function (dropdown) {
    if ($(dropdown).hasClass("input__dropdownListWrapper_rooms")) {
        return typeRooms;
    } else if ($(dropdown).hasClass("input__dropdownListWrapper_customers")) {
        return typeCustomers;
    } else return "";
};

let selectNiceWord = function (itemsCount, itemName) {
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
    }

    return result;
};

/**
 * Создание строки, содержащей суммарную информацию по дропдауну.
 * Формат строки зависит от типа дропдауна
 *
 * @param namesValues   массив пар имя-значение, из которых составляется строка
 * @param dropdownType  тип дропдауна
 * @returns {string}    результирующая строка
 */
let createInputText = function (namesValues, dropdownType) {
    let result = "";
    if (isAllValuesZero(namesValues)) return result;

    switch (dropdownType) {
        case typeRooms: {
            for (let i = 0; i < namesValues.length; i++) {
                result += `${namesValues[i].value} ${selectNiceWord(namesValues[i].value, namesValues[i].name)}, `;
            }
            result = result.substring(0, result.length - 2);
            break;
        }
        case typeCustomers: {
            let sum = 0;
            for (let i = 0; i < namesValues.length; i++) {
                sum += parseInt(namesValues[i].value);
            }
            result += `${sum} ${selectNiceWord(sum, "гости")}`;
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
};

let changeInputText = function (dropdown, namesValues, input) {
    let dropdownType = getDropdownType(dropdown);
    let newInputText = createInputText(namesValues, dropdownType);
    $(input).val(newInputText);
};


let isAllValuesZero = function (namesValues) {
    for (let i = 0; i < namesValues.length; i++) {
        if (parseInt((namesValues[i].value)) !== 0) {
            return false;
        }
    }
    return true;
};

/**
 * Поэлементное сравнение двух массивов имя-значение по значениям.
 * @param namesValues1  первый массив
 * @param namesValues2  второй массив
 * @returns {boolean}   равны ли они
 */
let isValuesEqual = function (namesValues1, namesValues2) {
    if (namesValues1.length !== namesValues2.length) return false;

    for (let i = 0; i < namesValues1.length; i++) {
        if (namesValues1[i].value !== namesValues2[i].value) return false;
    }

    return true;
};

let manageControlsVisibility = function (oldNamesValues, namesValues, clearButton, confirmButton, buttonsContainer) {
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
};

let clearSpinnersValues = function (namesValues, spinners) {
    setSpinnerValues(0, namesValues, spinners, ["value"])
};

let setSpinnerValues = function (namesValuesToSet, namesValuesToChange, spinners, options) {
    for (let i = 0; i < spinners.length; i++) {
        if (options.includes("array")) {
            namesValuesToChange[i].value = namesValuesToSet[i].value;
            $(spinners[i]).spinner("value", namesValuesToSet[i].value);
        }
        if (options.includes("value")) {
            namesValuesToChange[i].value = namesValuesToSet;
            $(spinners[i]).spinner("value", namesValuesToSet);
        }
    }
};

let dropdownOnChange = function (oldNamesValues, namesValues, spinners, clearButton, confirmButton, buttonsContainer, dropdown, input) {
    setSpinnerValues(oldNamesValues, namesValues,
        spinners, ["array"]);
    manageControlsVisibility(oldNamesValues, namesValues,
        clearButton, confirmButton, buttonsContainer);
    changeInputText(dropdown, namesValues, input);
};


const dropdownVisibleClass = "input__dropdownListWrapper_visible";
$(".input_type_dropdown").each(function () {
    let inputWrapper = $(this);
    let dropdown = $(this).children(".input__dropdownListWrapper_type_dropdown");
    let control = $(this).find(".input__control_type_dropdown");
    let spinnerValueElements = $(this).find(".input__value_type_spinner");
    let controlButtonsContainer = $(this).find(".input__controlButtonsContainer");
    let clearButton = $(this).find(".input__clearButton");
    let confirmButton = $(this).find(".input__confirmButton");

    const dropdownType = getDropdownType(dropdown);

    let spinnersNameValue = getAllNamesValues(spinnerValueElements);
    let oldSpinnersNameValue = getAllNamesValues(spinnerValueElements);

    $(clearButton).click(function () {
        clearSpinnersValues(spinnersNameValue, spinnerValueElements);

        manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue,
            clearButton, confirmButton, controlButtonsContainer);

        changeInputText(dropdown, spinnersNameValue, control);
    });

    $(confirmButton).click(function () {
        $(dropdown).toggle("fade");
        $(dropdown).toggleClass(dropdownVisibleClass);

        oldSpinnersNameValue = getAllNamesValues(spinnerValueElements);

        manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue,
            clearButton, confirmButton, controlButtonsContainer);
    });

    //on spin
    $(spinnerValueElements).each(function () {
        $(this).on("spin", function (event, ui) {
            spinnersNameValue[$(this).attr("data-index")].value = ui.value;

            changeInputText(dropdown, spinnersNameValue, control);

            manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue,
                clearButton, confirmButton, controlButtonsContainer);
        });
    });


    $(dropdown).position({
        my: "center",
        at: "center",
        of: control
    });

    let clickedElement;

    $(document).click(function (event) {
        clickedElement = $(event.target);

        //если клик происходит не в дропдауне
        if (!$.contains($(inputWrapper).get(0), $(clickedElement).get(0))) {
            //и дропдаун отображается
            if ($(dropdown).hasClass(dropdownVisibleClass)) {
                $(dropdown).toggle("fade");
                $(dropdown).toggleClass(dropdownVisibleClass);

                setSpinnerValues(oldSpinnersNameValue, spinnersNameValue,
                    spinnerValueElements, ["array"]);
                manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue,
                    clearButton, confirmButton, controlButtonsContainer);
                changeInputText(dropdown, spinnersNameValue, control);
            }
            $(control).removeClass("input__control_focused");
        }
    });

    $(control).focus(function () {
        $(control).addClass("input__control_focused");
    });

    $(control).click(function () {
        $(dropdown).toggle("fade");
        $(dropdown).toggleClass(dropdownVisibleClass);

        if (!$(dropdown).hasClass(dropdownVisibleClass)) {
            dropdownOnChange(oldSpinnersNameValue, spinnersNameValue,
                spinnerValueElements, clearButton, confirmButton,
                controlButtonsContainer, dropdown, control);
        }
    });
});
