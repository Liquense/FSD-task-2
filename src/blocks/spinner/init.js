import initBlocks from '../../common/dynamicInit';
import Spinner from './spinner';

function initSpinners(rootElement) {
  return initBlocks(rootElement, '.js-spinner', Spinner);
}

export default initSpinners;
