import "jquery-ui/ui/effects/effect-fade"

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
    const knownItems = ["спальни", "кровати", "ванные комнаты"];

    knownItems.forEach(function (element) {
        //todo: склонения слов
    });
};

let createInputText = function (namesValues, dropdownType) {
    let result = "";

    switch (dropdownType) {
        case typeRooms: {
            for (let i = 0; i < namesValues.length; i++) {
                result += `${namesValues[i].value} ${namesValues[i].name}, `;
            }
            result = result.substring(0, result.length - 2);
            break;
        }
        case typeCustomers: {
            let sum = 0;
            for (let i = 0; i < namesValues.length; i++) {
                sum += parseInt(namesValues[i].value);
            }
            result += `${sum} гостя`;
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

let isAllValuesZero = function (namesValues) {
    for (let i = 0; i < namesValues.length; i++) {
        if (parseInt((namesValues[i].value)) !== 0) {
            return false;
        }
    }

    return true;
};

let isValuesEqual = function (values1, values2) {
    if (values1.length !== values2.length) return false;

    for (let i = 0; i < values1.length; i++) {
        if (values1[i].value !== values2[i].value) return false;
    }

    return true;
};

let isButtonsContainerDisplayNeeded = function () {
  //todo: проверка на нужность отображения контейнера с управляющими кнопками
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
        $(control).val("");
        for (let i = 0; i < spinnerValueElements.length; i++) {
            spinnersNameValue[i].value = 0;
            $(spinnerValueElements[i]).spinner("value", 0);
        }
        $(clearButton).removeClass("input__clearButton_visible");
    });

    $(confirmButton).click(function () {
        $(dropdown).toggle("fade");
        $(dropdown).toggleClass(dropdownVisibleClass);
        $(confirmButton).removeClass("input__confirmButton_visible");

        oldSpinnersNameValue = getAllNamesValues(spinnerValueElements);
    });

    //on spin
    $(spinnerValueElements).each(function () {
        $(this).on("spin", function (event, ui) {
            spinnersNameValue[$(this).attr("data-index")].value = ui.value;
            console.log(spinnersNameValue);
            console.log(oldSpinnersNameValue);
            if (!isValuesEqual(oldSpinnersNameValue, spinnersNameValue)) {
                console.log("!eq");
                confirmButton.addClass("input__confirmButton_visible");
                $(controlButtonsContainer).addClass("input__controlButtonsContainer_visible");
            }
            else {
                console.log("eq");
                confirmButton.removeClass("input__confirmButton_visible");
            }

            if (!isAllValuesZero(spinnersNameValue)) {
                $(control).val(createInputText(spinnersNameValue, dropdownType));

                $(controlButtonsContainer).addClass("input__controlButtonsContainer_visible");
                $(clearButton).addClass("input__clearButton_visible");
            } else {
                $(control).val("");

                $(controlButtonsContainer).removeClass("input__controlButtonsContainer_visible");
                $(clearButton).removeClass("input__clearButton_visible");
            }
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

        if (!$.contains($(inputWrapper).get(0), $(clickedElement).get(0))) {
            if ($(dropdown).hasClass(dropdownVisibleClass)) {
                $(dropdown).toggle("fade");
                $(dropdown).toggleClass(dropdownVisibleClass);
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
    });
});
