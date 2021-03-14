import 'jquery-ui/ui/widgets/spinner';

import './spinner.scss';

class Spinner {
  static decreaseButtonBaseClass = 'spinner__decrease-button';

  static decreaseButtonDisabledClass = `${Spinner.decreaseButtonBaseClass}_disabled`;

  static decreaseButtonClasses = `js-${Spinner.decreaseButtonBaseClass} ${Spinner.decreaseButtonBaseClass} ui-spinner-button ui-spinner-down`;

  static increaseButtonBaseClass = 'spinner__increase-button';

  static increaseButtonDisabledClass = `${Spinner.increaseButtonBaseClass}_disabled`;

  static increaseButtonClasses = `js-${Spinner.increaseButtonBaseClass} ${Spinner.increaseButtonBaseClass} ui-spinner-button ui-spinner-up`;

  $decreaseButton;

  $increaseButton;

  $spinner;

  min;

  max;

  afterSpinCallbacks = [];

  constructor(spinnerElement) {
    this._initElements(spinnerElement);
    this._initProperties();
    this._initPlugin();
    this._initPluginElements();
    this._triggerSpin();
  }

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

  addAfterSpinCallback(callback) {
    this.afterSpinCallbacks.push(callback);
  }

  static addButtonsToPlugin() {
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

  _initElements(spinnerElement) {
    this.$spinner = $(spinnerElement);
  }

  _initProperties() {
    this.min = this.$spinner.attr('data-min');
    this.max = this.$spinner.attr('data-max');
  }

  _initPlugin() {
    this.$spinner.spinner({
      min: this.min,
      max: this.max,
    });

    this.setValue(this.$spinner.attr('value'));

    this.$spinner.on('spin.spinner', this._handleSpin.bind(this));
  }

  _initPluginElements() {
    this.$decreaseButton = this.$spinner.siblings(`.js-${Spinner.decreaseButtonBaseClass}`);
    this.$increaseButton = this.$spinner.siblings(`.js-${Spinner.increaseButtonBaseClass}`);
  }

  _triggerSpin() {
    const spinEvent = $.Event('spin', { currentTarget: this.$spinner });
    this.$spinner.trigger(spinEvent, { value: this.getValue() });
  }

  _handleSpin = (event, ui) => {
    this._disableButtonsAtExtremum(event, ui);

    $(event.currentTarget).spinner('value', ui?.value ? ui?.value : 0);
    this.afterSpinCallbacks.forEach((callback) => callback(event, ui));
  }

  _disableButtonsAtExtremum(event, ui) {
    if (ui.value <= this.min) {
      this.$decreaseButton.addClass(Spinner.decreaseButtonDisabledClass);
    } else {
      this.$decreaseButton.removeClass(Spinner.decreaseButtonDisabledClass);
    }
    if (ui.value >= this.max) {
      this.$increaseButton.addClass(Spinner.increaseButtonDisabledClass);
    } else {
      this.$increaseButton.removeClass(Spinner.increaseButtonDisabledClass);
    }
  }
}

export default Spinner;
