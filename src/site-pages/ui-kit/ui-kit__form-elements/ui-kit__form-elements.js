/* eslint-disable no-undef */
// jquery подключена вебпаком
import '../../../blocks/button/button';
import '../../../blocks/input/input';
import '../../../blocks/slider/slider';
import '../../../blocks/list/list';
import '../../../blocks/rate-button/rate-button';
import '../../../blocks/pagination/pagination';
import '../../../blocks/comment/comment';
import Checkbox from '../../../blocks/checkbox/checkbox';
import { initTwoCalendarPicker } from '../../../blocks/two-calendar-range-picker/two-calendar-range-picker';
import { initDatepickerInput } from '../../../blocks/input/_type/_datepicker/input_type_datepicker';
import { initDropdownInput } from '../../../blocks/input/_type/_dropdown/__list/input_type_dropdown__list';
import { initExpandableList } from '../../../blocks/list/_expandable/list_expandable';

import './ui-kit__form-elements.scss';

Checkbox.initDefault();
Checkbox.initRadio();
Checkbox.initToggle();
Checkbox.initLike();

const $datepickers = $('.input_type_datepicker');
$datepickers.each(initDatepickerInput);

const $twoCalendarPickers = $('.two-calendar-range-picker');
$twoCalendarPickers.each(initTwoCalendarPicker);

const $dropdowns = $('.input_type_dropdown');
$dropdowns.each(initDropdownInput);

const $expandableLists = $('.list_expandable');
$expandableLists.each(initExpandableList);
