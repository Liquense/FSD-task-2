import Carousel from './carousel';
import initBlocks from '../../utils/dynamicInit';

function initCarousels(rootElement) {
  return initBlocks(rootElement, '.js-carousel', Carousel);
}

export default initCarousels;
