import Dropdown from './dropdown';

function initDropdowns() {
  const dropdowns = [];

  // eslint-disable-next-line no-undef
  $('.js-dropdown').each((index, element) => {
    dropdowns.push(new Dropdown(element));
  });

  return dropdowns;
}

export default initDropdowns();
