/* eslint-disable no-undef */
// jquery подключена вебпаком
import { initTwoCalendarPicker } from '../../blocks/two-calendar-range-picker/two-calendar-range-picker';
import { initDropdowns } from '../../blocks/dropdown/dropdown';

export default function initFindRoomCard(index, cardElement) {
  const $card = $(cardElement);
  const $twoCalendarPickers = $card.find('.two-calendar-range-picker');
  $twoCalendarPickers.each(initTwoCalendarPicker);
  initDropdowns();
}
