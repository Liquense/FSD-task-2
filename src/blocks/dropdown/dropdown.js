/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком
import 'jquery-ui/ui/effects/effect-fade';

import { ruDeclination } from '../../common/functions';

import { disableButtonsAtExtremum } from '../spinner/spinner';

/**
 * Функция для получения пар имя-значение со всех переданных спиннеров
 *
 * @param spinnerElements   массив спиннеров
 * @returns {Array}
 */
function getCurrentNamesValues(spinnerElements) {
  const result = [];

  function getNameValue() {
    result.push({
      name: $(this).attr('data-name'),
      value: parseInt($(this).val(), 10),
    });
  }
  $(spinnerElements).each(getNameValue);

  return result;
}

const typeRooms = 'rooms';
const typeCustomers = 'customers';
function getDropdownType($list) {
  const dropdownType = {};
  const listClassPrefix = 'dropdown__list_';

  if ($($list).hasClass(`${listClassPrefix}unified`)) { dropdownType.isUnified = true; }

  if ($($list).hasClass(`${listClassPrefix}type_rooms`)) {
    dropdownType.name = typeRooms;
  } else if ($($list).hasClass(`${listClassPrefix}type_customers`)) {
    dropdownType.name = typeCustomers;
  } else return false;

  return dropdownType;
}

function selectNiceWord(itemsCount, itemName) {
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

function areAllValuesZero(namesValues) {
  return !namesValues?.some((nameValue) => parseInt((nameValue.value), 10) !== 0);
}

function createUnifiedString(namesValues, declinationsString) {
  const sum = namesValues.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.value, 10),
    0,
  );

  return `${sum} ${ruDeclination(sum, declinationsString)}`;
}

function createSeparateRoomsString(namesValues) {
  let result = namesValues.reduce(
    (accumulator, currentNameValue) => `${accumulator} `
      + `${currentNameValue.value} `
      + `${selectNiceWord(currentNameValue.value, currentNameValue.name)}, `,
    '',
  );
  result = result.substring(0, result.length - 2).trim();

  return result;
}

function createRoomsString(namesValues, isUnified) {
  let result;

  if (isUnified) {
    result = createUnifiedString(namesValues, 'комнаты');
  } else {
    result = createSeparateRoomsString(namesValues);
  }

  return result;
}

function createCustomersWithInfantsString(namesValues) {
  let infants = 0;
  let sum = 0;

  namesValues.forEach((nameValue) => {
    if (nameValue.name.toLowerCase() === 'младенцы') {
      infants = nameValue.value;
      return;
    }
    sum += parseInt(nameValue.value, 10);
  });

  return `${sum} ${selectNiceWord(sum, 'гости')}, `
    + `${infants} ${selectNiceWord(infants, 'младенцы')}`;
}

function createCustomersString(namesValues, isUnified) {
  let resultString;

  if (isUnified) {
    resultString = createUnifiedString(namesValues, 'гост|ь|я|ей');
  } else {
    resultString = createCustomersWithInfantsString(namesValues);
  }

  return resultString;
}

/**
 * Создание строки, содержащей суммарную информацию по дропдауну.
 * Формат строки зависит от типа дропдауна
 *
 * @param namesValues   массив пар имя-значение, из которых составляется строка
 * @param dropdownType  тип дропдауна
 * @returns {string}    результирующая строка
 */
