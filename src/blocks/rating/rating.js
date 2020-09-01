class Rating {
  static states = { empty: 'star_border', half: 'star_half', full: 'star' };

  $rating;

  maxRating;

  specifiedRating;

  ratingIntegerPart;

  ratingFractionPart;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initProperties();
    this._initRating();
  }

  _initElements(rootElement) {
    this.$rating = $(rootElement);
  }

  _initProperties() {
    this.maxRating = this.$rating.attr('data-max-rating');
    this.specifiedRating = this.$rating.attr('data-rating');
  }

  _initRating() {
    const rating = this.specifiedRating === '-1'
      ? Math.random() * this.maxRating
      : this.specifiedRating;

    this._setRating(rating);
  }

  static _setState($star, stateKey) {
    $star.text(Rating.states[stateKey]);
  }

  _setRating(numericRating) {
    this.ratingIntegerPart = Math.floor(numericRating);
    this.ratingFractionPart = numericRating - this.ratingIntegerPart;

    this.$rating.find('.js-rating__star').each(this._setStarState);
  }

  _setStarState = (index, element) => {
    if (index + 1 <= this.ratingIntegerPart) {
      Rating._setState($(element), 'full');
    } else if (this.ratingFractionPart > 0 && index === this.ratingIntegerPart) {
      Rating._setState($(element), 'half');
    } else {
      Rating._setState($(element), 'empty');
    }
  }
}

export default Rating;
