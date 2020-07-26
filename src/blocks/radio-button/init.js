import initBlocks from '../../common/dynamicInit';
import RadioButton from './radio-button';

function initRadioButtons(rootElement) {
  return initBlocks(rootElement, '.js-radio-button', RadioButton);
}

export default initRadioButtons;
