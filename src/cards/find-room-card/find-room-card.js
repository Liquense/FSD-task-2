/* eslint-disable no-undef */
import initTwoCalendarDatepickers from '../../blocks/two-calendar-range-picker/init';
import initDropdowns from '../../blocks/dropdown/init';

class FindRoomCard {
  $findRoomCard;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initContent();
  }

  _initElements(rootElement) {
    this.$findRoomCard = $(rootElement);
  }

  _initContent() {
    initTwoCalendarDatepickers(this.$findRoomCard);
    initDropdowns(this.$findRoomCard);
  }
}

export default FindRoomCard;
