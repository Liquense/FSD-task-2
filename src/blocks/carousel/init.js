import Carousel from './carousel';

function initCarousels() {
  // eslint-disable-next-line no-undef
  const $carousels = $('.js-carousel');
  const initiatedCarousels = [];

  $carousels.each((index, element) => {
    initiatedCarousels.push(new Carousel(element));
  });

  return initiatedCarousels;
}

export default initCarousels;
