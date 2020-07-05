function findExpandArrow($rootElement) { return $rootElement.find('.js-arrow_expand'); }

function handleArrowCollapsing($rootElement) {
  const $expandArrow = findExpandArrow($rootElement);

  $expandArrow.text('expand_more');
  $expandArrow.removeClass('arrow_expanded');
}

function handleArrowExpanding($rootElement) {
  const $expandArrow = findExpandArrow($rootElement);
  $expandArrow.text('expand_less');
  $expandArrow.addClass('arrow_expanded');
}

function getExpandState($rootElement) {
  const $expandArrow = findExpandArrow($rootElement);

  return $expandArrow.hasClass('arrow_expanded');
}

export { handleArrowCollapsing, handleArrowExpanding, getExpandState };
