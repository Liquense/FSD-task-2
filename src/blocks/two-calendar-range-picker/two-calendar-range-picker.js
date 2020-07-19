/* eslint-disable no-undef */
// jquery подключена вебпаком
import DatepickerBlock from '../datepicker-block/datepicker-block';
import initDatepickers from '../datepicker-block/init';

class TwoCalendarDatepicker {
  isSecondAssignStarted = false;

  $twoCalendarDatepicker;

  $firstDatepicker;

  $secondDatepicker;

  firstDatepicker;

  secondDatepicker;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initDatepickers();
    this._initTwoCalendarDatePicker();
  }

  _initElements(rootElement) {
    this.$twoCalendarDatepicker = $(rootElement);
    this.$firstDatepicker = this.$twoCalendarDatepicker
      .find('.js-two-calendar-range-picker__first-datepicker');
    this.$secondDatepicker = this.$twoCalendarDatepicker
      .find('.js-two-calendar-range-picker__second-datepicker');
  }

  _initDatepickers() {
    this.firstDatepicker = initDatepickers(this.$firstDatepicker);
    this.secondDatepicker = initDatepickers(this.$secondDatepicker);
  }

  _initTwoCalendarDatePicker() {
    if (!this.firstDatepicker || !this.secondDatepicker) return;

    this.firstDatepicker.datepickerPlugin.update({ position: 'bottom left' });
    this.secondDatepicker.datepickerPlugin.update({ position: 'bottom right' });

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
    const otherDatepickerPlugin = otherDatepicker.datepickerPlugin;
    const otherNumber = 1 - number;
    const newDates = datepickerPlugin.selectedDates;
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    // изменение формата даты, чтобы второй календарь ничего не выводил, если дата одна
    if (newDates.length < 2) {
      datepickerPlugin.update({ dateFormat: '' });
      otherDatepickerPlugin.update({ dateFormat: 'ДД.ММ.ГГГГ' });
    }
    // назначение даты второму календарю без влияния на текущий
    this.isSecondAssignStarted = true;
    otherDatepickerPlugin.clear();
    otherDatepickerPlugin.selectDate(datepicker.datepickerPlugin.selectedDates);
    this.isSecondAssignStarted = false;

    if (newDates.length > 1) {
      datepicker.$inputControl.val(newDates[number].toLocaleDateString('ru-RU', options));
      otherDatepicker.$inputControl.val(newDates[otherNumber].toLocaleDateString('ru-RU', options));
    }
    // вызов события вручную, поскольку автоматически этого не происходит
    // (отслеживание изменения в календаре нужно для booking-card)
    $(datepicker.$inputControl).change();
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
      this.firstDatepicker.selectDate(initDates.firstDate);
    }
    if (initDates.secondDate) {
      this.secondDatepicker.selectDate(initDates.secondDate);
    }
  }
}

export default TwoCalendarDatepicker;
