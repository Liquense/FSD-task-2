/* eslint-disable no-undef */
// jquery подключена вебпаком
import initRateButtons from '../../blocks/rate-button/rate-button';
import { formatNumber, ruDeclination } from '../../common/functions';
import initCarousels from '../../blocks/carousel/carousel';

function initRoomPreviewCard() {
  const $this = $(this);
  const $costPerPeriodSpan = $this.find('.js-room-preview-card__cost-per-period');
  const $reviewsCountSpan = $this.find('.js-room-preview-card__reviews-count');
  const $reviewsTextSpan = $this.find('.js-room-preview-card__reviews-text');

  const cardData = {
    currency: $this.attr('data-currency'),
    costPerPeriod: $this.attr('data-cost-per-period'),
    reviewsCount: $this.attr('data-reviews-count'),
  };

  const formattedCostPerPeriod = formatNumber(cardData.costPerPeriod, ' ');
  $costPerPeriodSpan.text(formattedCostPerPeriod + cardData.currency);
  const formattedReviewsCount = formatNumber(cardData.reviewsCount, ' ');
  $reviewsCountSpan.text(formattedReviewsCount);
  const inclinedReviewsText = ruDeclination(cardData.reviewsCount, 'Отзыв||а|ов');
  $reviewsTextSpan.text(inclinedReviewsText);
}

function initRoomPreviewCards() {
  const $roomPreviewCard = $('.js-room-preview-card');
  $roomPreviewCard.each(initRoomPreviewCard);
  initRateButtons();
  initCarousels();
}

export default initRoomPreviewCards;
