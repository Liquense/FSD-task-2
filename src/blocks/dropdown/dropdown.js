import { ruDeclination } from '../../common/functions';
import initSpinners from '../spinner/init';
import initInputs from '../input/init';
import initArrows from '../arrow/init';

class Dropdown {
  $dropdown;

  $listWrapper;

  $buttonsContainer;

  $clearButton;

  $confirmButton;

  $list;

  $rows;

  arrow;

  unifiedDeclinations;

  input;

  isOpened;

  isAlwaysOpened;

  isPure;

  isUnified;

  areValuesAccepted = true;

  rows;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initProperties();
    this._initEvents();
  }

  static _getVisibleClass() { return 'dropdown__list-wrapper_visible'; }

  _updateOldValues() {
    this.rows.forEach((row) => { row.oldValue = row.spinner.getValue(); });
  }

  _initElements(rootElement) {
    this.$dropdown = $(rootElement);
    this.$listWrapper = this.$dropdown.find('.js-dropdown__list-wrapper');
    this.$buttonsContainer = this.$dropdown.find('.js-dropdown__buttons-container');
    this.$clearButton = this.$dropdown.find('.js-dropdown__clear-button');
    this.$confirmButton = this.$dropdown.find('.js-dropdown__confirm-button');
    this.$list = this.$listWrapper.find('.js-dropdown__list');
    this.$rows = this.$listWrapper.find('.js-dropdown__list-row');
  }

  _initEvents() {
    this._addClearButtonEvents();
    this._addConfirmButtonEvents();
    this._addDropdownSpinnersEvents();
    this._addDocumentEvents();
    this._addDropdownInputEvents();
  }

  _addClearButtonEvents() {
    this.$clearButton.on('click.dropdown', this._handleClearButtonClick);
  }

  _handleClearButtonClick = () => {
    this._clearSpinnersValues();
    this._handleConfirmButtonClick();
    this._updateInputText();
  }

  _addConfirmButtonEvents() {
    this.$confirmButton.on('click.dropdown', this._handleConfirmButtonClick);
  }

  _handleConfirmButtonClick = () => {
    this._toggle(true);

    this.areValuesAccepted = true;
    this._updateOldValues();

    this._updateControlsVisibility();
  }

  _addDropdownSpinnersEvents() {
    this.rows.forEach((row) => {
      row.spinner.addAfterSpinCallback((event, ui) => { this._handleSpinnerSpin(ui, row); });
    });
  }

  _handleSpinnerSpin = (ui, row) => {
    row.value = ui.value;
    this._updateVisuals();
  }

  _addDocumentEvents() {
    $(document).on('click.dropdown', this._handleDocumentClick);
  }

  _handleDocumentClick = (event) => {
    const clickedElement = $(event.target).get(0);

    if ($.contains(this.$dropdown.get(0), clickedElement)) return;
    if (!this.isOpened) return;

    this._toggle();
  }

  _addDropdownInputEvents() {
    this.input.addClickCallback(this._handleInputClick);
  }

  _handleInputClick = () => {
    this._toggle();
  }

  _rollback() {
    this._setSpinnerValues(this.rows.map(({ oldValue }) => oldValue));

    this._updateVisuals();
  }

  _initProperties() {
    this.arrow = initArrows(this.$dropdown);
    this.input = initInputs(this.$dropdown);
    this.rows = this._getRows();

    this.isOpened = this.$listWrapper.hasClass(Dropdown._getVisibleClass());
    this.isPure = !this.$dropdown.hasClass('dropdown_pure');
    this.isUnified = this.$list.hasClass('dropdown__list_unified');
    this.areValuesAccepted = !this.$dropdown.hasClass('dropdown_unaccepted');
    this.isAlwaysOpened = this.$dropdown.hasClass('dropdown_opened');

    this.unifiedDeclinations = this.$dropdown.attr('data-unified-caption') || '';

    if (this.isAlwaysOpened) {
      this.$listWrapper.toggleClass(Dropdown._getVisibleClass());
      this.arrow.expand();
    }

    this._updateOldValues();
    this._updateVisuals();
    this.$listWrapper.position({
      my: 'center',
      at: 'center',
      of: this.input.$control,
    });
  }

  _getRows() {
    return $.map(this.$rows, (row) => {
      const $row = $(row);
      const $rowText = $(row).find('.js-dropdown__list-row-text');
      const spinner = initSpinners(row);

      return {
        $row,
        declinations: $rowText.attr('data-declinations') || '',
        $rowText,
        spinner,
        isSeparate: $rowText.attr('data-is-separate'),
        alwaysVisible: $rowText.attr('data-always-visible'),
        value: spinner.getValue(),
      };
    });
  }

  _toggle(valuesAccepted) {
    if (this.isAlwaysOpened) return;

    if (this.isOpened && !valuesAccepted) this._rollback();
    this.$listWrapper.toggleClass(Dropdown._getVisibleClass());
    this.isOpened = !this.isOpened;
    this.input.toggleFocus();
    this.arrow.toggleExpandState();
  }

  _areAllValuesZero() {
    return !this.rows.some(({ value }) => parseInt((value), 10) !== 0);
  }

  _createCaption() {
    return `${this._createUnifiedCaption()}, ${this._createSeparatedCaption()}`
      .replace(/^(, )|(, )$/g, '').trim();
  }

  _createUnifiedCaption() {
    const sum = this.rows.reduce(
      (accumulator, { value, isSeparate }) => (
        accumulator + (isSeparate ? 0 : parseInt(value, 10))),
      0,
    );

    return sum
      ? `${sum} ${ruDeclination(sum, this.unifiedDeclinations)}`
      : '';
  }

  _createSeparatedCaption() {
    return this.rows.reduce(
      (accumulator, {
        value, declinations, isSeparate, alwaysVisible,
      }) => (
        (isSeparate && (value || alwaysVisible))
          ? `${accumulator}${value} ${ruDeclination(value, declinations)}, ` : accumulator
      ),
      '',
    );
  }

  _createInputText() {
    if (this._areAllValuesZero()) return '';

    return this._createCaption();
  }

  _updateInputText() {
    this.input.setText(this._createInputText());
  }

  _areValuesEqual() {
    return !this.rows.some(({ value, oldValue }) => value !== oldValue);
  }

  _updateControlsVisibility() {
    const clearVisibleClass = 'dropdown__clear-button_visible';
    const confirmVisibleClass = 'dropdown__confirm-button_visible';
    const containerVisibleClass = 'dropdown__buttons-container_visible';

    const areEmpty = this._areAllValuesZero();
    if (areEmpty) {
      this.$clearButton.removeClass(clearVisibleClass);
    } else {
      this.$clearButton.addClass(clearVisibleClass);
    }

    const areEqual = this._areValuesEqual();
    if (areEqual && this.areValuesAccepted) {
      this.$confirmButton.removeClass(confirmVisibleClass);
    } else {
      this.$confirmButton.addClass(confirmVisibleClass);
    }

    const hasClearVisibleClass = this.$clearButton.hasClass(clearVisibleClass);
    const hasConfirmVisibleClass = this.$confirmButton.hasClass(confirmVisibleClass);
    const areSomeControlsVisible = hasClearVisibleClass || hasConfirmVisibleClass;
    if (areSomeControlsVisible && this.isPure) {
      this.$buttonsContainer.addClass(containerVisibleClass);
    } else {
      this.$buttonsContainer.removeClass(containerVisibleClass);
    }
  }

  _setSpinnerValues(valuesToSet) {
    this.rows.forEach((row, i) => {
      const valuesIsArray = Array.isArray(valuesToSet);
      const valueToSet = valuesIsArray ? valuesToSet[i] : valuesToSet;

      row.value = valueToSet;
      row.spinner.setValue(valueToSet);
      row.spinner.triggerSpin();
    });
  }

  _clearSpinnersValues() {
    this._setSpinnerValues(0);
  }

  _updateVisuals() {
    this._updateControlsVisibility();
    this._updateInputText();
  }
}

export default Dropdown;
