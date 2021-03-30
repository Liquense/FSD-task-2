import initTwoCalendarDatepickers from '../../blocks/double-date-picker/init';
import initDropdowns from '../../blocks/dropdown/init';
import './find-room-card.scss';

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
