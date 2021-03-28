import initBlocks from '../../utils/dynamicInit';
import TwoCalendarDatepicker from './double-date-picker';

function initTwoCalendarDatepickers(rootElement) {
  return initBlocks(rootElement, '.js-double-date-picker', TwoCalendarDatepicker);
}

export default initTwoCalendarDatepickers;
