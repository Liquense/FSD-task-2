// '.js-input__control_type_masked'
import initBlocks from '../../common/dynamicInit';
import MaskedInput from './input';

function initMaskedInputs(rootElement) {
  initBlocks(rootElement, '.js-input_type_masked', MaskedInput);
}

export default initMaskedInputs;
