/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком
import 'air-datepicker';

const confirmButton = '<div class="button button_type_text datepicker-block__confirm-button">'
    + '<button class="button__control button_type_text__control datepicker--button" data-action="hide">Применить'
    + '</button><div class="button__decoration material-icons"></div></div>';
const clearButton = '<div class="button button_type_text button_hovered datepicker-block__clear-button">'
    + '<button class="button__control button_type_text__control datepicker--button" data-action="clear">Очистить'
    + '</button><div class="button__decoration material-icons"></div></div>';

export function parseAttrToDate(attrDate) {
  const dateParts = attrDate.split('.');
  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2];
  const dateString = `${year}-${month}-${day}`;

  return new Date(dateString);
}

function getInitDates($inputWrap) {
  const dates = [];

  if ($inputWrap.attr('data-first-date')) { dates.push(parseAttrToDate($inputWrap.attr('data-first-date'))); }
  if ($inputWrap.attr('data-second-date')) { dates.push(parseAttrToDate($inputWrap.attr('data-second-date'))); }

  return dates.length === 0 ? undefined : dates;
}

function addClickHandler(arrowElement, expandableElement, controlElement) {
  $(controlElement).click(() => {
    if ($(arrowElement).hasClass('expanded')) {
      expandableElement.hide();
    } else {
      expandableElement.show();
    }
  });
}

function disableLabelClicks(event) {
  // при клике на заголовок/стрелку итак происходит анфокус и календарь прячется,
  // лишний клик не нужен
  event.preventDefault();
}

function setExpandArrowEventHandlers($expandArrow, $inputControl, $ownerLabel) {
  let expandableElement = null;

  $inputControl.each(() => {
    expandableElement = $inputControl.data('datepicker');
    expandableElement.update({
      onHide(inst, animationCompleted) {
        if (!animationCompleted) {
          $expandArrow.text('expand_more');
          return;
        }
        $($expandArrow).removeClass('expanded');
        // чтобы лейбловые прокликивания снова заработали
        // нужно показывать календарь при клике на что-то кроме инпута
        $($ownerLabel).unbind('click', disableLabelClicks);
      },
      onShow(inst, animationCompleted) {
        if (!animationCompleted) {
          $expandArrow.text('expand_less');
          return;
        }
        $expandArrow.addClass('expanded');
        $ownerLabel.click(disableLabelClicks);
      },
      todayButton: false,
    });
  });

  return expandableElement;
}

function initExpandableEvents($expandArrow, $control) {
  const $ownerLabel = $(this).parent();
  const expandableElement = setExpandArrowEventHandlers($expandArrow, $control, $ownerLabel);

  if (expandableElement) {
    addClickHandler($expandArrow, expandableElement, $control, $ownerLabel);
  }
}

/**
 * Устанавливает даты в первый календарь
 * (второй подцепляет это значение в логике two-calendar-range-picker)
 * Если даты не переданы, используется сегодняшняя
 * @param $datepickerInput
 * @param dates
 */
export function setDates($datepickerInput, dates) {
  if (!dates || dates.length === 0) { return; }
  const datepickerData = $datepickerInput.data('datepicker');
  datepickerData.selectDate(dates);
}

export function initDatepickerInput(index, input) {
  const $datepicker = $(input);
  const $inputWrap = $datepicker.find('.datepicker-block__input-wrap');
  const $inputControl = $inputWrap.find('.input__control');
  const isInline = $inputWrap.hasClass('datepicker-block_inline');
  const datepicker = $inputControl.datepicker({
    range: true,
    inline: isInline,
    dateFormat: 'd M',
    multipleDatesSeparator: ' - ',
    todayButton: true,
    showEvent: '',
    position: 'bottom center',
    offset: 5,
    navTitles: {
      days: '<span class="text_type_item-title">MM yyyy</span>',
      months: '<span class="text_type_item-title">yyyy</span>',
      years: '<span class="text_type_item-title">yyyy1 - yyyy2</span>',
    },
    prevHtml: '<img src="./images/arrow-back.svg" alt="назад"">',
    nextHtml: '<img src="./images/arrow-back.svg" alt="назад" style="transform: scale(-1, 1)">',
    onSelect: (formattedDate) => {
      $inputControl.val(formattedDate.toLowerCase());
    },
  }).data('datepicker');

  // замена кнопок на свои в элементе календаря
  datepicker.$datepicker.find('.datepicker--button[data-action="today"]').remove();
  datepicker.$datepicker.find('.datepicker--buttons').append(clearButton);
  datepicker.$datepicker.find('.datepicker--buttons').append(confirmButton);

  // установка ивентов отображения/исчезновения
  const $expandArrow = $($datepicker.find('.datepicker-block__arrow')[0]);
  initExpandableEvents($expandArrow, $inputControl);

  const initDates = getInitDates($inputWrap);
  datepicker.selectDate(initDates);
}

export function initDatepickerInputs() {
  const $datepickers = $('.datepicker-block');
  $datepickers.each(initDatepickerInput);
}
