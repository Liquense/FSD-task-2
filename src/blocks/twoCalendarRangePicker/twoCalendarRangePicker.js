/* eslint-disable no-undef */
// jquery подключена вебпаком
import { parseAttrToDate, setDates } from '../Input/_type/_datepicker/input_type_datepicker';
import './twoCalendarRangePicker.scss';
import { checkDateArraysEquality } from '../../common/functions';


let isSecondAssignStarted = false;
function handleOnSelect(formattedDate, datepicker, otherDatepicker, input, number) {
  // если дат в пикере больше одной, то перезаписываем данные в инпуте,
  // если одна - оставляем дефолтное поведение
  // иначе второй пикер будет очищать оба при фокусе на нём
  if (datepicker.selectedDates.length > 1) {
    const extremeDates = formattedDate.split(',');
    $(input).val(extremeDates[number]);
  } else if (isSecondAssignStarted) {
    $(input).val('');
  }

  // проверка, чтобы не возникало бесконечной рекурсии при clear и selectDate на другом пикере
  // и не делалось ничего лишнего при одинаковых датах
  if (
    checkDateArraysEquality(datepicker.selectedDates, otherDatepicker.selectedDates)
    || isSecondAssignStarted
  ) return;

  isSecondAssignStarted = true;
  otherDatepicker.clear();
  otherDatepicker.selectDate(datepicker.selectedDates);
  isSecondAssignStarted = false;
}

function datepickerAddOnSelect(datepicker, otherDatepicker, input, number) {
  datepicker.update({
    dateFormat: '',
    multipleDatesSeparator: ',',
    onSelect: (formattedDate) => {
      handleOnSelect(
        formattedDate,
        datepicker, otherDatepicker,
        input, number,
      );
    },
  });
}

function getInitDates($rangePicker) {
  const dates = {};

  if ($rangePicker.attr('data-firstdate')) {
    dates.firstDate = parseAttrToDate($rangePicker.attr('data-firstdate'));
  }
  if ($rangePicker.attr('data-seconddate')) {
    dates.secondDate = parseAttrToDate($rangePicker.attr('data-seconddate'));
  }

  return dates;
}

export default function setInitialDates($rangePicker, $input) {
  const initDates = getInitDates($rangePicker);
  setDates($input, Object.values(initDates));
}

const $twoCalendarPickers = $('.twoCalendarRangePicker');
function initTwoCalendarPicker() {
  const $thisRange = $(this);
  const $firstInput = $thisRange.find('.twoCalendarRangePicker__firstDatepicker').find('.input__control_type_datepicker');
  const firstDatepicker = $firstInput.data('datepicker');
  const $secondInput = $thisRange.find('.twoCalendarRangePicker__secondDatepicker').find('.input__control_type_datepicker');
  const secondDatepicker = $($secondInput).data('datepicker');

  secondDatepicker.update({
    position: 'bottom right',
  });

  datepickerAddOnSelect(firstDatepicker, secondDatepicker, $firstInput, 0);
  datepickerAddOnSelect(secondDatepicker, firstDatepicker, $secondInput, 1);

  const initDates = getInitDates($thisRange);
  if (initDates.firstDate) {
    firstDatepicker.selectDate(initDates.firstDate);
  }
  if (initDates.secondDate) {
    secondDatepicker.selectDate(initDates.secondDate);
  }
}

$twoCalendarPickers.each(initTwoCalendarPicker);
