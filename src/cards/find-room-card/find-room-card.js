/* eslint-disable no-undef */
// jquery подключена вебпаком
import './find-room-card.scss';
import '../../blocks/input/input';
import { initTwoCalendarPicker } from '../../blocks/two-calendar-range-picker/two-calendar-range-picker';
import { initDropdownInput } from '../../blocks/input/_type/_dropdown/input__list_type_dropdown';

export default function initFindRoomCard(index, cardElement) {
  const $card = $(cardElement);
  const $twoCalendarPickers = $card.find('.two-calendar-range-picker');
  $twoCalendarPickers.each(initTwoCalendarPicker);
  const $dropdowns = $card.find('.input_type_dropdown');
  $dropdowns.each(initDropdownInput);
}
