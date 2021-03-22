import './like-button.scss';

class LikeButton {
  $like;

  $icon;

  $text;

  $hiddenButton;

  checkedClass = 'like-button_checked';

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
    const isChecked = this.$hiddenButton.attr('data-is-checked') === 'true';
    if (isChecked) {
      this.$hiddenButton[0].checked = true;
      this._changeVisuals(true);
    }
    this.$hiddenButton.on('change.like', this._handleChange);
  }

  _handleChange = () => {
    if (this.$hiddenButton[0].checked) {
      this._setLikesAmount(this._getLikesAmount() + 1);
      this._changeVisuals(true);
    } else {
      this._setLikesAmount(this._getLikesAmount() - 1);
      this._changeVisuals(false);
    }
  }

  _changeVisuals(isChecked) {
    if (isChecked) {
      this.$icon.text('favorite');
      this.$like.addClass(this.checkedClass);
    } else {
      this.$icon.text('favorite_border');
      this.$like.removeClass(this.checkedClass);
    }
  }
}

export default LikeButton;
