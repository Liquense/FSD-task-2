import initBlocks from '../../common/dynamicInit';
import Input from './input';

function initMaskedInputs(rootElement) {
  initBlocks(rootElement, '.js-input', Input);
}

export default initMaskedInputs;
