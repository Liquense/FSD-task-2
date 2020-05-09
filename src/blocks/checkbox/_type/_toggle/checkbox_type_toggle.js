import './checkbox_type_toggle.scss';
import initCheckbox from '../../checkbox-common';

export default function initToggleCheckboxes() {
  initCheckbox('.checkbox__hidden-button_type_toggle', {
    icon: 'checkbox__button checkbox__button_type_toggle',
    iconSpace: 'checkbox__icon-space checkbox__icon-space_type_toggle',
  });
}
