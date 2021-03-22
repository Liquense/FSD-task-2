import './spinner.scss';

class Spinner {
  static decreaseButtonBaseClass = 'spinner__decrease-button';

  static decreaseButtonDisabledClass = `${Spinner.decreaseButtonBaseClass}_disabled`;

  static increaseButtonBaseClass = 'spinner__increase-button';

  static increaseButtonDisabledClass = `${Spinner.increaseButtonBaseClass}_disabled`;

  $spinner;

  $decreaseButton;

  $input;

  $increaseButton;

  min;

  max;

  afterSpinCallbacks = [];

  constructor(spinnerElement) {
    this._initElements(spinnerElement);
    this._initProperties();
    this._initHandlers();
  }

  setValue(value) {
    this.$input.val(value);
    this.$input.trigger('change.spinner');
  }

  getValue() {
    return this.$input.val() || 0;
  }

  addAfterSpinCallback(callback) {
    this.afterSpinCallbacks.push(callback);
  }

  _initElements(spinnerElement) {
    this.$spinner = $(spinnerElement);
    this.$decreaseButton = $(this.$spinner.find('.js-spinner__decrease-button')[0]);
    this.$input = $(this.$spinner.find('.js-spinner__value'));
    this.$increaseButton = $(this.$spinner.find('.js-spinner__increase-button')[0]);
  }

  _initProperties() {
    if (!this.$input.val()) {
      this.$input.val(0);
    }
    this.min = Number.parseInt(this.$input.attr('data-min'), 10);
    this.max = Number.parseInt(this.$input.attr('data-max'), 10);
  }

  _initHandlers() {
    this.$input.on('change.spinner', this._handleChange);
    this.$decreaseButton.on('click.spinner', this._handleOnDecreaseButtonClick);
    this.$increaseButton.on('click.spinner', this._handleOnIncreaseButtonClick);
    this.$input.trigger('change.spinner');
  }

  _handleChange = (event) => {
    const value = event.target.value ? event.target.value : 0;
    this._disableButtonsAtExtremum(value);
    this.afterSpinCallbacks.forEach((callback) => callback(event, { value }));
  }

  _handleOnIncreaseButtonClick = () => {
    const value = this.getValue();
    if (value >= this.max) return;

    this.setValue(Number.parseInt(value, 10) + 1);
  }

  _handleOnDecreaseButtonClick = () => {
    const value = this.getValue();
    if (value <= this.min) return;

    this.setValue(value - 1);
  }

  _disableButtonsAtExtremum(value) {
    if (Number.parseInt(value, 10) <= this.min) {
      this.$decreaseButton.addClass(Spinner.decreaseButtonDisabledClass);
    } else {
      this.$decreaseButton.removeClass(Spinner.decreaseButtonDisabledClass);
    }
    if (Number.parseInt(value, 10) >= this.max) {
      this.$increaseButton.addClass(Spinner.increaseButtonDisabledClass);
    } else {
      this.$increaseButton.removeClass(Spinner.increaseButtonDisabledClass);
    }
  }
}

export default Spinner;
