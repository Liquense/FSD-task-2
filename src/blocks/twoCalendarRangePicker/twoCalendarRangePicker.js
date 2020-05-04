/* eslint-disable no-undef */
// jquery подключена вебпаком
import { parseAttrToDate, setDates } from '../Input/_type/_datepicker/input_type_datepicker';
import './twoCalendarRangePicker.scss';

let isSecondAssignStarted = false;
function handleOnSelect(formattedDate, datepicker, otherDatepicker, input, otherInput, number) {
  if (isSecondAssignStarted) return;
  const otherNumber = 1 - number;
  const newDates = datepicker.selectedDates;

  // если дат в пикере больше одной, то перезаписываем данные в инпуте,
  // если одна - оставляем дефолтное поведение
  // иначе второй пикер будет очищать оба при фокусе на нём
  if (datepicker.selectedDates.length > 1) {
    $(input).val(newDates[number].toLocaleDateString());
  } else {
    datepicker.update({ dateFormat: '' });
    otherDatepicker.update({ dateFormat: 'ДД.ММ.ГГГГ' });
  }

  isSecondAssignStarted = true;
  otherDatepicker.clear();
  otherDatepicker.selectDate(datepicker.selectedDates);
  isSecondAssignStarted = false;

  if (datepicker.selectedDates.length > 1) {
    $(otherInput).val(newDates[otherNumber].toLocaleDateString());
  }
}

function datepickerAddOnSelect(datepicker, otherDatepicker, input, otherInput, number) {
  datepicker.update({
    dateFormat: '',
    multipleDatesSeparator: ',',
    onSelect: (formattedDate) => {
      handleOnSelect(
        formattedDate,
        datepicker, otherDatepicker,
        input, otherInput, number,
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

export function setInitialDates($rangePicker, $input) {
  const initDates = getInitDates($rangePicker);
  setDates($input, Object.values(initDates));
}

export function initTwoCalendarPicker(index, element) {
  const $twoCalendarRange = $(element);
  const $firstInput = $twoCalendarRange.find('.twoCalendarRangePicker__firstDatepicker').find('.input__control_type_datepicker');
  const firstDatepicker = $firstInput.data('datepicker');
  const $secondInput = $twoCalendarRange.find('.twoCalendarRangePicker__secondDatepicker').find('.input__control_type_datepicker');
  const secondDatepicker = $($secondInput).data('datepicker');

  if (!(firstDatepicker && secondDatepicker)) return;

  secondDatepicker.update({ position: 'bottom right' });

  datepickerAddOnSelect(firstDatepicker, secondDatepicker, $firstInput, $secondInput, 0);
  datepickerAddOnSelect(secondDatepicker, firstDatepicker, $secondInput, $firstInput, 1);

  const initDates = getInitDates($twoCalendarRange);
  if (initDates.firstDate) {
    firstDatepicker.selectDate(initDates.firstDate);
  }
  if (initDates.secondDate) {
    secondDatepicker.selectDate(initDates.secondDate);
  }
}
