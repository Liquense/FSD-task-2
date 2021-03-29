import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';

import './carousel.scss';
import './slick-slider.scss';

class Carousel {
  $element;

  constructor(rootElement) {
    this._initElement(rootElement);
    this._initCarousel();
  }

  _initElement(rootElement) {
    this.$element = $(rootElement);
  }

  _getCarouselParams() {
    return {
      arrows: (this.$element.attr('data-arrows')?.toLowerCase() === 'true'),
      prevArrow: '<label class="slick-prev"><button class="slick-nav-button" type="button" >chevron_left</button></label>',
      nextArrow: '<label class="slick-next"><button class="slick-nav-button" type="button" >chevron_right</button></label>',
      dots: this.$element.attr('data-dots')?.toLowerCase() === 'true',
      dotsClass: 'slick-dots',
    };
  }

  _initCarousel() {
    const initAttrName = 'data-initiated';
    const initAttrValue = 'true';

    if (this.$element.attr(initAttrName) === initAttrValue) { return; }

    const params = this._getCarouselParams();

    this.$element.slick(params);
    this.$element.attr(initAttrName, initAttrValue);
  }
}

export default Carousel;
