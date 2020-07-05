/* eslint-disable no-undef */
// jquery объявлен вебпаком
const states = { 1: 'star_border', 2: 'star_half', 3: 'star' };
function setState($star, stateIndex) {
  $star.text(states[stateIndex]);
}

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
  $ratingButton.children('.js-rate-button__star').each(setRateStarState);
}

function initRateButton(index, element) {
  const $rating = $(element);
  const maxRating = $rating.attr('data-maxRating');
  const specifiedRating = $rating.attr('data-rating');

  let rating;
  if (specifiedRating === '-1') {
    rating = Math.random() * maxRating;
  } else {
    rating = specifiedRating;
  }

  setRatingVisual($rating, rating);
}

function initRateButtons() {
  const $rateButtons = $('.js-rate-button');
  $rateButtons.each(initRateButton);
}

export default initRateButtons;
