import initBlocks from '../../utils/dynamicInit';
import Carousel from './carousel';

function initCarousels(rootElement) {
  return initBlocks(rootElement, '.js-carousel', Carousel);
}

export default initCarousels;
