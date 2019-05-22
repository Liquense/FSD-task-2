import "../../../../assets/images/arrow_back.svg"
import "../../../../assets/images/expand_more.svg"

let confirmButton = '<a class="link text_type_label-CTA input_type_datepicker__confirmButton datepicker--button" data-action="hide" href="#">Применить</link>';
let clearButton = '<a class="link text_type_label-CTA input_type_datepicker__clearButton link_hovered datepicker--button" data-action="clear" href="#">Очистить</link>';
let leftArrow = '<img src="./images/arrow_back.svg" alt="назад" class="datepicker--nav-action" data-action="prev">';
let rightArrow = '<img src="./images/arrow_back.svg" alt="вперёд" class="datepicker--nav-action" data-action="next" style="transform: scale(-1, 1)">';

let customizeNav = function (datepicker) {
    if (typeof datepicker !== 'undefined') {
        datepicker.$nav.find('.datepicker--nav-action[data-action="prev"]').remove();
        datepicker.$nav.find('.datepicker--nav-action[data-action="next"]').remove();
        datepicker.$nav.prepend(leftArrow);
        datepicker.$nav.append(rightArrow);
    }
};

export let outerDatepicker;
$(".input__control_type_datepicker").each(function () {
    let datepicker = $(this).datepicker({
        //range: true,
        //inline: true,
        todayButton: true,
        offset: 5,
        navTitles: {
            days: '<span class="text_type_itemTitle">MM yyyy</span>'
        },
        prevHtml: '<img src="./images/arrow_back.svg" alt="назад"">',
        nextHtml: '<img src="./images/arrow_back.svg" alt="назад" style="transform: scale(-1, 1)">',
        minDate: new Date(),
    }).data('datepicker');
    console.log(datepicker);

    datepicker.$datepicker.find('.datepicker--button[data-action="today"]').remove();
    datepicker.$datepicker.find(".datepicker--buttons").append(clearButton);
    datepicker.$datepicker.find(".datepicker--buttons").append(confirmButton);
    outerDatepicker = datepicker;
});

