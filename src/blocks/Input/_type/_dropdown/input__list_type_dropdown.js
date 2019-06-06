import "jquery-ui/ui/effects/effect-fade"

const dropdownVisibleClass = "input__dropdownListWrapper_visible";
$(".input_type_dropdown").each(function () {
    let input = $(this);
    let dropdown = $(this).children(".input__dropdownListWrapper_type_dropdown");
    let control = $(this).find(".input__control_type_dropdown");
    let numericUpDown = $(this).find(".input__value_type_spinner");
    let controlButtonsContainer = $(this).find(".input__controlButtonsContainer");
    let clearButton = $(this).find(".input__clearButton");
    let confirmButton = $(this).find(".input__confirmButton");
    let upDownContainer = $(numericUpDown).parent();


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
