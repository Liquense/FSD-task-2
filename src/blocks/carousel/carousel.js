/* eslint-disable no-undef */
// jQuery объявлена глобально вебпаком
import 'slick-carousel';
import '../../../node_modules/slick-carousel/slick/slick.css';

function getCarouselParams($carousel) {
  return {
    arrows: ($carousel.attr('data-arrows').toLowerCase() === 'true'),
    prevArrow: '<label class="slick-prev"><button type="button" >expand_more</button></label>',
    nextArrow: '<label class="slick-next"><button type="button" >expand_more</button></label>',
    dots: ($carousel.attr('data-dots').toLowerCase() === 'true'),
  };
}

export default function initCarouselPlugin($parent) {
  function initCarousel() {
    const initAttrName = 'data-initiated';
    const initAttrValue = 'true';

    const $carousel = $(this);
    if ($carousel.attr(initAttrName) === initAttrValue) { return; }

    const params = getCarouselParams($carousel);

    $carousel.slick(params);
    $carousel.attr(initAttrName, initAttrValue);
  }

  $parent.find('.carousel').each(initCarousel);
}

$(document).ready(() => {
  initCarouselPlugin($('body'));
});
