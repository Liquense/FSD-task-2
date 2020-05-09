import './checkbox_type_radio.scss';
import initCheckbox from '../../checkbox-common';

export default function initRadioCheckboxes() {
  initCheckbox('.checkbox__hidden-button_type_radio',
    {
      icon: 'checkbox__button checkbox__button_type_radio',
      iconSpace: 'checkbox__icon-space checkbox__iconSpace_type_radio',
    });
}
