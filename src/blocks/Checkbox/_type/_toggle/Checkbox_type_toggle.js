import './Checkbox_type_toggle.scss';
import initCheckboxes from '../../CheckboxCommon';

export default function initToggleCheckboxes() {
  initCheckboxes('.checkbox__hiddenButton_type_toggle', {
    icon: 'checkbox__button checkbox__button_type_toggle',
    iconSpace: 'checkbox__iconSpace checkbox__iconSpace_type_toggle',
  });
}
