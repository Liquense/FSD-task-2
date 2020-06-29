/* eslint-disable no-undef */
// jquery подключена вебпаком
import initCarouselPlugin from '../../blocks/carousel/carousel';
import setRatingToRateButton from '../../blocks/rate-button/rate-button';
import { formatNumber, ruDeclination } from '../../common/functions';

export default function initRoomPreviewCard() {
  const $this = $(this);
  const $costPerPeriodSpan = $this.find('.room-preview-card__cost-per-period');
  const $reviewsCountSpan = $this.find('.room-preview-card__reviews-count');
  const $reviewsTextSpan = $this.find('.room-preview-card__reviews-text');
  const $ratingElement = $this.find('.room-preview-card__rating');

  const cardData = {
    currency: $this.attr('data-currency'),
    costPerPeriod: $this.attr('data-cost-per-period'),
    reviewsCount: $this.attr('data-reviews-count'),
  };

  initCarouselPlugin($this);
  const formattedCostPerPeriod = formatNumber(cardData.costPerPeriod, ' ');
  $costPerPeriodSpan.text(formattedCostPerPeriod + cardData.currency);
  const formattedReviewsCount = formatNumber(cardData.reviewsCount, ' ');
  $reviewsCountSpan.text(formattedReviewsCount);
  setRatingToRateButton($ratingElement);
  const inclinedReviewsText = ruDeclination(cardData.reviewsCount, 'Отзыв||а|ов');
  $reviewsTextSpan.text(inclinedReviewsText);
}

$(document).ready(() => {
  const $roomPreviewCard = $('.room-preview-card');
  $roomPreviewCard.each(initRoomPreviewCard);
});
