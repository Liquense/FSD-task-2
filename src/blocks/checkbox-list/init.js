import initBlocks from '../../common/dynamicInit';
import CheckboxList from './checkbox-list';

function initLists(rootElement) {
  return initBlocks(rootElement, '.js-checkbox-list', CheckboxList);
}

export default initLists;
