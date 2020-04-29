/* eslint-disable no-undef */
// jquery подключена вебпаком
import './roomPreviewCard.scss';
import initCarouselPlugin from '../../blocks/carousel/carousel';
import setRatingToRateButton from '../../blocks/RateButton/RateButton';
import { formatNumber, ruDeclination } from '../../common/functions';

export default function initRoomPreviewCard() {
  const $costPerPeriodSpan = this.find('.roomPreviewCard__costPerPeriod');
  const $reviewsCountSpan = this.find('.roomPreviewCard__reviewsCount');
  const $reviewsTextSpan = this.find('.roomPreviewCard__reviewsText');
  const $ratingElement = this.find('.roomPreviewCard__rating');

  const cardData = {
    currency: this.attr('data-currency'),
    costPerPeriod: this.attr('data-costPerPeriod'),
    reviewsCount: this.attr('data-reviewsCount'),
  };

  initCarouselPlugin(this);
  const formattedCostPerPeriod = formatNumber(cardData.costPerPeriod, ' ');
  $costPerPeriodSpan.text(formattedCostPerPeriod + cardData.currency);
  const formattedReviewsCount = formatNumber(cardData.reviewsCount, ' ');
  $reviewsCountSpan.text(formattedReviewsCount);
  setRatingToRateButton($ratingElement);
  const inclinedReviewsText = ruDeclination(cardData.reviewsCount, 'отзыв||а|ов');
  $reviewsTextSpan.text(inclinedReviewsText);
}

$(document).ready(() => {
  const $roomPreviewCard = $('.roomPreviewCard');
  $roomPreviewCard.each(initRoomPreviewCard);
});
