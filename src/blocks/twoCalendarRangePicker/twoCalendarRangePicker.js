import "./twoCalendarRangePicker.scss"
import {compareDateArrays} from "../../common/functions";

let assignEnded = true;
let datepickerAddOnSelect = function (datepicker, otherDatepicker, input, number) {
    datepicker.update({
        onSelect: function (formattedDate, date, inst) {
            //если дат больше одной, то перезаписываем данные в инпуте, если одна - оставляем дефолтное поведение
            //иначе второй пикер будет очищать оба при фокусе на нём
            if (datepicker.selectedDates.length > 1) {
                let extremeDates = formattedDate.split(',');
                $(input).val(extremeDates[number]);
            }

            //проверка, чтобы не возникало бесконечной рекурсии при clear и selectDate на другом пикере
            //и не делалось ничего лишнего при одинаковых датах
            if (compareDateArrays(datepicker.selectedDates, otherDatepicker.selectedDates) || assignEnded === false) return;

            assignEnded = false;
            otherDatepicker.clear();
            otherDatepicker.selectDate(datepicker.selectedDates);
            assignEnded = true;
        }
    })
};

$(".twoCalendarRangePicker").each(function () {
    let firstInput = $(this).find(".twoCalendarRangePicker__firstDatepicker").find(".input__control_type_datepicker");
    let firstDatepicker = $(firstInput).data("datepicker");
    let secondInput = $(this).find(".twoCalendarRangePicker__secondDatepicker").find(".input__control_type_datepicker");
    let secondDatepicker = $(secondInput).data("datepicker");

    secondDatepicker.update({
        position: "bottom right"
    });
    datepickerAddOnSelect(firstDatepicker, secondDatepicker, firstInput, 0);
    datepickerAddOnSelect(secondDatepicker, firstDatepicker, secondInput, 1);
});
