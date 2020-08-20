import DatePicker from './date-picker';
import initBlocks from '../../common/dynamicInit';

function initDatepickers(rootElement) {
  return initBlocks(rootElement, '.js-date-picker', DatePicker);
}

export default initDatepickers;
