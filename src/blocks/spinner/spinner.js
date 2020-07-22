/* eslint-disable no-undef,no-underscore-dangle */
import 'jquery-ui/ui/widgets/spinner';

class Spinner {
  static decreaseButtonClasses = 'js-spinner__decrease'
    + ' spinner__decrease'
    + ' ui-spinner-button'
    + ' ui-spinner-down';

  static increaseButtonClasses = 'js-spinner__increase'
    + ' spinner__increase'
    + ' ui-spinner-button'
    + ' ui-spinner-up';

  $spinner;

  set value(value) {
    this.$spinner.spinner('value', value);
  }

  get value() {
    return this.$spinner.spinner('value');
  }

  constructor(spinnerElement) {
    Spinner._addButtons();
    this._initPlugin(spinnerElement);
  }

  triggerSpin() {
    const spinEvent = $.Event('spin', { currentTarget: this.$spinner });
    this.$spinner.trigger(spinEvent, { value: this.value });
  }

  static _addButtons() {
    $.widget('ui.spinner', $.ui.spinner, {
      _enhance() {
        this.uiSpinner = this.element
          .attr('autocomplete', 'off')
          .wrap(this._uiSpinnerHtml())
          .parent()

          .prepend(this._buttonHtml()[0])
          .append(this._buttonHtml()[1]);
      },
      _buttonHtml() {
        return [
          `<button class="${Spinner.decreaseButtonClasses}">-</button>`,
          `<button class="${Spinner.increaseButtonClasses}">+</button>`];
      },
      _uiSpinnerHtml() {
        return '';
      },
    });
  }

  _initPlugin(spinnerElement) {
    this.$spinner = $(spinnerElement);

    this.$spinner.spinner({
      min: this.$spinner.attr('data-min'),
      max: this.$spinner.attr('data-max'),
    });

    this.value = this.$spinner.attr('value');

    this.$spinner.on('spin.spinner', this._handleSpin.bind(this));
  }

  _handleSpin() {
    this._disableButtonsAtExtremum();
  }

  _disableButtonsAtExtremum() {
    const disabledButtonClass = 'spinner__button_disabled';
    const min = this.$spinner.attr('data-min');
    const max = this.$spinner.attr('data-max');
    const $decreaseButton = this.$spinner.siblings('.js-spinner__decrease');
    const $increaseButton = this.$spinner.siblings('.js-spinner__increase');

    if (this.value <= min) {
      $decreaseButton.addClass(disabledButtonClass);
    } else {
      $decreaseButton.removeClass(disabledButtonClass);
    }
    if (this.value >= max) {
      $increaseButton.addClass(disabledButtonClass);
    } else {
      $increaseButton.removeClass(disabledButtonClass);
    }
  }
}

export default Spinner;
