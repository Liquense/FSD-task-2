import initBlocks from '../../common/dynamicInit';
import Pagination from './pagination';

function initPaginations(rootElement) {
  return initBlocks(rootElement, '.js-pagination', Pagination);
}

export default initPaginations;
