/* eslint-disable no-undef */
import 'jquery-ui/ui/widgets/checkboxradio';

class Checkbox {
  static defaultClass = 'checkbox_type_default';

  static likeClass = 'checkbox_type_like';

  static radioClass = 'checkbox_type_radio';

  static toggleClass = 'checkbox_type_toggle';

  $checkbox;

  $pluginElement;

  constructor(rootElement) {
    this._initElement(rootElement);
    this._initCheckbox();
  }

  _initElement(rootElement) {
    this.$checkbox = $(rootElement);
  }

  _initCheckbox() {
    if (this.$checkbox.hasClass(Checkbox.defaultClass)) this._initDefault(); else
    if (this.$checkbox.hasClass(Checkbox.radioClass)) this._initRadio(); else
    if (this.$checkbox.hasClass(Checkbox.likeClass)) this._initLike(); else
    if (this.$checkbox.hasClass(Checkbox.toggleClass)) this._initToggle();
  }


  _initPlugin(icon, iconSpace) {
    const checkbox = this.$pluginElement.checkboxradio({
      classes: {
        'ui-checkboxradio-icon': icon,
        'ui-checkboxradio-icon-space': iconSpace,
      },
    });
    const isChecked = this.$pluginElement.attr('data-isChecked');

    if (isChecked === 'true') {
      checkbox.attr('checked', 'checked').change();
    }
  }

  _initLike() {
    const $label = this.$checkbox.find('.js-checkbox__label_type_like');
    this.$pluginElement = this.$checkbox.find('.js-checkbox__hidden-button_type_like');
    const $likeText = this.$checkbox.find('.js-checkbox__text_type_like');

    this._initPlugin('checkbox__button checkbox__button_type_like');

    const gradientBorderElement = document.createElement('div');
    gradientBorderElement.classList.add('checkbox__button-border_type_like');
    $label.prepend(gradientBorderElement);

    let likesCount = Number.parseInt($label.attr('data-likes-count'), 10);
    if (Number.isNaN(likesCount)) return;

    this.$pluginElement.change(() => {
      likesCount = $label.hasClass('ui-checkboxradio-checked') ? likesCount + 1 : likesCount - 1;

      $likeText.text(likesCount);
      $label.attr('data-likes-count', likesCount);
    });
  }

  _initDefault() {
    this.$pluginElement = this.$checkbox.find('.js-checkbox__hidden-button_type_default');
    this._initPlugin(
      'checkbox__button js-checkbox__button_type_default checkbox__button_type_default',
      'checkbox__icon-space checkbox__icon-space_type_default',
    );

    const $defaultCheckboxButtons = this.$checkbox.find('.js-checkbox__button_type_default');
    $defaultCheckboxButtons.text('check');
  }

  _initRadio() {
    this.$pluginElement = this.$checkbox.find('.js-checkbox__hidden-button_type_radio');
    this._initPlugin('checkbox__button checkbox__button_type_radio',
      'checkbox__icon-space checkbox__icon-space_type_radio');
  }

  _initToggle() {
    this.$pluginElement = this.$checkbox.find('.js-checkbox__hidden-button_type_toggle');
    this._initPlugin('checkbox__button checkbox__button_type_toggle',
      'checkbox__icon-space checkbox__icon-space_type_toggle');
  }
}

export default Checkbox;
