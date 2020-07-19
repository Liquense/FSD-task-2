import initBlocks from '../../common/dynamicInit';
import Rating from './rating';

function initRatings(rootElement) {
  return initBlocks(rootElement, '.js-rating', Rating);
}

export default initRatings;
