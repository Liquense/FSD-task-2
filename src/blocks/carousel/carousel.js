/* eslint-disable no-undef */
// jQuery объявлена глобально вебпаком
import 'slick-carousel';
import '../../../node_modules/slick-carousel/slick/slick.css';

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
      arrows: (this.$element.attr('data-arrows').toLowerCase() === 'true'),
      prevArrow: '<label class="slick-prev"><button type="button" >expand_more</button></label>',
      nextArrow: '<label class="slick-next"><button type="button" >expand_more</button></label>',
      dots: (this.$element.attr('data-dots').toLowerCase() === 'true'),
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
