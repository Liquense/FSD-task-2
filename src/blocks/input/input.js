import 'jquery.maskedinput/src/jquery.maskedinput';
import initArrows from '../arrow/init';
import { eventPreventDefault } from '../../common/functions';

class Input {
  static types = { masked: 'masked' };

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
    this._addInputClickHandler();

    if (this.type === Input.types.masked) this._initMask();
  }

  addClickCallback(callback) {
    this.clickCallbacks.push(callback);
  }

  toggleFocus() {
    this.$input.toggleClass('input_focused');
  }

  disableLabelClicks() {
    this.$input.on('click.input', eventPreventDefault);
  }

  enableLabelClicks() {
    this.$input.unbind('click.input', eventPreventDefault);
  }

  setText = (value) => {
    this.$control.val(value);
  }

  _initElements(rootElement) {
    this.$input = $(rootElement);
    this.$controlWrap = this.$input.find('.js-input__control-wrapper');
    this.$control = this.$input.find('.js-input__control');
  }

  _initProps() {
    this.arrow = initArrows(this.$input);
    this.placeholder = this.$input.attr('placeholder');
    this.isExpandable = this.$input.hasClass('input_expandable');
    this.type = this._getType();
  }

  _addInputClickHandler() {
    this.$controlWrap.on('click.input', this._handleInputClick);
  }

  _handleInputClick = () => {
    this.clickCallbacks.forEach((callback) => callback());
  }

  _getType() {
    if (this.$input.hasClass('input_type_masked')) return Input.types.masked;

    return undefined;
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
