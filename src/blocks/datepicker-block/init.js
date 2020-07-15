/* eslint-disable no-undef */
import DatepickerBlock from './datepicker-block';

function initDatepickers() {
  const $datepickers = $('.js-datepicker-block');
  const datepickers = [];

  $datepickers.each((index, element) => {
    datepickers.push(new DatepickerBlock(element));
  });

  return datepickers;
}

export default initDatepickers;
