import "jquery-ui/ui/widgets/spinner"
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
            '<button class= "input__dropdownDecrease_type_dropdown input__button_type_spinner ui-spinner-button ui-spinner-down">-</button>',
            '<button class= "input__dropdownIncrease_type_dropdown input__button_type_spinner ui-spinner-button ui-spinner-up">+</button>'];
    },
    //обёртка своя есть
    _uiSpinnerHtml: function () {
        return "";
    }
});

$(".input_type_dropdown").each(function () {
    let spinnerValue = $(this).find(".input__value_type_spinner");

    let spinner = spinnerValue.spinner({
        min: spinnerValue.attr("data-min"),
        max: spinnerValue.attr("data-max"),
    });
    //console.log(spinner);
});
