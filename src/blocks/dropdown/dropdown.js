import { ruDeclination } from '../../common/functions';
import initSpinners from '../spinner/init';
import initInputs from '../input/init';
import initArrows from '../arrow/init';

class Dropdown {
  static types = { rooms: 'rooms', customers: 'customers' }

  $dropdown;

  $listWrapper;

  $buttonsContainer;

  $clearButton;

  $confirmButton;

  $list;

  arrow;

  input;

  isOpened;

  isAlwaysOpened = false;

  isPure = false;

  isUnified = false;

  areValuesAccepted = true;

  oldNamesValues = [];

  spinners = [];

  type;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initProperties();
    this._initEvents();
  }

  static _getVisibleClass() { return 'dropdown__list-wrapper_visible'; }

  _getNamesValues() {
    const namesValues = [];

    this.spinners.forEach((spinner) => {
      namesValues.push({ name: spinner.getName(), value: spinner.getValue() });
    });

    return namesValues;
  }

  _initElements(rootElement) {
    this.$dropdown = $(rootElement);
    this.$listWrapper = this.$dropdown.find('.js-dropdown__list-wrapper');
    this.$buttonsContainer = this.$dropdown.find('.js-dropdown__buttons-container');
    this.$clearButton = this.$dropdown.find('.js-dropdown__clear-button');
    this.$confirmButton = this.$dropdown.find('.js-dropdown__confirm-button');
    this.$list = this.$listWrapper.find('.js-dropdown__list');
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
    if (!this.isAlwaysOpened) { this._toggle(); }

    this.areValuesAccepted = true;
    this.oldNamesValues = this._getNamesValues();

    this._updateControlsVisibility();
  }

  _addDropdownSpinnersEvents() {
    this.spinners.forEach((spinner) => {
      spinner.addAfterSpinCallback(this._handleSpinnerSpin);
    });
  }

  _handleSpinnerSpin = () => {
    this._updateVisuals();
  }

  _addDocumentEvents() {
    $(document).on('click.dropdown', this._handleDocumentClick);
  }

  _handleDocumentClick = (event) => {
    const clickedElement = $(event.target).get(0);

    if ($.contains(this.$dropdown.get(0), clickedElement)) return;

    if (this.isOpened) {
      if (!this.isAlwaysOpened) { this._toggle(); }

      this._setSpinnerValues(this.oldNamesValues);
      this._updateVisuals();
    }
  }

  _addDropdownInputEvents() {
    this.input.addClickCallback(this._handleInputClick);
  }

  _handleInputClick = () => {
    if (!this.isAlwaysOpened) { this._toggle(); }

    if (!this.isOpened) {
      this._setSpinnerValues(this.oldNamesValues);
      this._updateVisuals();
    }
  }

  _initProperties() {
    this.arrow = initArrows(this.$dropdown);
    this.input = initInputs(this.$dropdown);
    this.spinners = initSpinners(this.$dropdown);

    this.isOpened = this.$listWrapper.hasClass(Dropdown._getVisibleClass());
    this.areValuesAccepted = !this.$dropdown.hasClass('dropdown_unaccepted');

    this.isAlwaysOpened = this.$dropdown.hasClass('dropdown_opened');
    if (this.isAlwaysOpened) {
      this.$listWrapper.toggleClass(Dropdown._getVisibleClass());
      this.arrow.expand();
    }

    this.isPure = !this.$dropdown.hasClass('dropdown_pure');
    this.oldNamesValues = this._getNamesValues();

    this._getDropdownType();
    this._updateVisuals();

    this.$listWrapper.position({
      my: 'center',
      at: 'center',
      of: this.input.$control,
    });
  }

  _toggle() {
    this.$listWrapper.toggleClass(Dropdown._getVisibleClass());
    this.isOpened = !this.isOpened;
    this.input.toggleFocus();
    this.arrow.toggleExpandState();
  }

  _getDropdownType() {
    const listClassPrefix = 'dropdown__list_';

    if (this.$list.hasClass(`${listClassPrefix}unified`)) { this.isUnified = true; }

    if (this.$list.hasClass(`${listClassPrefix}type_rooms`)) {
      this.type = Dropdown.types.rooms;
    } else if (this.$list.hasClass(`${listClassPrefix}type_customers`)) {
      this.type = Dropdown.types.customers;
    }
  }

  static _selectProperWord(itemsCount, itemName) {
    let result = '';

    switch (itemName.toLowerCase()) {
      case 'спальни':
        result = ruDeclination(itemsCount, 'спал|ьня|ьни|ен');
        break;
      case 'кровати':
        result = ruDeclination(itemsCount, 'кроват|ь|и|ей');
        break;
      case 'ванные комнаты':
        result = `${ruDeclination(itemsCount, 'ванн|ая|ых|ых')} ${
          ruDeclination(itemsCount, 'комнат|а|ы|')}`;
        break;
      case 'гости':
        result = ruDeclination(itemsCount, 'гост|ь|я|ей');
        break;
      case 'младенцы':
        result = ruDeclination(itemsCount, 'младен|ец|ца|цев');
        break;

      default:
    }

    return result;
  }

  _areAllValuesZero() {
    return !this._getNamesValues()?.some((nameValue) => parseInt((nameValue.value), 10) !== 0);
  }

  _createUnifiedString(declinations) {
    const sum = this._getNamesValues().reduce(
      (accumulator, currentValue) => accumulator + parseInt(currentValue.value, 10),
      0,
    );

    return `${sum} ${ruDeclination(sum, declinations)}`;
  }

  _createSeparateRoomsString() {
    let result = this._getNamesValues().reduce(
      (accumulator, currentNameValue) => `${accumulator} `
        + `${currentNameValue.value} `
        + `${Dropdown._selectProperWord(currentNameValue.value, currentNameValue.name)}, `,
      '',
    );
    result = result.substring(0, result.length - 2).trim();

    return result;
  }

  _createRoomsString(namesValues) {
    let result;

    if (this.isUnified) {
      result = this._createUnifiedString('комнаты');
    } else {
      result = this._createSeparateRoomsString(namesValues);
    }

    return result;
  }

  _createCustomersString(namesValues, isUnified) {
    let resultString;

    if (isUnified) {
      resultString = this._createUnifiedString('гост|ь|я|ей');
    } else {
      resultString = this._createCustomersWithInfantsString();
    }

    return resultString;
  }

  _createCustomersWithInfantsString() {
    let infants = 0;
    let sum = 0;

    this._getNamesValues().forEach((nameValue) => {
      if (nameValue.name.toLowerCase() === 'младенцы') {
        infants = parseInt(nameValue.value, 10);
        return;
      }
      sum += parseInt(nameValue.value, 10);
    });

    let resultString = `${sum} ${Dropdown._selectProperWord(sum, 'гости')}`;
    if (infants !== 0) { resultString += `, ${infants} ${Dropdown._selectProperWord(infants, 'младенцы')}`; }

    return resultString;
  }

  _createInputText(namesValues) {
    let result = '';
    if (this._areAllValuesZero(namesValues)) return result;

    switch (this.type) {
      case Dropdown.types.rooms: {
        result = this._createRoomsString(namesValues);
        break;
      }
      case Dropdown.types.customers: {
        result = this._createCustomersString(namesValues);
        break;
      }
      default: {
        const sum = namesValues.reduce(
          (accumulator, nameValue) => accumulator + parseInt(nameValue.value, 10), 0,
        );
        result += `${sum} чего-то`;
        break;
      }
    }
    return result;
  }

  _updateInputText() {
    const newInputText = this._createInputText(this._getNamesValues());

    this.input.setText(newInputText);
  }

  static _areValuesEqual(namesValues1, namesValues2) {
    return !namesValues2?.some(
      (nameValue, index) => namesValues1?.[index].value !== nameValue.value
    );
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

    const areEqual = Dropdown._areValuesEqual(this._getNamesValues(), this.oldNamesValues);
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

  _setSpinnerValues(namesValuesToSet) {
    this.spinners.forEach((spinner, i) => {
      const valuesIsArray = Array.isArray(namesValuesToSet);
      spinner.setValue(valuesIsArray ? namesValuesToSet[i].value : namesValuesToSet);
      spinner.triggerSpin();
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
