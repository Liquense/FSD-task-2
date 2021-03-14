import './rating.scss';

class Rating {
  static states = { empty: 'star_border', half: 'star_half', full: 'star' };

  $rating;

  $stars;

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
    this.$stars = this.$rating.find('.js-rating__star');
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

  _setRating(numericRating) {
    this.ratingIntegerPart = Math.floor(numericRating);
    this.ratingFractionPart = numericRating - this.ratingIntegerPart;

    this.$stars.each(this._setStarState);
  }

  _setStarState = (index, element) => {
    if (index + 1 <= this.ratingIntegerPart) {
      $(element).text(Rating.states.full);
    } else if (this.ratingFractionPart > 0 && index === this.ratingIntegerPart) {
      $(element).text(Rating.states.half);
    } else {
      $(element).text(Rating.states.empty);
    }
  }
}

export default Rating;
