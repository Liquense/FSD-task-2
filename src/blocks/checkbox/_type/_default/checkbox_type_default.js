/* eslint-disable no-undef */
// jQuery объявлена глобально вебпаком
import './checkbox_type_default.scss';
import initCheckbox from '../../checkbox-common';

initCheckbox('.checkbox_type_default__hidden-button', {
  icon: 'checkbox__button checkbox_type_default__button',
  iconSpace: 'checkbox__icon-space checkbox_type_default__icon-space',
});

export default function initDefaultCheckboxes() {
  const $defaultCheckboxes = $('.checkbox_type_default__button');
  $defaultCheckboxes.text('check');
}
