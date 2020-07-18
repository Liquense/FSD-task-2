import initBlocks from '../../common/dynamicInit';
import List from './list';

function initLists(rootElement) {
  return initBlocks(rootElement, '.js-list', List);
}

export default initLists;
