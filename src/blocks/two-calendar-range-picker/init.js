import initBlocks from '../../common/dynamicInit';
import TwoCalendarDatepicker from './two-calendar-range-picker';

function initTwoCalendarDatepickers(rootElement) {
  return initBlocks(rootElement, '.js-two-calendar-range-picker', TwoCalendarDatepicker);
}

export default initTwoCalendarDatepickers;
