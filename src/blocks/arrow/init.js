import initBlocks from '../../utils/dynamicInit';
import Arrow from './arrow';

function initArrows(rootElement) {
  return initBlocks(rootElement, '.js-arrow', Arrow);
}

export default initArrows;
