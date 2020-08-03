import Dropdown from './dropdown';
import initBlocks from '../../common/dynamicInit';

function initDropdowns(rootElement) {
  return initBlocks(rootElement, '.js-dropdown', Dropdown);
}

export default initDropdowns;
