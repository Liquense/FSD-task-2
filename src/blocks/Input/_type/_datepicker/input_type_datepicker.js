import "air-datepicker"
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
    let $inputControl = $(this);
    let datepicker = $inputControl.datepicker({
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

    const initDates = getInitDates($inputControl);
    setDates($inputControl, initDates);
});

function getInitDates($datepickerControl) {
    let dates = [];

    if ($datepickerControl.attr("data-firstdate"))
        dates.push(parseAttrToDate($datepickerControl.attr("data-firstDate")));
    if ($datepickerControl.attr("data-seconddate"))
        dates.push(parseAttrToDate($datepickerControl.attr("data-secondDate")));

    return dates.length === 0 ? undefined : dates;
}

/**
 * Устанавливает даты в первый календарь (второй подцепляет это значение в логике twoCalendarRangePicker)
 * Если даты не переданы, используется сегодняшняя
 * @param $datePicker
 * @param dates
 */
export function setDates($datePicker, dates) {
    if (!dates)
        return;
    console.log(dates);
    const datepickerData = $datePicker.data("datepicker");
    datepickerData.clear();
    datepickerData.selectDate(dates);
}

export function parseAttrToDate(attrDate) {
    const dateParts = attrDate.split(".");
    const day = dateParts[0],
        month = dateParts[1],
        year = dateParts[2];
    const dateString = `${year}-${month}-${day}`;

    return new Date(dateString);
}