function createInputText(namesValues, dropdownType) {
  let result = '';
  if (areAllValuesZero(namesValues)) return result;

  switch (dropdownType.name) {
    case typeRooms: {
      result = createRoomsString(namesValues, dropdownType.isUnified);
      break;
    }
    case typeCustomers: {
      result = createCustomersString(namesValues, dropdownType.isUnified);
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

function changeInputText($listWrapper, namesValues, input) {
  const $list = $listWrapper.find('.dropdown__list');
  const dropdownType = getDropdownType($list);
  const newInputText = createInputText(namesValues, dropdownType);

  $(input).val(newInputText);
}

/**
 * Поэлементное сравнение двух массивов имя-значение по значениям.
 * @param namesValues1  первый массив
 * @param namesValues2  второй массив
 * @returns {boolean}   одинаковы ли они
 */
function areValuesEqual(namesValues1, namesValues2) {
  return !namesValues2?.some((nameValue, index) => namesValues1?.[index].value !== nameValue.value);
}

function manageControlsVisibility({
  oldNamesValues, namesValues, $clearButton, $confirmButton, $buttonsContainer,
  areControlsEnabled, areValuesConfirmed,
}) {
  const clearVisibleClass = 'dropdown__clear-button_visible';
  const confirmVisibleClass = 'dropdown__confirm-button_visible';
  const containerVisibleClass = 'dropdown__buttons-container_visible';

  const areEmpty = areAllValuesZero(namesValues);
  if (areEmpty) {
    $clearButton.removeClass(clearVisibleClass);
  } else {
    $clearButton.addClass(clearVisibleClass);
  }

  const areEqual = areValuesEqual(namesValues, oldNamesValues);
  if (areEqual && areValuesConfirmed) {
    $confirmButton.removeClass(confirmVisibleClass);
  } else {
    $confirmButton.addClass(confirmVisibleClass);
  }

  const hasClearVisibleClass = $clearButton.hasClass(clearVisibleClass);
  const hasConfirmVisibleClass = $confirmButton.hasClass(confirmVisibleClass);
  const areSomeControlsVisible = hasClearVisibleClass || hasConfirmVisibleClass;
  if (areSomeControlsVisible && areControlsEnabled) {
    $buttonsContainer.addClass(containerVisibleClass);
  } else {
    $buttonsContainer.removeClass(containerVisibleClass);
  }
}

function setSpinnerValues(namesValuesToSet, namesValuesToChange, $spinners, options) {
  $spinners.each((i) => {
    const $currentSpinner = $($spinners[i]);

    if (options.includes('array')) {
      namesValuesToChange[i].value = namesValuesToSet[i].value;
      $currentSpinner.spinner('value', namesValuesToSet[i].value);
      disableButtonsAtExtremum($currentSpinner, namesValuesToSet[i].value);
    }
    if (options.includes('value')) {
      namesValuesToChange[i].value = namesValuesToSet;
      $currentSpinner.spinner('value', namesValuesToSet);
      disableButtonsAtExtremum($currentSpinner, namesValuesToSet);
    }
  });
}

function clearSpinnersValues(namesValues, spinners) {
  setSpinnerValues(0, namesValues, spinners, ['value']);
}

function dropdownOnChange({
  oldNamesValues, namesValues, $spinners, $clearButton,
  $confirmButton, $buttonsContainer, $listWrapper, $input, areControlsEnabled, areValuesConfirmed,
}) {
  setSpinnerValues(
    oldNamesValues, namesValues,
    $spinners, ['array'],
  );
  manageControlsVisibility({
    oldNamesValues,
    namesValues,
    $clearButton,
    $confirmButton,
    $buttonsContainer,
    areControlsEnabled,
    areValuesConfirmed,
  });
  changeInputText($listWrapper, namesValues, $input);
}

function getInitialNamesValues($spinnerElements) {
  const result = [];

  function getNameValueFromSpinner() {
    const $spinnerElement = $(this);
    result.push({
      name: $spinnerElement.attr('data-name'),
      value: parseInt($spinnerElement.attr('value') ? $spinnerElement.attr('value') : 0, 10),
    });
  }
  $spinnerElements.each(getNameValueFromSpinner);

  return result;
}

const dropdownVisibleClass = 'dropdown__list-wrapper_visible';
export function initDropdown(index, rootElement) {
  const $inputWrapper = $(rootElement);

  // чтобы не инициализировать повторно
  const isInitialisedKey = 'isInitialised';
  if ($inputWrapper.data(isInitialisedKey)) return;
  $inputWrapper.data(isInitialisedKey, true);

  const $listWrapper = $inputWrapper.children('.dropdown__list-wrapper');
  const $inputControl = $inputWrapper.find('.dropdown__input .input__control');
  const $spinnerValueElements = $inputWrapper.find('.spinner__value');
  const $buttonsContainer = $inputWrapper.find('.dropdown__buttons-container');
  const $clearButton = $inputWrapper.find('.dropdown__clear-button');
  const $confirmButton = $inputWrapper.find('.dropdown__confirm-button');

  let areValuesConfirmed = !$inputWrapper.hasClass('dropdown_unaccepted');
  const isOpened = $inputWrapper.hasClass('dropdown_opened');
  if (isOpened) {
    $listWrapper.toggle('fade');
    $listWrapper.toggleClass(dropdownVisibleClass);
  }
  const areControlsEnabled = !$inputWrapper.hasClass('dropdown_pure');

  const namesValues = getInitialNamesValues($spinnerValueElements);
  let oldNamesValues = getInitialNamesValues($spinnerValueElements);
  changeInputText($listWrapper, namesValues, $inputControl);


  manageControlsVisibility({
    oldNamesValues,
    namesValues,
    $clearButton,
    $confirmButton,
    $buttonsContainer,
    areControlsEnabled,
    areValuesConfirmed,
  });

  function handleClearButtonClick() {
    clearSpinnersValues(namesValues, $spinnerValueElements);
    manageControlsVisibility({
      oldNamesValues,
      namesValues,
      $clearButton,
      $confirmButton,
      $buttonsContainer,
      areControlsEnabled,
      areValuesConfirmed,
    });
    changeInputText($listWrapper, namesValues, $inputControl);
  }
  $clearButton.click(handleClearButtonClick);

  function handleConfirmButtonClick() {
    if (!isOpened) {
      $inputControl.removeClass('input__focused_control');
      $listWrapper.toggle('fade');
      $listWrapper.toggleClass(dropdownVisibleClass);
    }
    areValuesConfirmed = true;
    oldNamesValues = getCurrentNamesValues($spinnerValueElements);

    manageControlsVisibility({
      oldNamesValues,
      namesValues,
      $clearButton,
      $confirmButton,
      $buttonsContainer,
      areControlsEnabled,
      areValuesConfirmed,
    });
  }
  $confirmButton.click(handleConfirmButtonClick);

  // on spin
  $spinnerValueElements.each((i) => {
    const $spinner = $($spinnerValueElements[i]);
    function handleSpin(event, ui) {
      namesValues[$spinner.attr('data-index')].value = ui.value;

      changeInputText(
        $listWrapper,
        namesValues,
        $inputControl,
      );
      manageControlsVisibility({
        oldNamesValues,
        namesValues,
        $clearButton,
        $confirmButton,
        $buttonsContainer,
        areControlsEnabled,
        areValuesConfirmed,
      });
    }

    $spinner.on('spin', handleSpin);
  });

  $listWrapper.position({
    my: 'center',
    at: 'center',
    of: $inputControl,
  });

  let clickedElement;

  $(document).click((event) => {
    clickedElement = $(event.target);
    // если клик происходит не в дропдауне
    if (!$.contains($inputWrapper.get(0), clickedElement.get(0))) {
      // и дропдаун отображается
      if ($listWrapper.hasClass(dropdownVisibleClass)) {
        if (!isOpened) {
          $listWrapper.toggle('fade');
          $listWrapper.toggleClass(dropdownVisibleClass);
          $inputControl.removeClass('input_focused__control');
        }

        setSpinnerValues(oldNamesValues, namesValues,
          $spinnerValueElements, ['array']);

        manageControlsVisibility({
          oldNamesValues,
          namesValues,
          $clearButton,
          $confirmButton,
          $buttonsContainer,
          areControlsEnabled,
          areValuesConfirmed,
        });
        changeInputText($listWrapper, namesValues, $inputControl);
      }
    }
  });

  $inputControl.click(() => {
    if (!isOpened) {
      $inputControl.toggleClass('input_focused__control');
      $listWrapper.toggle('fade');
      $listWrapper.toggleClass(dropdownVisibleClass);
    }

    if (!$listWrapper.hasClass(dropdownVisibleClass)) {
      dropdownOnChange({
        oldNamesValues,
        namesValues,
        $spinnerValueElements,
        $clearButton,
        $confirmButton,
        $buttonsContainer,
        $listWrapper,
        $inputControl,
        areControlsEnabled,
        areValuesConfirmed,
      });
    }
  });
}

export function initDropdowns() {
  const $dropdowns = $('.dropdown');
  $dropdowns.each(initDropdown);
}
