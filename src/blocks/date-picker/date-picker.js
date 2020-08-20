import 'air-datepicker';
import arrowBack from '../../assets/images/arrow-back.svg';
import initArrows from '../arrow/init';
import initInputs from '../input/init';
import { parseAttrToDate } from '../../common/functions';

class DatePicker {
  $confirmButton = $('<button></button>', {
    text: 'Применить', 'data-action': 'hide', class: 'date-picker__confirm-button',
  });

  $datePicker;

  $inputWrap;

  $inputControl;

  $inputLabel;

  $buttonsContainer;

  arrow;

  datePickerPlugin;

  isInline;

  constructor(element) {
    this._initElements(element);
    this._initProperties();
    this._initDatepicker();
    if (!this.isInline) this._initExpandableEvents();
  }

  getInitDates() {
    const dates = [];

    if (this.$datePicker.attr('data-first-date')) {
      dates.push(parseAttrToDate(this.$inputWrap.attr('data-first-date')));
    }

    if (this.$datePicker.attr('data-second-date')) {
      dates.push(parseAttrToDate(this.$inputWrap.attr('data-second-date')));
    }

    return dates.length === 0 ? undefined : dates;
  }

  _initElements(element) {
    this.$datePicker = $(element);
    this.$inputWrap = this.$datePicker.find('.js-date-picker__input-wrap');
    this.$inputControl = this.$inputWrap.find('.js-input__control');
    this.$inputLabel = this.$inputWrap.find('.js-input__title');
  }

  _initProperties() {
    this.isInline = this.$inputWrap.hasClass('js-date-picker__input-wrap_inline');
    this.arrow = initArrows(this.$datePicker);
  }

  getInitDates() {
    const dates = [];

    if (this.$inputWrap.attr('data-first-date')) {
      dates.push(Datepicker.parseAttrToDate(this.$inputWrap.attr('data-first-date')));
    }

    if (this.$inputWrap.attr('data-second-date')) {
      dates.push(Datepicker.parseAttrToDate(this.$inputWrap.attr('data-second-date')));
    }

    return dates.length === 0 ? undefined : dates;
  }

  _addClickHandler() {
    this.$inputControl.click((event) => {
      const $controlWrap = $(event.target).parent();

      if (this.arrow.getExpandState($controlWrap)) {
        this.datePickerPlugin.hide();
      } else {
        this.datePickerPlugin.show();
      }
    });
  }

  static _disableLabelClicks(event) {
    event.preventDefault();
  }

  _setExpandArrowEventHandlers() {
    const { arrow, $inputLabel } = this;

    this.datePickerPlugin.update({
      onHide(inst, isAnimationEnded) {
        const $controlWrap = $(inst.el).parent();

        if (isAnimationEnded) arrow.handleArrowCollapsing($controlWrap);

        $inputLabel.unbind('click', Datepicker._disableLabelClicks);
      },
      onShow(inst) {
        const $controlWrap = $(inst.el).parent();
        arrow.handleArrowExpanding($controlWrap);

        $inputLabel.click(Datepicker._disableLabelClicks);
      },
      todayButton: false,
    });
  }

  _initExpandableEvents() {
    this._setExpandArrowEventHandlers();

    if (this.datePickerPlugin) {
      this._addClickHandler();
    }
  }

  _initDatepicker() {
    const initDates = this.getInitDates();

    const addClass = this.isInline ? 'date-picker__calendar_wide' : 'date-picker__calendar_narrow';
    this.datePickerPlugin = this.$inputControl.datepicker({
      startDate: initDates?.length ? initDates[0] : null,
      classes: addClass,
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
      onSelect: (formattedDate) => {
        this.$inputControl.val(formattedDate.toLowerCase());
      },
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

export default Datepicker;
