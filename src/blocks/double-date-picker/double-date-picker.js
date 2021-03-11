import initDatepickers from '../date-picker/init';
import { parseAttrToDate } from '../../common/functions';
import initInputs from '../input/init';

class TwoCalendarDatepicker {
  $doubleDatePicker;

  $firstDatePicker;

  $secondDatePicker;

  datepicker;

  firstInput;

  secondInput;

  activeInput;

  isExpanded;

  isDateSelected;

  selectedDates;

  selectCallback = [];

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initProperties();
    this._initEvents();
    this._initDoubleDatePicker();
  }

  addSelectCallback(callback) {
    this.selectCallback.push(callback);
  }

  getSelectedDates = () => this.datepicker.getSelectedDates();

  _initElements(rootElement) {
    this.$doubleDatePicker = $(rootElement);
    this.$firstDatePicker = this.$doubleDatePicker.find('.js-double-date-picker__first-date-picker');
    this.$secondDatePicker = this.$doubleDatePicker.find('.js-double-date-picker__second-date-picker');
  }

  _initProperties() {
    this.datepicker = initDatepickers(this.$firstDatePicker);
    this.firstInput = initInputs(this.$firstDatePicker);
    this.secondInput = initInputs(this.$secondDatePicker);
  }

  _initDoubleDatePicker() {
    this.datepicker.updatePluginForTwoInputs();
    this._setPluginInitialDates();
  }

  _initEvents() {
    $(document).on('click.doubleDatePicker', this._handleDocumentClick);
    this.datepicker.removeInputClickHandler();
    this.datepicker.addOnConfirmButtonClick(this._handleDatepickerConfirmButtonClick);
    this._addInputsOnClick();
    this._updateDatepickerEvents();
  }

  _addInputsOnClick() {
    this.firstInput.addClickCallback(this._handleInputsClick);
    this.secondInput.addClickCallback(this._handleInputsClick);
  }

  _getActiveInputIndex() {
    if (!this.activeInput) return null;

    if (this.activeInput === this.firstInput) return 0;

    return 1;
  }

  _handleDatepickerSelect = (formattedDate, dates) => {
    const activeInputIndex = this._getActiveInputIndex();

    let datesToPass = [];
    if (dates.length === 1) {
      [datesToPass[activeInputIndex]] = dates;
    } else {
      datesToPass = [...dates];
    }

    this._setInputsDates({ firstDate: datesToPass[0], secondDate: datesToPass[1] });
    this.isDateSelected = true;
    this.datepicker.setClearButtonVisibility(!!dates.length);

    this.selectCallback.forEach((callback) => { callback(this); });
  };

  _handleDatepickerShow = (inst, isAnimationEnded) => {
    if (!isAnimationEnded) {
      this._focusInputs();
      this.activeInput?.expand();
    }
  }

  _handleDatepickerHide = (instance, isAnimationEnded) => {
    if (!isAnimationEnded) {
      this._unfocusInputs();
      this.activeInput?.collapse();
    }
  }

  _updateDatepickerEvents() {
    this.datepicker.updatePlugin({
      onSelect: this._handleDatepickerSelect,
      onShow: this._handleDatepickerShow,
      onHide: this._handleDatepickerHide,
      onChangeView: this._handleDatepickerChangeView,
      onChangeMonth: this._handleDatepickerChangeView,
      onChangeYear: this._handleDatepickerChangeView,
      onChangeDecade: this._handleDatepickerChangeView,
    });
  }

  _handleDatepickerConfirmButtonClick = () => {
    this.isExpanded = false;
  }

  _handleDatepickerChangeView = () => {
    this.isDateSelected = true;
  }

  _handleInputsClick = (input) => {
    const isSameInput = input === this.activeInput;
    if (!isSameInput) this._changeActiveInput(input);

    if (this.isExpanded && isSameInput) {
      this.datepicker.hideCalendar();
      this.isExpanded = false;
    } else {
      this.datepicker.showCalendar();
      this.isExpanded = true;
    }
  }

  _handleDocumentClick = (event) => {
    const isTargetInCalendar = this.datepicker.isElementInCalendar(event.target);
    const isTargetInDatepickers = $.contains(this.$doubleDatePicker[0], event.target);
    const isTargetInside = isTargetInCalendar || isTargetInDatepickers;

    if (isTargetInside || this.isDateSelected) {
      this.isDateSelected = false;
      return;
    }
    if (this.isExpanded) this.datepicker.hideCalendar();
    this.isExpanded = false;
  }

  _changeActiveInput(input) {
    this.activeInput?.collapse();
    input.expand();
    this.activeInput = input;
  }

  _focusInputs = () => {
    this.firstInput.focus();
    this.secondInput.focus();
  }

  _unfocusInputs = () => {
    this.firstInput.unfocus();
    this.secondInput.unfocus();
  }

  _getInitialDates() {
    return {
      firstDate: parseAttrToDate(this.$doubleDatePicker.attr('data-first-date')) ?? null,
      secondDate: parseAttrToDate(this.$doubleDatePicker.attr('data-second-date')) ?? null,
    };
  }

  _setPluginInitialDates() {
    const initDates = this._getInitialDates(this.$doubleDatePicker);
    this.activeInput = initDates?.firstDate ? this.firstInput : this.secondInput;
    this.datepicker.selectDate([initDates.firstDate, initDates.secondDate]);

    this.datepicker.setClearButtonVisibility(!!initDates?.length);
  }

  _setInputsDates(dates) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

    this.firstInput.setText(dates.firstDate?.toLocaleDateString('ru-RU', options) ?? 'ДД.ММ.ГГГГ');
    this.secondInput.setText(dates.secondDate?.toLocaleDateString('ru-RU', options) ?? 'ДД.ММ.ГГГГ');
  }
}

export default TwoCalendarDatepicker;
