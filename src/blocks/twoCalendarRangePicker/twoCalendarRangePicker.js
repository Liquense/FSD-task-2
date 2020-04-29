/* eslint-disable no-undef */
// jquery подключена вебпаком
import { parseAttrToDate, setDates } from '../Input/_type/_datepicker/input_type_datepicker';
import './twoCalendarRangePicker.scss';
import { compareDateArrays } from '../../common/functions';


let assignEnded = true;
function datepickerAddOnSelect(datepicker, otherDatepicker, input, number) {
  datepicker.update({
    dateFormat: '',
    multipleDatesSeparator: ',',
    onSelect(formattedDate) {
      // если дат больше одной, то перезаписываем данные в инпуте,
      // если одна - оставляем дефолтное поведение
      // иначе второй пикер будет очищать оба при фокусе на нём
      if (datepicker.selectedDates.length > 1) {
        const extremeDates = formattedDate.split(',');
        $(input).val(extremeDates[number]);
      }

      // проверка, чтобы не возникало бесконечной рекурсии при clear и selectDate на другом пикере
      // и не делалось ничего лишнего при одинаковых датах
      if (
        compareDateArrays(datepicker.selectedDates, otherDatepicker.selectedDates)
        || !assignEnded
      ) return;

      assignEnded = false;
      otherDatepicker.clear();
      otherDatepicker.selectDate(datepicker.selectedDates);
      assignEnded = true;

      $(input).change();
    },
  });
}

const $twoCalendarPickers = $('.twoCalendarRangePicker');
function initTwoCalendarPicker() {
  const $firstInput = $(this).find('.twoCalendarRangePicker__firstDatepicker').find('.input__control_type_datepicker');
  const $firstDatepicker = $firstInput.data('datepicker');
  const secondInput = $(this).find('.twoCalendarRangePicker__secondDatepicker').find('.input__control_type_datepicker');
  const secondDatepicker = $(secondInput).data('datepicker');

  secondDatepicker.update({
    position: 'bottom right',
  });
  datepickerAddOnSelect($firstDatepicker, secondDatepicker, $firstInput, 0);
  datepickerAddOnSelect(secondDatepicker, $firstDatepicker, secondInput, 1);
}

$twoCalendarPickers.each(initTwoCalendarPicker);

function getInitDates($rangePicker) {
  const dates = [];

  if ($rangePicker.attr('data-firstdate')) {
    dates.push(parseAttrToDate($rangePicker.attr('data-firstdate')));
  }
  if ($rangePicker.attr('data-seconddate')) {
    dates.push(parseAttrToDate($rangePicker.attr('data-seconddate')));
  }

  return dates.length === 0 ? undefined : dates;
}

export default function setInitialDates($rangePicker, $Input) {
  const initDates = getInitDates($rangePicker);
  setDates($Input, initDates);
}
