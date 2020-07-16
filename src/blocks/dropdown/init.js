/* eslint-disable no-undef */
import Dropdown from './dropdown';

const dropdownInstanceKey = 'dropdownInstance';

function initDropdowns(rootElement) {
  const dropdowns = [];
  const $dropdowns = rootElement ? $(rootElement).find('.js-dropdown') : $('.js-dropdown');

  $dropdowns.each((index, element) => {
    const $dropdown = $(element);

    if ($dropdown.data(dropdownInstanceKey)) {
      dropdowns.push($dropdown.data(dropdownInstanceKey));
      return;
    }
    const dropdownInstance = new Dropdown(element);
    $dropdown.data(dropdownInstanceKey, dropdownInstance);
    dropdowns.push(dropdownInstance);
  });

  return dropdowns;
}

export default initDropdowns;
