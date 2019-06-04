let expandArrowHTML = '<img src="./images/expand_more.svg" alt="развернуть" class="input__arrow_decoration_expandArrow ">';

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

$(".input__control_decoration_expandArrow").each(function () {
    $(this).before(expandArrowHTML);
    let expandArrow = $(this).siblings(".input__arrow_decoration_expandArrow");
    let ownerLabel = $(this).parent();
    let expandableElement;

    if ($(this).hasClass("input__control_type_datepicker")) {
        $(this).each(function () {
            expandableElement = $(this).data("datepicker");
            expandableElement.update({
                onHide: function (inst, animationCompleted) {
                    if (!animationCompleted) return;
                    $(expandArrow).removeClass("expanded");
                    $(ownerLabel).unbind("click", disableLabelClicks); //чтобы лейбловые прокликивания снова заработали - нужно показывать календарь при клике на что-то кроме инпута
                },
                onShow: function (inst, animationCompleted) {
                    if (!animationCompleted) return;
                    $(expandArrow).addClass("expanded");
                    $(ownerLabel).click(disableLabelClicks);
                },
                todayButton: false,
            });
        })
    }
    if (expandableElement) {
        addClickToArrow(expandArrow, expandableElement, this, ownerLabel);
    }
});
