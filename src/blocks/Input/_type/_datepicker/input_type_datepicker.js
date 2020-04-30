/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком
import 'air-datepicker';
import '../../../../assets/images/arrow_back.svg';
import '../../../../assets/images/expand_more.svg';

const confirmButton = '<div class="button button_type_text input_type_datepicker__confirmButton">'
    + '<button class="button__control text_type_label-CTA datepicker--button" data-action="hide">Применить'
    + '</button><div class="button__decoration material-icons"></div></div>';
const clearButton = '<div class="button button_type_text button_hovered input_type_datepicker__clearButton">'
    + '<button class="button__control text_type_label-CTA datepicker--button" data-action="clear">Очистить'
    + '</button><div class="button__decoration material-icons"></div></div>';

export function parseAttrToDate(attrDate) {
  const dateParts = attrDate.split('.');
  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2];
  const dateString = `${year}-${month}-${day}`;

  return new Date(dateString);
}

function getInitDates($datepickerControl) {
  const dates = [];

  if ($datepickerControl.attr('data-firstdate')) { dates.push(parseAttrToDate($datepickerControl.attr('data-firstDate'))); }
  if ($datepickerControl.attr('data-seconddate')) { dates.push(parseAttrToDate($datepickerControl.attr('data-secondDate'))); }

  return dates.length === 0 ? undefined : dates;
}

/**
 * Устанавливает даты в первый календарь
 * (второй подцепляет это значение в логике twoCalendarRangePicker)
 * Если даты не переданы, используется сегодняшняя
 * @param $datePicker
 * @param dates
 */
export function setDates($datePicker, dates) {
  if (!dates) { return; }
  const datepickerData = $datePicker.data('datepicker');
  datepickerData.clear();
  datepickerData.selectDate(dates);
}

const $datepickerInput = $('.input__control_type_datepicker');
function initDatepickerInput() {
  const $inputControl = $(this);
  const datepicker = $inputControl.datepicker({
    range: true,
    // inline: true,
    dateFormat: 'd M',
    multipleDatesSeparator: ' - ',
    todayButton: true,
    showEvent: '',
    offset: 5,
    navTitles: {
      days: '<span class="text_type_itemTitle">MM yyyy</span>',
      months: '<span class="text_type_itemTitle">yyyy</span>',
      years: '<span class="text_type_itemTitle">yyyy1 - yyyy2</span>',
    },
    prevHtml: '<img src="./images/arrow_back.svg" alt="назад"">',
    nextHtml: '<img src="./images/arrow_back.svg" alt="назад" style="transform: scale(-1, 1)">',
    minDate: new Date(),
  }).data('datepicker');

  // замена кнопок на свои в элементе календаря
  datepicker.$datepicker.find('.datepicker--button[data-action="today"]').remove();
  datepicker.$datepicker.find('.datepicker--buttons').append(clearButton);
  datepicker.$datepicker.find('.datepicker--buttons').append(confirmButton);

  const initDates = getInitDates($inputControl);
  setDates($inputControl, initDates);
}

$datepickerInput.each(initDatepickerInput);
