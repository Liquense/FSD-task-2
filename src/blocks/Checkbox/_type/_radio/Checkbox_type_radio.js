import './Checkbox_type_radio.scss';
import initCheckboxes from '../../CheckboxCommon';

export default function initRadioCheckboxes() {
  initCheckboxes('.checkbox__hiddenButton_type_radio',
    {
      icon: 'checkbox__button checkbox__button_type_radio',
      iconSpace: 'checkbox__iconSpace checkbox__iconSpace_type_radio',
    });
}
