import "jquery-ui/ui/effects/effect-fade"

//морф, чтобы кнопки были по бокам
$.widget("ui.spinner", $.ui.spinner, {
    _enhance: function () {
        this.uiSpinner = this.element
            .attr("autocomplete", "off")
            .wrap(this._uiSpinnerHtml())
            .parent()

            // Add buttons
            .prepend(this._buttonHtml()[0])
            .append(this._buttonHtml()[1]);
    },
    _buttonHtml: function () {
        return [
            '<button class= "input__dropdownDecrease_type_dropdown input__spinnerButton_type_dropdown ui-spinner-button ui-spinner-down">-</button>',
            '<button class= "input__dropdownIncrease_type_dropdown input__spinnerButton_type_dropdown ui-spinner-button ui-spinner-up">+</button>'];
    },
    //обёртка своя есть
    _uiSpinnerHtml: function () {
        return "";
    }
});

const dropdownVisibleClass = "input__dropdownListWrapper_visible";
$(".input_type_dropdown").each(function () {
    let input = $(this);
    let dropdown = $(this).children(".input__dropdownListWrapper_type_dropdown");
    let control = $(this).find(".input__control_type_dropdown");
    let numericUpDown = $(this).find(".input__dropdownValue_type_dropdown");
    let clearButton = $(this).find(".input__clearButton");
    let confirmButton = $(this).find(".input__confirmButton");
    let upDownContainer = $(numericUpDown).parent();

    let spinner = numericUpDown.spinner({
        min: 0,
        max: 10,
    });


    $(dropdown).position({
        my: "center",
        at: "center",
        of: control
    });

    let clickedElement;

    $(document).click(function (event) {
        clickedElement = $(event.target);

        if (!$.contains($(input).get(0), $(clickedElement).get(0))) {
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
