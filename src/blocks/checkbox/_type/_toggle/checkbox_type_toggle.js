import './checkbox_type_toggle.scss';
import initCheckbox from '../../checkbox-common';

export default function initToggleCheckboxes() {
  initCheckbox('.checkbox_type_toggle__hidden-button', {
    icon: 'checkbox__button checkbox_type_toggle__button',
    iconSpace: 'checkbox__icon-space checkbox_type_toggle__icon-space',
  });
}
