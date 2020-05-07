/* eslint-disable no-undef */
// jQuery объявлена глобально вебпаком
import './checkbox_type_default.scss';
import initCheckboxes from '../../checkbox-common';

initCheckboxes('.checkbox__hidden-button_type_default', {
  icon: 'checkbox__button checkbox__button_type_default',
  iconSpace: 'checkbox__icon-space checkbox__icon-space_type_default',
});

export default function initDefaultCheckboxes() {
  const $defaultCheckboxes = $('.checkbox__button_type_default');
  $defaultCheckboxes.text('check');
}
