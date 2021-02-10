import 'air-datepicker';
import initInputs from '../input/init';
import { parseAttrToDate } from '../../common/functions';

class DatePicker {
  static wideClass = 'date-picker__calendar_wide';

  $confirmButton = $('<button></button>', {
    text: 'Применить', 'data-action': 'hide', class: 'date-picker__confirm-button',
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
    this.isExpanded = !this.isExpanded;
  }

  _handleDocumentClick = (event) => {
    const isTargetInCalendar = this.isElementInCalendar(event.target);
    const isTargetInDatePicker = $.contains(this.$datePicker[0], event.target);
    const isTargetInside = isTargetInDatePicker || isTargetInCalendar;

    if (!isTargetInside && !this.isDatesChanged) {
      this.isExpanded = false;
    }
  }

  _initPlugin() {
    this.datePickerPlugin.update({
      onShow: (inst, isAnimationEnded) => {
        if (!isAnimationEnded) this.input.expand();
      },
      onHide: (inst, isAnimationEnded) => {
        if (!isAnimationEnded) {
          this.input.collapse();
          this.isDatesChanged = false;
        }
      },
      onSelect: (formattedDate) => {
        this.input.setText(formattedDate);
        this.isDatesChanged = true;
      },
      todayButton: false,
    });
  }

  _initExpandableEvents() {
    this._initPlugin();
    this.input.addClickCallback(this._handleInputClick);
    $(document).on('click.datePicker', this._handleDocumentClick);
  }

  _initDatePicker() {
    const initDates = this.getInitDates();

    this.datePickerPlugin = this.input.$control.datepicker({
      startDate: initDates?.length ? initDates[0] : null,
      classes: this.isInline ? DatePicker.wideClass : 'date-picker__calendar_narrow',
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
        days: '<span class="date-picker__title">MM yyyy</span>',
        months: '<span class="date-picker__title">yyyy</span>',
        years: '<span class="date-picker__title">yyyy1 - yyyy2</span>',
      },
      prevHtml: '<span>arrow_back</span>',
      nextHtml: '<span>arrow_forward</span>',
    }).data('datepicker');
    this.$buttonsContainer = this.datePickerPlugin.$datepicker.find('.datepicker--buttons');

    this._createConfirmButton();
    this.datePickerPlugin.selectDate(initDates);
  }

  _createConfirmButton() {
    const $airDatepickerButtonWrap = $('<span></span>', { class: 'datepicker--button' });
    $airDatepickerButtonWrap.append(this.$confirmButton);
    this.$buttonsContainer.append($airDatepickerButtonWrap);
  }
}

export default DatePicker;
