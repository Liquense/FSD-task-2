import "./RateButton.scss"
import * as star from "./__star/RateButton__star"

export let setRatingVisual = function ($ratingButton, numericRating) {
	let wholePart = Math.floor(numericRating);
	let fraction = numericRating - wholePart;

	$ratingButton.children(".rateButton__star").each(function (index) {
		let stateIndex; //3 - full, 2 - half, 1 - empty
		if (index + 1 <= wholePart) {
			stateIndex = 3;
		} else if (fraction > 0 && index === wholePart) {
			stateIndex = 2;
		} else {
			stateIndex = 1;
		}

		star.setState($(this), stateIndex);
	});
};

$(".rateButton").each(function () {
	const $rateButton = $(this);
	const maxRating = $rateButton.attr("data-maxRating");

	let rate = Math.random() * maxRating;
	setRatingVisual($rateButton, rate);
});
