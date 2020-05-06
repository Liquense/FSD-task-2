/* eslint-disable no-undef */
// jquery подключена вебпаком
import './findRoomCard.scss';
import '../../blocks/Input/input';
import { initTwoCalendarPicker } from '../../blocks/twoCalendarRangePicker/twoCalendarRangePicker';
import initDropdownInput from '../../blocks/Input/_type/_dropdown/input__list_type_dropdown';

export default function initFindRoomCard(index, cardElement) {
  const $card = $(cardElement);
  const $twoCalendarPickers = $card.find('.twoCalendarRangePicker');
  $twoCalendarPickers.each(initTwoCalendarPicker);
  const $dropdowns = $card.find('.input_type_dropdown');
  $dropdowns.each(initDropdownInput);
}
