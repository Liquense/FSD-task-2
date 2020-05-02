/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком
import 'jquery-ui/ui/effects/effect-fade';
import { ruDeclination } from '../../../../common/functions';
import { disableButtonsAtExtremum } from '../_spinner/input_type_spinner';

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
function getDropdownType(dropdown) {
  const dropdownType = {};
  if ($(dropdown).hasClass('input__dropdownListWrapper_unified')) {
    dropdownType.isUnified = true;
  }
  if ($(dropdown).hasClass('input__dropdownListWrapper_rooms')) {
    dropdownType.name = typeRooms;
  } else if ($(dropdown).hasClass('input__dropdownListWrapper_customers')) {
    dropdownType.name = typeCustomers;
  } else return false;

  return dropdownType;
}

function selectNiceWord(itemsCount, itemName) {
  let result = '';

  switch (itemName.toLowerCase()) {
    case 'спальни':
      result = ruDeclination(itemsCount, 'Спал|ьня|ьни|ен');
      break;
    case 'кровати':
      result = ruDeclination(itemsCount, 'Кроват|ь|и|ей');
      break;
    case 'ванные комнаты':
      result = `${ruDeclination(itemsCount, 'Ванн|ая|ых|ых')} ${
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

function isAllValuesZero(namesValues) {
  return !namesValues.some((nameValue) => parseInt((nameValue.value), 10) !== 0);
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
  result = result.substring(0, result.length - 2);

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
  if (isAllValuesZero(namesValues)) return result;

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

function changeInputText(dropdown, namesValues, input) {
  const dropdownType = getDropdownType(dropdown);
  const newInputText = createInputText(namesValues, dropdownType);
  $(input).val(newInputText);
}

/**
 * Поэлементное сравнение двух массивов имя-значение по значениям.
 * @param namesValues1  первый массив
 * @param namesValues2  второй массив
 * @returns {boolean}   одинаковы ли они
 */
function isValuesEqual(namesValues1, namesValues2) {
  if (namesValues1.length !== namesValues2.length) return false;

  return !namesValues2.some((nameValue, index) => namesValues1[index].value !== nameValue.value);
}

function manageControlsVisibility(
  oldNamesValues, namesValues, clearButton, confirmButton, buttonsContainer,
) {
  const clearVisibleClass = 'input__clearButton_visible';
  const confirmVisibleClass = 'input__confirmButton_visible';
  const containerVisibleClass = 'input__controlButtonsContainer_visible';

  if (isAllValuesZero(namesValues)) {
    $(clearButton).removeClass(clearVisibleClass);
  } else {
    $(clearButton).addClass(clearVisibleClass);
  }

  if (isValuesEqual(namesValues, oldNamesValues)) {
    $(confirmButton).removeClass(confirmVisibleClass);
  } else {
    $(confirmButton).addClass(confirmVisibleClass);
  }

  const hasClearVisibleClass = $(clearButton).hasClass(clearVisibleClass);
  const hasConfirmVisibleClass = $(confirmButton).hasClass(confirmVisibleClass);
  if (hasClearVisibleClass || hasConfirmVisibleClass) {
    $(buttonsContainer).addClass(containerVisibleClass);
  } else {
    $(buttonsContainer).removeClass(containerVisibleClass);
  }
}

function setSpinnerValues(namesValuesToSet, namesValuesToChange, $spinners, options) {
  $spinners.each((i) => {
    const $currentSpinner = $($spinners[i]);

    if (options.includes('array')) {
      namesValuesToChange[i].value = namesValuesToSet[i].value;
      $($currentSpinner).spinner('value', namesValuesToSet[i].value);
      disableButtonsAtExtremum($currentSpinner, namesValuesToSet[i].value);
    }
    if (options.includes('value')) {
      namesValuesToChange[i].value = namesValuesToSet;
      $($currentSpinner).spinner('value', namesValuesToSet);
      disableButtonsAtExtremum($currentSpinner, namesValuesToSet);
    }
  });
}

function clearSpinnersValues(namesValues, spinners) {
  setSpinnerValues(0, namesValues, spinners, ['value']);
}

function dropdownOnChange(
  oldNamesValues, namesValues, spinners, clearButton,
  confirmButton, buttonsContainer, dropdown, input,
) {
  setSpinnerValues(oldNamesValues, namesValues,
    spinners, ['array']);
  manageControlsVisibility(oldNamesValues, namesValues,
    clearButton, confirmButton, buttonsContainer);
  changeInputText(dropdown, namesValues, input);
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
  $($spinnerElements).each(getNameValueFromSpinner);

  return result;
}

const dropdownVisibleClass = 'input__dropdownListWrapper_visible';

function initDropdownInput() {
  const $inputWrapper = $(this);
  const $dropdown = $(this).children('.input__dropdownListWrapper_type_dropdown');
  const $control = $(this).find('.input__control_type_dropdown');
  const $spinnerValueElements = $(this).find('.input__value_type_spinner');
  const $controlButtonsContainer = $(this).find('.input__controlButtonsContainer');
  const $clearButton = $(this).find('.input__clearButton');
  const $confirmButton = $(this).find('.input__confirmButton');

  const spinnersNameValue = getInitialNamesValues($spinnerValueElements);
  let oldSpinnersNameValue = getInitialNamesValues($spinnerValueElements);
  changeInputText($dropdown, spinnersNameValue, $control);

  function handleClearButtonClick() {
    clearSpinnersValues(spinnersNameValue, $spinnerValueElements);

    manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue,
      $clearButton, $confirmButton, $controlButtonsContainer);

    changeInputText($dropdown, spinnersNameValue, $control);
  }

  $($clearButton).click(handleClearButtonClick);

  function handleConfirmButtonClick() {
    $($control).removeClass('input__control_focused');
    $($dropdown).toggle('fade');
    $($dropdown).toggleClass(dropdownVisibleClass);

    oldSpinnersNameValue = getCurrentNamesValues($spinnerValueElements);

    manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue,
      $clearButton, $confirmButton, $controlButtonsContainer);
  }

  $($confirmButton).click(handleConfirmButtonClick);

  // on spin
  $($spinnerValueElements).each((i) => {
    const $spinner = $($spinnerValueElements[i]);
    function handleSpin(event, ui) {
      spinnersNameValue[$spinner.attr('data-index')].value = ui.value;

      changeInputText(
        $dropdown,
        spinnersNameValue,
        $control,
      );
      manageControlsVisibility(
        oldSpinnersNameValue,
        spinnersNameValue,
        $clearButton,
        $confirmButton,
        $controlButtonsContainer,
      );
    }

    $spinner.on('spin', handleSpin);
  });

  $($dropdown).position({
    my: 'center',
    at: 'center',
    of: $control,
  });

  let clickedElement;

  $(document).click((event) => {
    clickedElement = $(event.target);

    // если клик происходит не в дропдауне
    if (!$.contains($($inputWrapper).get(0), $(clickedElement).get(0))) {
      // и дропдаун отображается
      if ($($dropdown).hasClass(dropdownVisibleClass)) {
        $($dropdown).toggle('fade');
        $($dropdown).toggleClass(dropdownVisibleClass);

        setSpinnerValues(oldSpinnersNameValue, spinnersNameValue,
          $spinnerValueElements, ['array']);
        manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue,
          $clearButton, $confirmButton, $controlButtonsContainer);
        changeInputText($dropdown, spinnersNameValue, $control);
      }
      $($control).removeClass('input__control_focused');
    }
  });

  $($control).click(() => {
    console.log($dropdown);
    $($control).toggleClass('input__control_focused');
    $($dropdown).toggle('fade');
    $($dropdown).toggleClass(dropdownVisibleClass);

    if (!$($dropdown).hasClass(dropdownVisibleClass)) {
      dropdownOnChange(oldSpinnersNameValue, spinnersNameValue,
        $spinnerValueElements, $clearButton, $confirmButton,
        $controlButtonsContainer, $dropdown, $control);
    }
  });
}

const $dropdownInputs = $('.input_type_dropdown');
$dropdownInputs.each(initDropdownInput);
