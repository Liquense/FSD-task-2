import initArrows from '../arrow/init';
import './input.scss';

class Input {
  static types = { masked: 'masked' };

  static activeClass = 'input_active';

  $input;

  $controlWrap;

  $control;

  arrow;

  placeholder;

  type;

  isExpandable;

  clickCallbacks = [];

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initProps();
    this._addInputOnClick();
    if (this.type === Input.types.masked) {
      import('jquery.maskedinput/src/jquery.maskedinput').then(() => this._initMask());
    }
  }

  addClickCallback(callback) {
    this.clickCallbacks.push(callback);
  }

  removeClickCallback(callback) {
    const callbackIndex = this.clickCallbacks.findIndex((element) => element === callback);

    this.clickCallbacks.splice(callbackIndex, 1);
  }

  toggleFocus() {
    this.$input.toggleClass(Input.activeClass);
  }

  focus() {
    this.$input.addClass(Input.activeClass);
  }

  unfocus() {
    this.$input.removeClass(Input.activeClass);
    this.$control.blur();
  }

  setText = (value) => {
    this.$control.val(value ?? '');
  }

  expand() {
    this.arrow.expand();
  }

  collapse() {
    this.arrow.collapse();
  }

  isExpanded() {
    return this.arrow.isExpanded();
  }

  _initElements(rootElement) {
    this.$input = $(rootElement);
    this.$controlWrap = this.$input.find('.js-input__control-wrapper');
    this.$control = this.$input.find('.js-input__control');
  }

  _initProps() {
    this.placeholder = this.$input.attr('placeholder');
    this.isExpandable = this.$input.hasClass('input_expandable');
    this.type = this._getType();

    if (this.isExpandable) this.arrow = initArrows(this.$input);
  }

  _addInputOnClick() {
    this.$controlWrap.on('click.input', this._handleInputClick);
  }

  _handleInputClick = () => {
    this.clickCallbacks.forEach((callback) => callback(this));
  }

  _getType() {
    if (this.$input.hasClass('input_type_masked')) return Input.types.masked;

    return null;
  }

  _initMask() {
    $.mask.definitions.D = '[0-3]';
    $.mask.definitions.M = '[0-1]';
    $.mask.definitions.Y = '[1-2]';

    this.$control.mask('D9.M9.Y999',
      {
        placeholder: this.placeholder,
        autoclear: false,
      });
  }
}

export default Input;
