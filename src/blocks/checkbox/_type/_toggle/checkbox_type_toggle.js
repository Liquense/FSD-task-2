import './checkbox_type_toggle.scss';
import initCheckboxes from '../../checkbox-common';

export default function initToggleCheckboxes() {
  initCheckboxes('.checkbox__hidden-button_type_toggle', {
    icon: 'checkbox__button checkbox__button_type_toggle',
    iconSpace: 'checkbox__icon-space checkbox__icon-space_type_toggle',
  });
}
