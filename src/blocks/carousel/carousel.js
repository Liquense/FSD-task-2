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
      arrows: (this.$element.attr('data-arrows')?.toLowerCase() === 'true'),
      prevArrow: '<label class="carousel__prev-button"><button class="carousel__nav-button" type="button" >chevron_left</button></label>',
      nextArrow: '<label class="carousel__next-button"><button class="carousel__nav-button" type="button" >chevron_right</button></label>',
      dots: (this.$element.attr('data-dots')?.toLowerCase() === 'true'),
      dotsClass: 'carousel__dots',
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
