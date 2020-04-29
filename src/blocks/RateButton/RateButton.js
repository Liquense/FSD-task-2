/* eslint-disable no-undef */
// jquery объявлен вебпаком
import './RateButton.scss';
import setState from './__star/RateButton__star';

function setRatingVisual($ratingButton, numericRating) {
  const wholePart = Math.floor(numericRating);
  const fraction = numericRating - wholePart;

  function setRateStarState(index) {
    let stateIndex; // 3 - full, 2 - half, 1 - empty
    if (index + 1 <= wholePart) {
      stateIndex = 3;
    } else if (fraction > 0 && index === wholePart) {
      stateIndex = 2;
    } else {
      stateIndex = 1;
    }

    setState($(this), stateIndex);
  }
  $ratingButton.children('.rateButton__star').each(setRateStarState);
}

export default function setRatingToRateButton($rateButton) {
  const maxRating = $rateButton.attr('data-maxRating');
  const specifiedRating = $rateButton.attr('data-rating');

  let rating;
  if (specifiedRating === '-1') {
    rating = Math.random() * maxRating;
  } else {
    rating = specifiedRating;
  }

  setRatingVisual($rateButton, rating);
}

const $rateButtons = $('.rateButton');
function initRateButton() {
  const $rateButton = $(this);
  setRatingToRateButton($rateButton);
}
$rateButtons.each(initRateButton);
