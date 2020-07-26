/* eslint-disable no-undef */
import 'jquery-ui/ui/widgets/checkboxradio';

class RadioButton {
  $radioButton;

  $hiddenButton;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initRadio();
  }

  _initElements(rootElement) {
    this.$radioButton = $(rootElement);
    this.$hiddenButton = this.$radioButton.find('.js-radio-button__hidden-button');
  }

  _initRadio() {
    this._initPlugin('radio-button__button', 'radio-button__icon-space');
  }

  _initPlugin(icon, iconSpace) {
    const checkbox = this.$hiddenButton.checkboxradio({
      classes: { 'ui-checkboxradio-icon': icon, 'ui-checkboxradio-icon-space': iconSpace },
    });

    const isChecked = this.$hiddenButton.attr('data-is-checked') === 'true';
    if (isChecked) { checkbox.attr('checked', 'checked').change(); }
  }
}

export default RadioButton;
