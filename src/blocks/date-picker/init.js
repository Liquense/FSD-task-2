import initBlocks from '../../utils/dynamicInit';
import DatePicker from './date-picker';

function initDatepickers(rootElement) {
  return initBlocks(rootElement, '.js-date-picker', DatePicker);
}

export default initDatepickers;
