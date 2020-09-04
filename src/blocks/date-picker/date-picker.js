import 'air-datepicker';
import arrowBack from '../../assets/images/arrow-back.svg';
import initArrows from '../arrow/init';
import initInputs from '../input/init';
import { parseAttrToDate } from '../../common/functions';

class DatePicker {
  static wideClass = 'date-picker__calendar_wide';

  $confirmButton = $('<button></button>', {
    text: 'Применить', 'data-action': 'hide', class: 'date-picker__confirm-button',
  });

  $datePicker;

  $buttonsContainer;

  arrow;

  datePickerPlugin;

  input;

  isInline;

  constructor(element) {
    this._initElements(element);
    this._initProperties();
    this._initDatePicker();
    if (!this.isInline) this._initExpandableEvents();
  }

  getSelectedDates() { return this.datePickerPlugin.selectedDates; }

  getInitDates() {
    const dates = [];

    if (this.$datePicker.attr('data-first-date')) {
      dates.push(parseAttrToDate(this.$datePicker.attr('data-first-date')));
    }

    if (this.$datePicker.attr('data-second-date')) {
      dates.push(parseAttrToDate(this.$datePicker.attr('data-second-date')));
    }

    return dates.length === 0 ? undefined : dates;
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

  _initElements(element) {
    this.$datePicker = $(element);
  }

  _initProperties() {
    this.isInline = this.$datePicker.hasClass('date-picker_inline');
    this.arrow = initArrows(this.$datePicker);
    this.input = initInputs(this.$datePicker);
  }

  _addClickHandler() {
    this.input.addClickCallback(this._handleInputClick);
  }

  _handleInputClick = () => {
    if (this.arrow.isExpanded()) {
      this.datePickerPlugin.hide();
    } else {
      this.datePickerPlugin.show();
    }
  }

  _setPluginEventHandlers() {
    const { arrow, input } = this;

    this.datePickerPlugin.update({
      onHide(inst, isAnimationEnded) {
        const $controlWrap = $(inst.el).parent();

        if (isAnimationEnded) arrow.collapse($controlWrap);

        input.enableLabelClicks();
      },
      onShow(inst, isAnimationEnded) {
        const $controlWrap = $(inst.el).parent();

        if (isAnimationEnded) arrow.expand($controlWrap);

        input.disableLabelClicks();
      },
      todayButton: false,
    });
  }

  _initExpandableEvents() {
    this._setPluginEventHandlers();
    this._addClickHandler();
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
      showEvent: '',
      position: 'bottom center',
      offset: 5,
      navTitles: {
        days: '<span class="date-picker__title">MM yyyy</span>',
        months: '<span class="date-picker__title">yyyy</span>',
        years: '<span class="date-picker__title">yyyy1 - yyyy2</span>',
      },
      prevHtml: `<img src="${arrowBack}" alt="назад"">`,
      nextHtml: `<img src="${arrowBack}" alt="назад" style="transform: scale(-1, 1)">`,
      onSelect: this.input.setText,
    }).data('datepicker');
    this.$buttonsContainer = this.datePickerPlugin.$datepicker.find('.datepicker--buttons');

    this._createConfirmButton();
    this.datePickerPlugin.selectDate(initDates);
  }

  _createConfirmButton() {
    const $airDatepickerButtonWrap = $('<span></span>', { class: 'datepicker--button' });
    this.$buttonsContainer.append($airDatepickerButtonWrap);
    $airDatepickerButtonWrap.append(this.$confirmButton);
  }
}

export default DatePicker;
