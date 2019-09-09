import "./roomPreviewCard.scss"
import {formatNumber} from "../../common/functions";

$('.roomPreviewCard').each(function () {
	const $roomPreviewCard = $(this);
	const $costPerPeriodSpan = $roomPreviewCard.find('.roomPreviewCard__costPerPeriod');
	const $reviewsCountSpan = $roomPreviewCard.find('.roomPreviewCard__reviewsCount');

	const cardData = {
		currency: $roomPreviewCard.attr("data-currency"),
		costPerPeriod: $roomPreviewCard.attr("data-costPerPeriod"),
		reviewsCount: $roomPreviewCard.attr("data-reviewsCount")
	};

	const formattedCostPerPeriod = formatNumber(cardData.costPerPeriod, " ");
	$costPerPeriodSpan.text(formattedCostPerPeriod + cardData.currency);
	const formattedReviewsCount = formatNumber(cardData.reviewsCount, " ");
	$reviewsCountSpan.text(formattedReviewsCount);
});
