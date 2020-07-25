/* eslint-disable no-undef,no-underscore-dangle */
import 'jquery-ui/ui/widgets/spinner';

class Spinner {
  static decreaseButtonBaseClass = 'spinner__decrease-button';

  static decreaseButtonClasses = `js-${Spinner.decreaseButtonBaseClass}`
    + ` ${Spinner.decreaseButtonBaseClass}`
    + ' ui-spinner-button'
    + ' ui-spinner-down';

  static increaseButtonBaseClass = 'spinner__increase-button'

  static increaseButtonClasses = `js-${Spinner.increaseButtonBaseClass}`
    + ` ${Spinner.increaseButtonBaseClass}`
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
    this.triggerSpin();
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

  _handleSpin = (event, ui) => { this._disableButtonsAtExtremum(event, ui); }

  _disableButtonsAtExtremum(event, ui) {
    const min = this.$spinner.attr('data-min');
    const max = this.$spinner.attr('data-max');
    const $decreaseButton = this.$spinner.siblings(`.js-${Spinner.decreaseButtonBaseClass}`);
    const decreaseButtonDisabledClass = `${Spinner.decreaseButtonBaseClass}_disabled`;
    const $increaseButton = this.$spinner.siblings(`.js-${Spinner.increaseButtonBaseClass}`);
    const increaseButtonDisabledClass = `${Spinner.increaseButtonBaseClass}_disabled`;

    if (ui.value <= min) {
      $decreaseButton.addClass(decreaseButtonDisabledClass);
    } else {
      $decreaseButton.removeClass(decreaseButtonDisabledClass);
    }
    if (ui.value >= max) {
      $increaseButton.addClass(increaseButtonDisabledClass);
    } else {
      $increaseButton.removeClass(increaseButtonDisabledClass);
    }
  }
}

export default Spinner;
