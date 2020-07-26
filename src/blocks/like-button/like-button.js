/* eslint-disable no-undef */
import 'jquery-ui/ui/widgets/checkboxradio';

class LikeButton {
  $like;

  $label;

  $text;

  $hiddenButton;

  get likesAmount() {
    return Number.parseInt(this.$label.attr('data-likes-count'), 10);
  }

  set likesAmount(amount) {
    this.$text.text(amount);
    this.$label.attr('data-likes-count', amount);
  }

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initLike();
  }

  _initElements(rootElement) {
    this.$like = $(rootElement);
    this.$label = this.$like.find('.js-like-button__label');
    this.$text = this.$like.find('.js-like-button__text');
    this.$hiddenButton = this.$like.find('.js-like-button__hidden-button');
  }

  _initLike() {
    this._initPlugin('like-button__button');
    this._createBorder();
    this.$hiddenButton.on('change.like', this._handleChange);
  }

  _createBorder() {
    const gradientBorderElement = document.createElement('div');
    gradientBorderElement.classList.add('like-button__border');
    this.$label.prepend(gradientBorderElement);
  }

  _handleChange = () => {
    this.likesAmount = this.$label.hasClass('ui-checkboxradio-checked')
      ? this.likesAmount + 1
      : this.likesAmount - 1;
  }

  _initPlugin(icon, iconSpace) {
    const checkbox = this.$hiddenButton.checkboxradio({
      classes: { 'ui-checkboxradio-icon': icon, 'ui-checkboxradio-icon-space': iconSpace },
    });

    const isChecked = this.$hiddenButton.attr('data-is-checked') === 'true';
    if (isChecked) { checkbox.attr('checked', 'checked').change(); }
  }
}

export default LikeButton;