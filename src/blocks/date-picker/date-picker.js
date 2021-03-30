import 'air-datepicker';

import { parseAttrToDate } from '../../utils/functions';
import initInputs from '../input/init';
import './air-datepicker.scss';

class DatePicker {
  static wideClass = '-wide-';

  $confirmButton = $('<button></button>', {
    text: 'Применить', 'data-action': 'hide', class: 'datepicker--button',
  });

  $datePicker;

  $buttonsContainer;

  datePickerPlugin;

  input;

  isInline;

  isExpanded;

  isDatesChanged;

  constructor(element) {
    this._initElements(element);
    this._initProperties();
    this._initDatePicker();
    if (!this.isInline) this._initExpandableEvents();

    this.datePickerPlugin.selectDate(this.getInitDates());
  }

  addOnConfirmButtonClick(handler) {
    this.$confirmButton.on('click.datepicker', handler);
  }

  getSelectedDates() {
    return this.datePickerPlugin.selectedDates;
  }

  getInitDates() {
    const dates = [];

    if (this.$datePicker.attr('data-first-date')) {
      dates.push(parseAttrToDate(this.$datePicker.attr('data-first-date')));
    }

    if (this.$datePicker.attr('data-second-date')) {
      dates.push(parseAttrToDate(this.$datePicker.attr('data-second-date')));
    }

    return dates.length === 0 ? null : dates;
  }

  updatePlugin(parameters) {
    this.datePickerPlugin.update(parameters);
  }

  selectDate(date) {
    this.datePickerPlugin.selectDate(date);
  }

  selectDates(dates) {
    this.datePickerPlugin.clear();
    this.datePickerPlugin.selectDate(dates);
  }

  setText(text) {
    this.input.setText(text);
  }

  mimicCurrentDay(dayNum) {
    const $datepickerCells = this.$datePicker.find('.datepicker--cell.datepicker--cell-day');
    $datepickerCells.each((index, element) => {
      const $datepickerCell = $(element);
      if ($datepickerCell.attr('data-date') === dayNum.toString()) {
        $datepickerCell.addClass('-current-');
      }
    });
  }

  hideCalendar() {
    this.datePickerPlugin.hide();
  }

  showCalendar() {
    this.datePickerPlugin.show();
  }

  getCalendarElement() {
    return this.datePickerPlugin.$datepicker[0];
  }

  isElementInCalendar(element) {
    return $.contains(this.getCalendarElement(), element);
  }

  removeInputClickHandler() {
    this.input.removeClickCallback(this._handleInputClick);
  }

  updatePluginForTwoInputs() {
    this.datePickerPlugin.update({
      position: 'bottom left',
      classes: DatePicker.wideClass,
      dateFormat: '',
    });
  }

  setClearButtonVisibility(isVisible) {
    const $clearButton = this._getClearButton();
    if (!isVisible) {
      $clearButton.addClass('-invisible-');
    } else {
      $clearButton.removeClass('-invisible-');
    }
  }

  _initElements(element) {
    this.$datePicker = $(element);
  }

  _initProperties() {
    this.isInline = this.$datePicker.hasClass('date-picker_inline');
    this.input = initInputs(this.$datePicker);
  }

  _handleInputClick = () => {
    if (this.isExpanded) {
      this.datePickerPlugin.hide();
    } else {
      this.datePickerPlugin.show();
    }
  }

  _handleDateSelect = (formattedDate, date) => {
    this.input.setText(formattedDate);
    this.isDatesChanged = true;

    this.setClearButtonVisibility(Boolean(date.length));
  }

  _initPlugin() {
    this.datePickerPlugin.update({
      todayButton: false,
      onShow: (inst, isAnimationEnded) => {
        if (!isAnimationEnded) {
          this.input.expand();
        } else {
          this.isExpanded = true;
        }
      },
      onHide: (inst, isAnimationEnded) => {
        if (!isAnimationEnded) {
          this.input.collapse();
          this.isDatesChanged = false;
        } else {
          this.isExpanded = false;
        }
      },
    });
  }

  _initExpandableEvents() {
    this._initPlugin();
    this.input.addClickCallback(this._handleInputClick);
  }

  _initDatePicker() {
    const initDates = this.getInitDates();

    this.datePickerPlugin = this.input.$control.datepicker({
      startDate: initDates?.length ? initDates[0] : null,
      classes: this.isInline ? DatePicker.wideClass : '',
      range: true,
      inline: this.isInline,
      clearButton: true,
      dateFormat: 'd M',
      multipleDatesSeparator: ' - ',
      multipleDates: true,
      showEvent: '',
      position: 'bottom center',
      offset: 6,
      minDate: new Date(),
      navTitles: {
        days: 'MM yyyy',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2',
      },
      prevHtml: '<span>arrow_back</span>',
      nextHtml: '<span>arrow_forward</span>',
      onSelect: this._handleDateSelect,
    }).data('datepicker');
    this.$buttonsContainer = this.datePickerPlugin.$datepicker.find('.datepicker--buttons');

    this._createConfirmButton();
  }

  _getClearButton() {
    return this.datePickerPlugin.$datepicker.find('.datepicker--button[data-action="clear"]');
  }

  _createConfirmButton() {
    this.$buttonsContainer.append(this.$confirmButton);
  }
}

export default DatePicker;
