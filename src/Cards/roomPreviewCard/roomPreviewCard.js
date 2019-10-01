import "./roomPreviewCard.scss"
import "../../blocks/carousel/carousel"
import "../../blocks/RateButton/RateButton"

import {formatNumber, ruDeclination} from "../../common/functions";
import {setRatingToRateButton} from "../../blocks/RateButton/RateButton";
import {initCarouselPlugin} from "../../blocks/carousel/carousel";

$(document).ready(function () {
	$('.roomPreviewCard').each(function () {
		initRoomPreviewCard($(this));
	});
});

export function initRoomPreviewCard($roomPreviewCard) {
	const $costPerPeriodSpan = $roomPreviewCard.find('.roomPreviewCard__costPerPeriod');
	const $reviewsCountSpan = $roomPreviewCard.find('.roomPreviewCard__reviewsCount');
	const $reviewsTextSpan = $roomPreviewCard.find('.roomPreviewCard__reviewsText');
	const $ratingElement = $roomPreviewCard.find(".roomPreviewCard__rating");

	const cardData = {
		currency: $roomPreviewCard.attr("data-currency"),
		costPerPeriod: $roomPreviewCard.attr("data-costPerPeriod"),
		reviewsCount: $roomPreviewCard.attr("data-reviewsCount")
	};

	initCarouselPlugin($roomPreviewCard);
	const formattedCostPerPeriod = formatNumber(cardData.costPerPeriod, " ");
	$costPerPeriodSpan.text(formattedCostPerPeriod + cardData.currency);
	const formattedReviewsCount = formatNumber(cardData.reviewsCount, " ");
	$reviewsCountSpan.text(formattedReviewsCount);
	setRatingToRateButton($ratingElement);
	const inclinedReviewsText = ruDeclination(cardData.reviewsCount, "отзыв||а|ов");
	$reviewsTextSpan.text(inclinedReviewsText);
}
