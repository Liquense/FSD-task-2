import './checkbox_type_radio.scss';
import initCheckbox from '../../checkbox-common';

export default function initRadioCheckboxes() {
  initCheckbox('.checkbox_type_radio__hidden-button',
    {
      icon: 'checkbox__button checkbox_type_radio__button',
      iconSpace: 'checkbox__icon-space checkbox_type_radio__iconSpace',
    });
}
