import "../../../../assets/images/arrow_back.svg"
import "../../../../assets/images/expand_more.svg"

let confirmButton = '<div class="button button_type_text input_type_datepicker__confirmButton">' +
    '<button class="button__control text_type_label-CTA datepicker--button" data-action="hide">Применить' +
    '</button><div class="button__decoration material-icons"></div></div>';
let clearButton = '<div class="button button_type_text button_hovered input_type_datepicker__clearButton">' +
    '<button class="button__control text_type_label-CTA datepicker--button" data-action="clear">Очистить' +
    '</button><div class="button__decoration material-icons"></div></div>';

export let outerDatepicker;
$(".input__control_type_datepicker").each(function () {
    let inputControl = this;
    let datepicker = $(this).datepicker({
        range: true,
        //inline: true,
        dateFormat: "d M",
        multipleDatesSeparator: " - ",
        todayButton: true,
        showEvent: "",
        offset: 5,
        navTitles: {
            days: '<span class="text_type_itemTitle">MM yyyy</span>',
            months: '<span class="text_type_itemTitle">yyyy</span>',
            years: '<span class="text_type_itemTitle">yyyy1 - yyyy2</span>'
        },
        prevHtml: '<img src="./images/arrow_back.svg" alt="назад"">',
        nextHtml: '<img src="./images/arrow_back.svg" alt="назад" style="transform: scale(-1, 1)">',
        minDate: new Date(),
    }).data('datepicker');

    datepicker.$datepicker.find('.datepicker--button[data-action="today"]').remove();
    datepicker.$datepicker.find(".datepicker--buttons").append(clearButton);
    datepicker.$datepicker.find(".datepicker--buttons").append(confirmButton);
    outerDatepicker = datepicker;
});

