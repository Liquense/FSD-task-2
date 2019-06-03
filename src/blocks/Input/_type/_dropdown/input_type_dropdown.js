import "jquery-ui/ui/effects/effect-fade"
$(".input_type_dropdown").each(function () {
    let dropdown = $(this).children(".input__dropdown_type_dropdown");
    let control = $(this).find(".input__control_type_dropdown");
    let numericUpDown = $(this).find(".input__dropdownValue_type_dropdown");

    let spinner = numericUpDown.spinner({
        _buttonHtml: function () {
            return "" +
                "<button class='ui-spinner-button ui-spinner-up'>" +
                "<span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" +
                "</button>" +
                "<button class='ui-spinner-button ui-spinner-down'>" +
                "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" +
                "</button>";
        },
        _uiSpinnerHtml: function() {
            return "<div class='ui-spinner ui-widget ui-widget-content'></div>";
        }
    });

    $(dropdown).position({
       my: "center",
       at: "center",
       of: control
    });

    $(dropdown).toggle();
    $(control).click(function () {
        $(dropdown).toggle( "fade");
        console.log("click");
    });
});
