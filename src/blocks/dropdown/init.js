import initBlocks from '../../utils/dynamicInit';
import Dropdown from './dropdown';

function initDropdowns(rootElement) {
  return initBlocks(rootElement, '.js-dropdown', Dropdown);
}

export default initDropdowns;
