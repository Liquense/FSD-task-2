import initBlocks from '../../utils/dynamicInit';
import Rating from './rating';

function initRatings(rootElement) {
  return initBlocks(rootElement, '.js-rating', Rating);
}

export default initRatings;
