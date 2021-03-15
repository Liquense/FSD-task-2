import 'jquery-ui/ui/widgets/checkboxradio';

import './like-button.scss';

class LikeButton {
  $like;

  $icon;

  $text;

  $hiddenButton;

  _getLikesAmount() {
    return Number.parseInt(this.$like.attr('data-likes-count'), 10);
  }

  _setLikesAmount(amount) {
    this.$text.text(amount);
    this.$like.attr('data-likes-count', amount);
  }

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initLike();
  }

  _initElements(rootElement) {
    this.$like = $(rootElement);
    this.$text = this.$like.find('.js-like-button__text');
    this.$icon = this.$like.find('.js-like-button__icon');
    this.$hiddenButton = this.$like.find('.js-like-button__hidden-button');
  }

  _initLike() {
    this._initPlugin('like-button__button');
    this.$hiddenButton.on('change.like', this._handleChange);
  }

  _handleChange = () => {
    if (this.$like.hasClass('ui-checkboxradio-checked')) {
      this._setLikesAmount(this._getLikesAmount() + 1);
      this.$icon.text('favorite');
    } else {
      this._setLikesAmount(this._getLikesAmount() - 1);
      this.$icon.text('favorite_border');
    }
  }

  _initPlugin(iconClass) {
    const checkbox = this.$hiddenButton.checkboxradio({
      icon: false,
      classes: {
        'ui-checkboxradio-icon': iconClass,
      },
    });

    const isChecked = this.$hiddenButton.attr('data-is-checked') === 'true';
    if (isChecked) {
      checkbox.attr('checked', 'checked').change();
    }
  }
}

export default LikeButton;
