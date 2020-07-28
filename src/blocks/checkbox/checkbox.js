import 'jquery-ui/ui/widgets/checkboxradio';

class Checkbox {
  static defaultClass = 'checkbox_type_default';

  static toggleClass = 'checkbox_type_toggle';

  $checkbox;

  $pluginElement;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initCheckbox();
  }

  _initElements(rootElement) {
    this.$checkbox = $(rootElement);
    this.$pluginElement = this.$checkbox.find('.js-checkbox__hidden-button');
  }

  _initCheckbox() {
    if (this.$checkbox.hasClass(Checkbox.defaultClass)) this._initDefault(); else
    if (this.$checkbox.hasClass(Checkbox.toggleClass)) this._initToggle();
  }

  _initDefault() {
    this._initPlugin(
      'checkbox__button js-checkbox__button_type_default checkbox__button_type_default',
      'checkbox__icon-space checkbox__icon-space_type_default',
    );

    const $defaultCheckboxButtons = this.$checkbox.find('.js-checkbox__button_type_default');
    $defaultCheckboxButtons.text('check');
  }

  _initToggle() {
    this._initPlugin('checkbox__button checkbox__button_type_toggle',
      'checkbox__icon-space checkbox__icon-space_type_toggle');
  }

  _initPlugin(icon, iconSpace) {
    const checkbox = this.$pluginElement.checkboxradio({
      classes: { 'ui-checkboxradio-icon': icon, 'ui-checkboxradio-icon-space': iconSpace },
    });

    const isChecked = this.$pluginElement.attr('data-is-checked') === 'true';
    if (isChecked) { checkbox.attr('checked', 'checked').change(); }
  }
}

export default Checkbox;
