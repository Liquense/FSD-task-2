import Checkbox from './checkbox';
import initBlocks from '../../common/dynamicInit';

function initCheckboxes(rootElement) {
  initBlocks(rootElement, '.js-checkbox', Checkbox);
}

export default initCheckboxes;
