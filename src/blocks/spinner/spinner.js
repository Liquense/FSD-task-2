import 'jquery-ui/ui/widgets/spinner';

class Spinner {
  static decreaseButtonBaseClass = 'spinner__decrease-button';

  static decreaseButtonClasses = `js-${Spinner.decreaseButtonBaseClass} ${Spinner.decreaseButtonBaseClass} ui-spinner-button ui-spinner-down`;

  static increaseButtonBaseClass = 'spinner__increase-button'

  static increaseButtonClasses = `js-${Spinner.increaseButtonBaseClass} ${Spinner.increaseButtonBaseClass} ui-spinner-button ui-spinner-up`;

  $spinner;

  afterSpinCallbacks = [];

  setValue(value) {
    this.$spinner.spinner('value', value);
    this._triggerSpin();
  }

  getValue() {
    return this.$spinner.spinner('value');
  }

  getName() {
    return this.$spinner.attr('data-name');
  }

  constructor(spinnerElement) {
    Spinner._addButtons();
    this._initPlugin(spinnerElement);
    this._triggerSpin();
  }

  addAfterSpinCallback(callback) {
    this.afterSpinCallbacks.push(callback);
  }

  _triggerSpin() {
    const spinEvent = $.Event('spin', { currentTarget: this.$spinner });
    this.$spinner.trigger(spinEvent, { value: this.getValue() });
  }

  static _addButtons() {
    $.widget('ui.spinner', $.ui.spinner, {
      _buttonHtml() {
        return [
          `<button class="${Spinner.decreaseButtonClasses}" type="button">-</button>`,
          `<button class="${Spinner.increaseButtonClasses}" type="button">+</button>`];
      },
      _uiSpinnerHtml() {
        return '';
      },
      _enhance() {
        this.uiSpinner = this.element
          .attr('autocomplete', 'off')
          .wrap(this._uiSpinnerHtml())
          .parent()

          .prepend(this._buttonHtml()[0])
          .append(this._buttonHtml()[1]);
      },
    });
  }

  _initPlugin(spinnerElement) {
    this.$spinner = $(spinnerElement);

    this.$spinner.spinner({
      min: this.$spinner.attr('data-min'),
      max: this.$spinner.attr('data-max'),
    });

    this.setValue(this.$spinner.attr('value'));

    this.$spinner.on('spin.spinner', this._handleSpin.bind(this));
  }

  _handleSpin = (event, ui) => {
    this._disableButtonsAtExtremum(event, ui);

    $(event.currentTarget).spinner('value', ui?.value ? ui?.value : 0);
    this.afterSpinCallbacks.forEach((callback) => callback(event, ui));
  }

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
