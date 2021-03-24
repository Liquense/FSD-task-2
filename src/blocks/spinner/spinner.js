import './spinner.scss';

class Spinner {
  static buttonBaseClass = 'spinner__button';

  static buttonBaseClassDisabled = `${Spinner.buttonBaseClass}_disabled`;

  static decreaseButtonBaseClass = `${Spinner.buttonBaseClass}_type_decrease`;

  static increaseButtonBaseClass = `${Spinner.buttonBaseClass}_type_increase`;

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
    this.$decreaseButton = $(this.$spinner.find(`.js-${Spinner.decreaseButtonBaseClass}`)[0]);
    this.$input = $(this.$spinner.find('.js-spinner__value'));
    this.$increaseButton = $(this.$spinner.find(`.js-${Spinner.increaseButtonBaseClass}`)[0]);
  }

  _initProperties() {
    const initialValue = Number.parseInt(this.$input.attr('data-value'), 10) ?? 0;
    this.$input.val(initialValue);
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
      this.$decreaseButton.attr('disabled', true);
      this.$decreaseButton.addClass(Spinner.buttonBaseClassDisabled);
    } else {
      this.$decreaseButton.attr('disabled', false);
      this.$decreaseButton.removeClass(Spinner.buttonBaseClassDisabled);
    }
    if (Number.parseInt(value, 10) >= this.max) {
      this.$increaseButton.attr('disabled', true);
      this.$increaseButton.addClass(Spinner.buttonBaseClassDisabled);
    } else {
      this.$increaseButton.attr('disabled', false);
      this.$increaseButton.removeClass(Spinner.buttonBaseClassDisabled);
    }
  }
}

export default Spinner;
