/* eslint-disable no-undef */
// jQuery объявлена глобально вебпаком
import './Checkbox_type_default.scss';
import initCheckboxes from '../../CheckboxCommon';

initCheckboxes('.checkbox__hiddenButton_type_default', {
  icon: 'checkbox__button checkbox__button_type_default',
  iconSpace: 'checkbox__iconSpace checkbox__iconSpace_type_default',
});

export default function initDefaultCheckboxes() {
  const $defaultCheckboxes = $('.checkbox__button_type_default');
  $defaultCheckboxes.text('check');
}
