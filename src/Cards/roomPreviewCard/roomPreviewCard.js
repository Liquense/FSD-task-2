import "./roomPreviewCard.scss"
import "../../blocks/carousel/carousel"
import "../../blocks/RateButton/RateButton"

import {formatNumber, ruDeclination} from "../../common/functions";
import {initCarouselPlugin} from "../../blocks/carousel/carousel";

$(document).ready(function () {
	$('.roomPreviewCard').each(function () {
		const $roomPreviewCard = $(this);
		const $costPerPeriodSpan = $roomPreviewCard.find('.roomPreviewCard__costPerPeriod');
		const $reviewsCountSpan = $roomPreviewCard.find('.roomPreviewCard__reviewsCount');
		const $reviewsTextSpan = $roomPreviewCard.find('.roomPreviewCard__reviewsText');

		const cardData = {
			currency: $roomPreviewCard.attr("data-currency"),
			costPerPeriod: $roomPreviewCard.attr("data-costPerPeriod"),
			reviewsCount: $roomPreviewCard.attr("data-reviewsCount")
		};

		const formattedCostPerPeriod = formatNumber(cardData.costPerPeriod, " ");
		$costPerPeriodSpan.text(formattedCostPerPeriod + cardData.currency);
		const formattedReviewsCount = formatNumber(cardData.reviewsCount, " ");
		$reviewsCountSpan.text(formattedReviewsCount);
		const inclinedReviewsText = ruDeclination(cardData.reviewsCount, "отзыв||а|ов");
		$reviewsTextSpan.text(inclinedReviewsText);
	});
});
