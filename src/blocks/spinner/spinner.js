/* eslint-disable no-undef,no-underscore-dangle */
// jquery импортирована вебпаком, функции с подчеркиванием - часть плагина
import 'jquery-ui/ui/widgets/spinner';

export const decreaseButtonClasses = 'spinner__decrease spinner__button ui-spinner-button ui-spinner-down';
export const increaseButtonClasses = 'spinner__increase spinner__button ui-spinner-button ui-spinner-up';
// морф, чтобы кнопки были по бокам
$.widget('ui.spinner', $.ui.spinner, {
  _enhance() {
    this.uiSpinner = this.element
      .attr('autocomplete', 'off')
      .wrap(this._uiSpinnerHtml())
      .parent()

    // Add buttons
      .prepend(this._buttonHtml()[0])
      .append(this._buttonHtml()[1]);
  },
  _buttonHtml() {
    return [
      `<button class="${decreaseButtonClasses}">-</button>`,
      `<button class="${increaseButtonClasses}">+</button>`];
  },
  // обёртка своя есть
  _uiSpinnerHtml() {
    return '';
  },
});

export function disableButtonsAtExtremum($spinner, currentValue) {
  const disabledButtonClass = 'spinner__button_disabled';
  const min = $spinner.attr('data-min');
  const max = $spinner.attr('data-max');
  const $decreaseButton = $spinner.siblings('.spinner__decrease');
  const $increaseButton = $spinner.siblings('.spinner__increase');

  if (currentValue <= min) {
    $decreaseButton.addClass(disabledButtonClass);
  } else {
    $decreaseButton.removeClass(disabledButtonClass);
  }
  if (currentValue >= max) {
    $increaseButton.addClass(disabledButtonClass);
  } else {
    $increaseButton.removeClass(disabledButtonClass);
  }
}

const $allSpinners = $('.spinner');

function findSpinnersAndPassData(whereToSearch) {
  const $spinners = whereToSearch
    ? $(whereToSearch).find('.spinner__value')
    : $('.spinner__value');

  $spinners.spinner({
    min: $spinners.attr('data-min'),
    max: $spinners.attr('data-max'),
  });

  return $spinners;
}

function initSpinner() {
  const $spinner = $(this);
  const spinnerValue = $spinner.attr('value');

  disableButtonsAtExtremum(
    $spinner,
    spinnerValue,
  );
  function handleOnSpin(event, ui) {
    disableButtonsAtExtremum(
      $spinner,
      ui.value,
    );
  }

  $spinner.on('spin', handleOnSpin);
}

function findAndInitSpinners() {
  const $spinners = findSpinnersAndPassData(this);
  $spinners.each(initSpinner);
}

$allSpinners.each(findAndInitSpinners);
