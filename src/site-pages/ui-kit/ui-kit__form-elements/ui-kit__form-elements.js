/* eslint-disable no-undef */
// jquery подключена вебпаком
import Checkbox from '../../../blocks/checkbox/checkbox';
import {
  initTwoCalendarPicker,
} from '../../../blocks/two-calendar-range-picker/two-calendar-range-picker';
import {
  initDatepickerInputs,
} from '../../../blocks/datepicker/datepicker';
import {
  initDropdowns,
} from '../../../blocks/dropdown/dropdown';
import {
  initExpandableList,
} from '../../../blocks/list/list';

Checkbox.initDefault();
Checkbox.initRadio();
Checkbox.initToggle();
Checkbox.initLike();

initDatepickerInputs();

const $twoCalendarPickers = $('.two-calendar-range-picker');
$twoCalendarPickers.each(initTwoCalendarPicker);

initDropdowns();

const $expandableLists = $('.list_expandable');
$expandableLists.each(initExpandableList);
