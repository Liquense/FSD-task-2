import initLists from '../../blocks/list/init';

class RegistrationCard {
  $registrationCard;

  lists;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initContent();
  }

  _initElements(rootElement) {
    this.$registrationCard = $(rootElement);
  }

  _initContent() {
    this.lists = initLists(this.$registrationCard);
  }
}

export default RegistrationCard;
