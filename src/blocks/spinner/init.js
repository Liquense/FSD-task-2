import initBlocks from '../../common/dynamicInit';
import Spinner from './spinner';

function initSpinners(rootElement) {
  return initBlocks(rootElement, '.js-spinner__value', Spinner);
}

export default initSpinners;
