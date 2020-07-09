/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком
import 'air-datepicker';
import arrowBack from '../../assets/images/arrow-back.svg';
import { getExpandState, handleArrowCollapsing, handleArrowExpanding } from '../arrow/arrow';

const buttonTemplate = require('./datepicker-block__button-template.pug');

const confirmButton = buttonTemplate({ type: 'confirm' });
const clearButton = buttonTemplate({ type: 'clear' });

function parseAttrToDate(attrDate) {
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

function addClickHandler(expandableElement, controlElement) {
  $(controlElement).click((event) => {
    const $controlWrap = $(event.target).parent();

    if (getExpandState($controlWrap)) {
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

function setExpandArrowEventHandlers(datepicker, $ownerLabel) {
  datepicker.update({
    onHide(inst, isAnimationEnded) {
      const $controlWrap = $(inst.el).parent();

      if (isAnimationEnded) handleArrowCollapsing($controlWrap);

      // чтобы лейбловые прокликивания снова заработали
      // нужно показывать календарь при клике на что-то кроме инпута
      $ownerLabel.unbind('click', disableLabelClicks);
    },
    onShow(inst) {
      const $controlWrap = $(inst.el).parent();
      handleArrowExpanding($controlWrap);

      $ownerLabel.click(disableLabelClicks);
    },
    todayButton: false,
  });
}

function initExpandableEvents($control, $inputLabel) {
  const expandableElement = $control.data('datepicker');
  setExpandArrowEventHandlers(expandableElement, $inputLabel);

  if (expandableElement) {
    addClickHandler(expandableElement, $control, $inputLabel);
  }
}

/**
 * Устанавливает даты в первый календарь
 * (второй подцепляет это значение в логике two-calendar-range-picker)
 * Если даты не переданы, используется сегодняшняя
 * @param $datepickerInput
 * @param dates
 */
function setDates($datepickerInput, dates) {
  if (!dates || dates.length === 0) { return; }
  const datepickerData = $datepickerInput.data('datepicker');
  datepickerData.selectDate(dates);
}

function initDatepickerInput(index, input) {
  const $datepicker = $(input);
  const $inputWrap = $datepicker.find('.js-datepicker-block__input-wrap');
  const $inputControl = $inputWrap.find('.js-input__control');
  const $inputLabel = $inputWrap.find('.js-input__title');
  const isInline = $inputWrap.hasClass('js-datepicker-block_inline__input-wrap');

  if ($inputControl.data('datepicker')) return;

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
      days: '<span class="datepicker-block__title">MM yyyy</span>',
      months: '<span class="datepicker-block__title">yyyy</span>',
      years: '<span class="datepicker-block__title">yyyy1 - yyyy2</span>',
    },
    prevHtml: `<img src="${arrowBack}" alt="назад"">`,
    nextHtml: `<img src="${arrowBack}" alt="назад" style="transform: scale(-1, 1)">`,
    onSelect: (formattedDate) => {
      $inputControl.val(formattedDate.toLowerCase());
    },
  }).data('datepicker');

  // замена кнопок на свои в элементе календаря
  // классы кнопок и контейнера не изменить без вмешательства в плагин, так что без 'js-'
  datepicker.$datepicker.find('.datepicker--button[data-action="today"]').remove();
  const $buttonsContainer = datepicker.$datepicker.find('.datepicker--buttons');
  $buttonsContainer.append(clearButton);
  $buttonsContainer.append(confirmButton);

  // установка ивентов отображения/исчезновения
  initExpandableEvents($inputControl, $inputLabel);

  const initDates = getInitDates($inputWrap);
  datepicker.selectDate(initDates);
}

function initDatepickers() {
  const $datepickers = $('.js-datepicker-block');
  $datepickers.each(initDatepickerInput);
}

export {
  parseAttrToDate, setDates, initDatepickerInput, initDatepickers,
};
