import DatePicker from './date-picker';
import initBlocks from '../../utils/dynamicInit';

function initDatepickers(rootElement) {
  return initBlocks(rootElement, '.js-date-picker', DatePicker);
}

export default initDatepickers;
