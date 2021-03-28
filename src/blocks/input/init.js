import initBlocks from '../../utils/dynamicInit';
import Input from './input';

function initInputs(rootElement) {
  return initBlocks(rootElement, '.js-input', Input);
}

export default initInputs;
