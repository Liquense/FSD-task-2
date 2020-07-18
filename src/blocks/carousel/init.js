import Carousel from './carousel';
import initBlocks from '../../common/dynamicInit';

function initCarousels(rootElement) {
  return initBlocks(rootElement, '.js-carousel', Carousel);
}

export default initCarousels;
