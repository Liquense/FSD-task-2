import initDatepickers from '../date-picker/init';
import { parseAttrToDate } from '../../common/functions';
import DatePicker from '../date-picker/date-picker';

class TwoCalendarDatepicker {
  isSecondAssignStarted = false;

  $twoCalendarDatePicker;

  $firstDatePicker;

  $secondDatePicker;

  firstDatePicker;

  secondDatePicker;

  selectedDates;

  selectCallback = [];

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initDatepickers();
    this._initDoubleDatePicker();
  }

  addSelectCallback(callback) { this.selectCallback.push(callback); }

  getSelectedDates = () => this.firstDatePicker.getSelectedDates();

  _initElements(rootElement) {
    this.$twoCalendarDatePicker = $(rootElement);
    this.$firstDatePicker = this.$twoCalendarDatePicker
      .find('.js-double-date-picker__first-date-picker');
    this.$secondDatePicker = this.$twoCalendarDatePicker
      .find('.js-double-date-picker__second-date-picker');
  }

  _initDatepickers() {
    this.firstDatePicker = initDatepickers(this.$firstDatePicker);
    this.secondDatePicker = initDatepickers(this.$secondDatePicker);
  }

  _initDoubleDatePicker() {
    if (!this.firstDatePicker || !this.secondDatePicker) return;

    this.firstDatePicker.updatePlugin({
      position: 'bottom left',
      classes: DatePicker.wideClass,
      dateFormat: '',
    });
    this.secondDatePicker.updatePlugin({
      position: 'bottom right',
      classes: DatePicker.wideClass,
      dateFormat: '',
    });

    this._addDatepickerOnSelectHandler(this.firstDatePicker, this.secondDatePicker, 0);
    this._addDatepickerOnSelectHandler(this.secondDatePicker, this.firstDatePicker, 1);

    const initDates = this._getInitialDates(this.$twoCalendarDatePicker);
    this._setInitialDates(initDates);
  }

  _handleDatePickerSelect(formattedDate, datePicker, otherDatepicker, number) {
    if (this.isSecondAssignStarted) return;

    const otherNumber = 1 - number;
    const newDates = datePicker.getSelectedDates();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

    this._selectOtherDatepickerDates(otherDatepicker, newDates);

    if (newDates.length > 1) {
      datePicker.setText(newDates[number].toLocaleDateString('ru-RU', options));
      otherDatepicker.setText(newDates[otherNumber].toLocaleDateString('ru-RU', options));
    }

    this.selectCallback.forEach((callback) => callback());
  }

  _selectOtherDatepickerDates(otherDatepicker, selectedDates) {
    this.isSecondAssignStarted = true;

    otherDatepicker.selectDates(selectedDates);
    if (selectedDates.length < 2) { otherDatepicker.setText('ДД.ММ.ГГГГ'); }

    this.isSecondAssignStarted = false;
  }

  _addDatepickerOnSelectHandler(datePicker, otherDatepicker, number) {
    const onDatepickerSelectHandler = (formattedDate) => {
      this._handleDatePickerSelect(
        formattedDate, datePicker,
        otherDatepicker, number,
      );
    };

    datePicker.updatePlugin({
      onSelect: onDatepickerSelectHandler,
    });
  }

  _getInitialDates() {
    const dates = {};

    if (this.$twoCalendarDatePicker.attr('data-first-date')) {
      dates.firstDate = parseAttrToDate(
        this.$twoCalendarDatePicker.attr('data-first-date'),
      );
    }
    if (this.$twoCalendarDatePicker.attr('data-second-date')) {
      dates.secondDate = parseAttrToDate(
        this.$twoCalendarDatePicker.attr('data-second-date'),
      );
    }

    return dates;
  }

  _setInitialDates(initDates) {
    if (initDates.firstDate) {
      this.firstDatePicker.selectDate(initDates.firstDate);
    }
    if (initDates.secondDate) {
      this.secondDatePicker.selectDate(initDates.secondDate);
    }
  }
}

export default TwoCalendarDatepicker;
