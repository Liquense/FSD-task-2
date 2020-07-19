/* eslint-disable no-undef */
import initLists from '../../blocks/list/init';
import initCheckboxes from '../../blocks/checkbox/init';

class RegistrationCard {
  $registrationCard;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initContent();
  }

  _initElements(rootElement) {
    this.$registrationCard = $(rootElement);
  }

  _initContent() {
    initLists(this.$registrationCard);
    initCheckboxes(this.$registrationCard);
  }
}

export default RegistrationCard;
