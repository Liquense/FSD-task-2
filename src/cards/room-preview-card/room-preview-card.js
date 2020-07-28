import { formatNumber, ruDeclination } from '../../common/functions';
import initCarousels from '../../blocks/carousel/init';
import initRatings from '../../blocks/rating/init';

class RoomPreviewCard {
  $roomPreviewCard;

  $dailyCost;

  $reviewsAmount;

  $reviewsText;

  currency;

  dailyCost;

  reviewsAmount;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initProperties();
    this._initCaptions();
    this._initInnerBlocks();
  }

  _initElements(rootElement) {
    this.$roomPreviewCard = $(rootElement);

    this.$dailyCost = this.$roomPreviewCard.find('.js-room-preview-card__cost-per-period');
    this.$reviewsAmount = this.$roomPreviewCard.find('.js-room-preview-card__reviews-count');
    this.$reviewsText = this.$roomPreviewCard.find('.js-room-preview-card__reviews-text');
  }

  _initProperties() {
    this.currency = this.$roomPreviewCard.attr('data-currency');
    this.dailyCost = this.$roomPreviewCard.attr('data-cost-per-period');
    this.reviewsAmount = this.$roomPreviewCard.attr('data-reviews-count');
  }

  _initCaptions() {
    const formattedCostPerPeriod = formatNumber(this.dailyCost, ' ');
    this.$dailyCost.text(`${formattedCostPerPeriod}${this.currency}`);

    const formattedReviewsCount = formatNumber(this.reviewsAmount, ' ');
    this.$reviewsAmount.text(formattedReviewsCount);

    const inclinedReviewsText = ruDeclination(this.reviewsAmount, 'Отзыв||а|ов');
    this.$reviewsText.text(inclinedReviewsText);
  }

  _initInnerBlocks() {
    initRatings(this.$roomPreviewCard);
    initCarousels(this.$roomPreviewCard);
  }
}

export default RoomPreviewCard;
