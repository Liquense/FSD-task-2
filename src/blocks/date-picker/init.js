import Datepicker from './date-picker';
import initBlocks from '../../common/dynamicInit';

function initDatepickers(rootElement) {
  return initBlocks(rootElement, '.js-date-picker', Datepicker);
}

export default initDatepickers;
