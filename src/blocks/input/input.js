/* eslint-disable no-undef */
import 'jquery.maskedinput/src/jquery.maskedinput';

class MaskedInput {
  $maskedInput;

  placeholder;

  constructor(rootElement) {
    this._initProps(rootElement);
    this._initPlugin();
  }

  _initProps(rootElement) {
    this.$maskedInput = $(rootElement).find('.js-input__control_type_masked');
    this.placeholder = this.$maskedInput.attr('placeholder');
  }

  _initPlugin() {
    $.mask.definitions.D = '[0-3]';
    $.mask.definitions.M = '[0-1]';
    $.mask.definitions.Y = '[1-2]';

    this.$maskedInput.mask('D9.M9.Y999',
      {
        placeholder: this.placeholder,
        autoclear: false,
      });
  }
}

export default MaskedInput;
