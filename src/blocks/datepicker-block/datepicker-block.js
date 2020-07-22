/* eslint-disable no-undef */
import 'air-datepicker';
import arrowBack from '../../assets/images/arrow-back.svg';
import initArrows from '../arrow/init';

class DatepickerBlock {
  $confirmButton = $('<button></button>', {
    text: 'Применить', 'data-action': 'hide', class: 'datepicker-block__confirm-button',
  });

  $datepicker;

  $inputWrap;

  $inputControl;

  $inputLabel;

  $buttonsContainer;

  arrow;

  datepickerPlugin;

  isInline;

  constructor(element) {
    this._initProperties(element);
    this._initDatepicker();
    if (!this.isInline) this._initExpandableEvents();

    const initDates = this.getInitDates();
    this.datepickerPlugin.selectDate(initDates);
  }

  static parseAttrToDate(attrDate) {
    const dateParts = attrDate.split('.');
    const day = dateParts[0];
    const month = dateParts[1];
    const year = dateParts[2];
    const dateString = `${year}-${month}-${day}`;

    return new Date(dateString);
  }

  _initProperties(element) {
    this.$datepicker = $(element);
    this.$inputWrap = this.$datepicker.find('.js-datepicker-block__input-wrap');
    this.$inputControl = this.$inputWrap.find('.js-input__control');
    this.$inputLabel = this.$inputWrap.find('.js-input__title');
    this.isInline = this.$inputWrap.hasClass('js-datepicker-block__input-wrap_inline');
    this.arrow = initArrows(this.$datepicker);
  }

  getInitDates() {
    const dates = [];

    if (this.$inputWrap.attr('data-first-date')) {
      dates.push(DatepickerBlock.parseAttrToDate(this.$inputWrap.attr('data-first-date')));
    }

    if (this.$inputWrap.attr('data-second-date')) {
      dates.push(DatepickerBlock.parseAttrToDate(this.$inputWrap.attr('data-second-date')));
    }

    return dates.length === 0 ? undefined : dates;
  }

  _addClickHandler() {
    this.$inputControl.click((event) => {
      const $controlWrap = $(event.target).parent();

      if (this.arrow.getExpandState($controlWrap)) {
        this.datepickerPlugin.hide();
      } else {
        this.datepickerPlugin.show();
      }
    });
  }

  static _disableLabelClicks(event) {
    event.preventDefault();
  }

  _setExpandArrowEventHandlers() {
    const { arrow, $inputLabel } = this;

    this.datepickerPlugin.update({
      onHide(inst, isAnimationEnded) {
        const $controlWrap = $(inst.el).parent();

        if (isAnimationEnded) arrow.handleArrowCollapsing($controlWrap);

        $inputLabel.unbind('click', DatepickerBlock._disableLabelClicks);
      },
      onShow(inst) {
        const $controlWrap = $(inst.el).parent();
        arrow.handleArrowExpanding($controlWrap);

        $inputLabel.click(DatepickerBlock._disableLabelClicks);
      },
      todayButton: false,
    });
  }

  _initExpandableEvents() {
    this._setExpandArrowEventHandlers();

    if (this.datepickerPlugin) {
      this._addClickHandler();
    }
  }

  _initDatepicker() {
    if (this.$inputControl.data('datepicker')) return;

    this.datepickerPlugin = this.$inputControl.datepicker({
      range: true,
      inline: this.isInline,
      clearButton: true,
      dateFormat: 'd M',
      multipleDatesSeparator: ' - ',
      showEvent: '',
      position: 'bottom center',
      offset: 5,
      navTitles: {
        days: '<span class="datepicker-block__title">MM yyyy</span>',
        months: '<span class="datepicker-block__title">yyyy</span>',
        years: '<span class="datepicker-block__title">yyyy1 - yyyy2</span>',
      },
      prevHtml: `<img src="${arrowBack}" alt="назад"">`,
      nextHtml: `<img src="${arrowBack}" alt="назад" style="transform: scale(-1, 1)">`,
      onSelect: (formattedDate) => {
        this.$inputControl.val(formattedDate.toLowerCase());
      },
    }).data('datepicker');
    this.$buttonsContainer = this.datepickerPlugin.$datepicker.find('.datepicker--buttons');

    this._createConfirmButton();
  }

  _createConfirmButton() {
    const $airDatepickerButtonWrap = $('<span></span>', { class: 'datepicker--button' });
    this.$buttonsContainer.append($airDatepickerButtonWrap);
    $airDatepickerButtonWrap.append(this.$confirmButton);
  }
}

export default DatepickerBlock;
