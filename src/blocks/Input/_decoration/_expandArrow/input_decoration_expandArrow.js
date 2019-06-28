let addClickToArrow = function (arrowElement, expandableElement, controlElement, labelElement) {
    $(controlElement).click(function (event) {
        if ($(arrowElement).hasClass("expanded")) {
            expandableElement.hide();
        } else {
            expandableElement.show();
        }
    });
};

let disableLabelClicks = function (event, label) {
    event.preventDefault(); //при клике на заголовок/стрелку итак происходит анфокус и календарь прячется, лишний клик не нужен
};

$(".input__arrow_decoration_expandArrow").each(function () {
    let expandArrow = $(this);
    let control = $(this).siblings(".input__control_decoration_expandArrow");
    let ownerLabel = $(this).parent();
    let expandableElement;

    if ($(control).hasClass("input__control_type_datepicker")) {
        $(control).each(function () {
            expandableElement = $(this).data("datepicker");
            expandableElement.update({
                onHide: function (inst, animationCompleted) {
                    if (!animationCompleted) {
                        $(expandArrow).text("expand_more");
                        return;
                    }
                    $(expandArrow).removeClass("expanded");
                    $(ownerLabel).unbind("click", disableLabelClicks); //чтобы лейбловые прокликивания снова заработали - нужно показывать календарь при клике на что-то кроме инпута
                },
                onShow: function (inst, animationCompleted) {
                    if (!animationCompleted) {
                        $(expandArrow).text("expand_less");
                        return;
                    }
                    $(expandArrow).addClass("expanded");
                    $(ownerLabel).click(disableLabelClicks);
                },
                todayButton: false,
            });
        })
    }
    if (expandableElement) {
        addClickToArrow(expandArrow, expandableElement, control, ownerLabel);
    }
});
