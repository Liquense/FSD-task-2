import "jquery-ui/ui/effects/effect-fade"

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
            '<button class= "input__dropdownDecrease_type_dropdown input__dropdownButton_type_dropdown ui-spinner-button ui-spinner-down">-</button>',
            '<button class= "input__dropdownIncrease_type_dropdown input__dropdownButton_type_dropdown ui-spinner-button ui-spinner-up">+</button>'];
    },
    _uiSpinnerHtml: function () {
        return "";
    }
});

$(".input_type_dropdown").each(function () {
    let dropdown = $(this).children(".input__dropdown_type_dropdown");
    let control = $(this).find(".input__control_type_dropdown");
    let numericUpDown = $(this).find(".input__dropdownValue_type_dropdown");
    let upDownContainer = $(numericUpDown).parent();

    let spinner = numericUpDown.spinner({});


    $(dropdown).position({
        my: "center",
        at: "center",
        of: control
    });

    $(control).focus(function () {
        $(this).addClass("input__control_focused");
    });
    $(control).blur(function (eventObject) {
        console.log($(eventObject));
    });

    $(control).click(function () {
        $(dropdown).toggle("fade");
        console.log("click");
    });
});
