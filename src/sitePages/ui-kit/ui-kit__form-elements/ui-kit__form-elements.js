/* eslint-disable no-undef */
// jquery подключена вебпаком
import '../../../blocks/Button/button';
import '../../../blocks/Input/input';
import '../../../blocks/Slider/slider';
import { initTwoCalendarPicker } from '../../../blocks/twoCalendarRangePicker/twoCalendarRangePicker';
import '../../../blocks/List/list';
import '../../../blocks/RateButton/RateButton';
import '../../../blocks/Pagination/Pagination';
import '../../../blocks/Comment/Comment';
import Checkbox from '../../../blocks/Checkbox/Checkbox';
import { initDatepickerInput } from '../../../blocks/Input/_type/_datepicker/input_type_datepicker';
import initDropdownInput from '../../../blocks/Input/_type/_dropdown/input__list_type_dropdown';

import './ui-kit__form-elements.scss';
import initExpandableList from '../../../blocks/List/_expandable/list_expandable';

Checkbox.initDefault();
Checkbox.initRadio();
Checkbox.initToggle();
Checkbox.initLike();

const $datepickers = $('.input_type_datepicker');
$datepickers.each(initDatepickerInput);

const $twoCalendarPickers = $('.twoCalendarRangePicker');
$twoCalendarPickers.each(initTwoCalendarPicker);

const $dropdowns = $('.input_type_dropdown');
$dropdowns.each(initDropdownInput);

const $expandableLists = $('.list_expandable');
$expandableLists.each(initExpandableList);
