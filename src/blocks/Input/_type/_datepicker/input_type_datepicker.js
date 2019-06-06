import "../../../../assets/images/arrow_back.svg"
import "../../../../assets/images/expand_more.svg"

let confirmButton = '<a class="button button_type_text text_type_label-CTA input_type_datepicker__confirmButton datepicker--button" data-action="hide" href="#">Применить</link>';
let clearButton = '<a class="button button_type_text button_hovered text_type_label-CTA input_type_datepicker__clearButton link_hovered datepicker--button" data-action="clear" href="#">Очистить</link>';

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

