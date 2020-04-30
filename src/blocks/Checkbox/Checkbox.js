/* eslint-disable no-undef */
// jQuery объявлена глобально вебпаком
import 'jquery-ui/ui/widgets/checkboxradio';
import './Checkbox.scss';
// type
import initDefaultCheckboxes from './_type/_default/Checkbox_type_default';
import initRadioCheckboxes from './_type/_radio/Checkbox_type_radio';
import initToggleCheckboxes from './_type/_toggle/Checkbox_type_toggle';
import initLikeCheckboxes from './_type/_like/checkbox_type_like';
// rich
import './_rich/Checkbox_rich.scss';


export default class Checkbox {
  static initDefault() {
    initDefaultCheckboxes();
  }

  static initLike() {
    initLikeCheckboxes();
  }

  static initRadio() {
    initRadioCheckboxes();
  }

  static initToggle() {
    initToggleCheckboxes();
  }
}
