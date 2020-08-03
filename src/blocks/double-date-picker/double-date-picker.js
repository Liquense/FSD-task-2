import Datepicker from '../date-picker/date-picker';
import initDatepickers from '../date-picker/init';

class TwoCalendarDatepicker {
  isSecondAssignStarted = false;

  $twoCalendarDatePicker;

  $firstDatePicker;

  $secondDatePicker;

  firstDatePicker;

  secondDatePicker;

  selectedDates;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initDatepickers();
    this._initTwoCalendarDatePicker();
  }

  getSelectedDates = () => this.firstDatePicker.datePickerPlugin.selectedDates;

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

  _initTwoCalendarDatePicker() {
    if (!this.firstDatePicker || !this.secondDatePicker) return;

    const wideDatepickerClass = 'date-picker__calendar_wide';
    this.firstDatePicker.datePickerPlugin.update({
      position: 'bottom left',
      classes: wideDatepickerClass,
      dateFormat: '',
    });
    this.secondDatePicker.datePickerPlugin.update({
      position: 'bottom right',
      classes: wideDatepickerClass,
      dateFormat: '',
    });

    this._addDatepickerOnSelectHandler(
      this.firstDatePicker, this.secondDatePicker, 0,
    );
    this._addDatepickerOnSelectHandler(
      this.secondDatePicker, this.firstDatePicker, 1,
    );

    const initDates = this._getInitialDates(this.$twoCalendarDatePicker);
    this._setInitialDates(initDates);
  }

  _handleOnSelect(formattedDate, datePicker, otherDatepicker, number) {
    if (this.isSecondAssignStarted) return;

    const { datePickerPlugin } = datePicker;
    const otherNumber = 1 - number;
    const newDates = datePickerPlugin.selectedDates;
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

    this._preventRecursiveDatesUpdate();
    TwoCalendarDatepicker._updateOtherDatepickerDates(otherDatepicker, newDates);
    this._resumeRecursiveDatesUpdate();

    if (newDates.length > 1) {
      datePicker.$inputControl.val(newDates[number].toLocaleDateString('ru-RU', options));
      otherDatepicker.$inputControl.val(newDates[otherNumber].toLocaleDateString('ru-RU', options));
    }

    $(datePicker.$inputControl).change();
  }

  _preventRecursiveDatesUpdate() { this.isSecondAssignStarted = true; }

  _resumeRecursiveDatesUpdate() { this.isSecondAssignStarted = false; }

  static _updateOtherDatepickerDates(otherDatepicker, selectedDates) {
    const otherDatepickerPlugin = otherDatepicker.datePickerPlugin;
    otherDatepickerPlugin.clear();
    otherDatepickerPlugin.selectDate(selectedDates);
    if (selectedDates.length < 2) { otherDatepicker.$inputControl.val('ДД.ММ.ГГГГ'); }
  }

  _addDatepickerOnSelectHandler(datePicker, otherDatepicker, number) {
    datePicker.datePickerPlugin.update({
      onSelect: (formattedDate) => {
        this._handleOnSelect(
          formattedDate, datePicker,
          otherDatepicker, number,
        );
      },
    });
  }

  _getInitialDates() {
    const dates = {};

    if (this.$twoCalendarDatePicker.attr('data-first-date')) {
      dates.firstDate = Datepicker.parseAttrToDate(
        this.$twoCalendarDatePicker.attr('data-first-date'),
      );
    }
    if (this.$twoCalendarDatePicker.attr('data-second-date')) {
      dates.secondDate = Datepicker.parseAttrToDate(
        this.$twoCalendarDatePicker.attr('data-second-date'),
      );
    }

    return dates;
  }

  _setInitialDates(initDates) {
    if (initDates.firstDate) {
      this.firstDatePicker.datePickerPlugin.selectDate(initDates.firstDate);
    }
    if (initDates.secondDate) {
      this.secondDatePicker.datePickerPlugin.selectDate(initDates.secondDate);
    }
  }
}

export default TwoCalendarDatepicker;
