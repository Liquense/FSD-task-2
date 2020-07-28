import initBlocks from '../../common/dynamicInit';
import Header from './header';

function initHeaders(rootElement) {
  return initBlocks(rootElement, '.js-header', Header);
}

export default initHeaders;
