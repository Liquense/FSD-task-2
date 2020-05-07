import './checkbox_type_radio.scss';
import initCheckboxes from '../../checkbox-common';

export default function initRadioCheckboxes() {
  initCheckboxes('.checkbox__hidden-button_type_radio',
    {
      icon: 'checkbox__button checkbox__button_type_radio',
      iconSpace: 'checkbox__icon-space checkbox__iconSpace_type_radio',
    });
}
