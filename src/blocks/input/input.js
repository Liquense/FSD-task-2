import 'jquery.maskedinput/src/jquery.maskedinput';
import initArrows from '../arrow/init';

class Input {
  static expandableClass = 'input_expandable';

  static types = { masked: 'masked' };

  $input;

  $control;

  arrow;

  placeholder;

  type;

  isExpandable;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initProps();

    if (this.type === Input.types.masked) this._initMask();
  }

  _initElements(rootElement) {
    this.$input = $(rootElement);
    this.$control = this.$input.find('.js-input__control');
  }

  _initProps() {
    this.arrow = initArrows(this.$input);
    this.placeholder = this.$input.attr('placeholder');
    this.isExpandable = this.$input.hasClass(Input.expandableClass);
    this.type = this._getType();
  }

  _getType() {
    let type = '';

    if (this.$input.hasClass('input_type_masked')) type = Input.types.masked;

    return type;
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
