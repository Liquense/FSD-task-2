import DatepickerBlock from '../datepicker-block/datepicker-block';
import initDatepickers from '../datepicker-block/init';

class TwoCalendarDatepicker {
  isSecondAssignStarted = false;

  $twoCalendarDatepicker;

  $firstDatepicker;

  $secondDatepicker;

  firstDatepicker;

  secondDatepicker;

  selectedDates;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initDatepickers();
    this._initTwoCalendarDatePicker();
  }

  getSelectedDates = () => this.firstDatepicker.datepickerPlugin.selectedDates;

  _initElements(rootElement) {
    this.$twoCalendarDatepicker = $(rootElement);
    this.$firstDatepicker = this.$twoCalendarDatepicker
      .find('.js-double-date-picker__first-datepicker');
    this.$secondDatepicker = this.$twoCalendarDatepicker
      .find('.js-double-date-picker__second-datepicker');
  }

  _initDatepickers() {
    this.firstDatepicker = initDatepickers(this.$firstDatepicker);
    this.secondDatepicker = initDatepickers(this.$secondDatepicker);
  }

  _initTwoCalendarDatePicker() {
    if (!this.firstDatepicker || !this.secondDatepicker) return;

    this.firstDatepicker.datepickerPlugin.update({
      position: 'bottom left',
      classes: 'datepicker-block__calendar_wide',
      dateFormat: '',
    });
    this.secondDatepicker.datepickerPlugin.update({
      position: 'bottom right',
      classes: 'datepicker-block__calendar_wide',
      dateFormat: '',
    });

    this._addDatepickerOnSelectHandler(
      this.firstDatepicker, this.secondDatepicker, 0,
    );
    this._addDatepickerOnSelectHandler(
      this.secondDatepicker, this.firstDatepicker, 1,
    );

    const initDates = this._getInitialDates(this.$twoCalendarDatepicker);
    this._setInitialDates(initDates);
  }

  _handleOnSelect(formattedDate, datepicker, otherDatepicker, number) {
    if (this.isSecondAssignStarted) return;

    const { datepickerPlugin } = datepicker;
    const otherNumber = 1 - number;
    const newDates = datepickerPlugin.selectedDates;
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

    this._preventRecursiveDatesUpdate();
    TwoCalendarDatepicker._updateOtherDatepickerDates(otherDatepicker, newDates);
    this._resumeRecursiveDatesUpdate();

    if (newDates.length > 1) {
      datepicker.$inputControl.val(newDates[number].toLocaleDateString('ru-RU', options));
      otherDatepicker.$inputControl.val(newDates[otherNumber].toLocaleDateString('ru-RU', options));
    }

    // вызов события вручную, поскольку автоматически этого не происходит, а оно используется
    $(datepicker.$inputControl).change();
  }

  _preventRecursiveDatesUpdate() { this.isSecondAssignStarted = true; }

  _resumeRecursiveDatesUpdate() { this.isSecondAssignStarted = false; }

  static _updateOtherDatepickerDates(otherDatepicker, selectedDates) {
    const otherDatepickerPlugin = otherDatepicker.datepickerPlugin;
    otherDatepickerPlugin.clear();
    otherDatepickerPlugin.selectDate(selectedDates);
    if (selectedDates.length < 2) { otherDatepicker.$inputControl.val('ДД.ММ.ГГГГ'); }
  }

  _addDatepickerOnSelectHandler(datepicker, otherDatepicker, number) {
    datepicker.datepickerPlugin.update({
      onSelect: (formattedDate) => {
        this._handleOnSelect(
          formattedDate, datepicker,
          otherDatepicker, number,
        );
      },
    });
  }

  _getInitialDates() {
    const dates = {};

    if (this.$twoCalendarDatepicker.attr('data-first-date')) {
      dates.firstDate = DatepickerBlock.parseAttrToDate(
        this.$twoCalendarDatepicker.attr('data-first-date'),
      );
    }
    if (this.$twoCalendarDatepicker.attr('data-second-date')) {
      dates.secondDate = DatepickerBlock.parseAttrToDate(
        this.$twoCalendarDatepicker.attr('data-second-date'),
      );
    }

    return dates;
  }

  _setInitialDates(initDates) {
    if (initDates.firstDate) {
      this.firstDatepicker.datepickerPlugin.selectDate(initDates.firstDate);
    }
    if (initDates.secondDate) {
      this.secondDatepicker.datepickerPlugin.selectDate(initDates.secondDate);
    }
  }
}

export default TwoCalendarDatepicker;
