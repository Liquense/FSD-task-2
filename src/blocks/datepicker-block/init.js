/* eslint-disable no-undef */
import DatepickerBlock from './datepicker-block';
import initBlocks from '../../common/dynamicInit';

function initDatepickers(rootElement) {
  return initBlocks(rootElement, '.js-datepicker-block', DatepickerBlock);
}

export default initDatepickers;
