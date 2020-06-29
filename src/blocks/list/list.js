/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком
import 'jquery-ui/ui/effects/effect-fade';

// region Expandable
export function initExpandableList(index, rootElement) {
  const $expandable = $(rootElement);
  const $expandableTitle = $($expandable.find('.list_expandable__title')[0]);
  const $expandableContainer = $($expandable.find('.list_expandable__container')[0]);
  const isOpened = $expandable.hasClass('list_expandable-opened');

  function handleExpandableTitleClick() {
    $expandable.toggleClass('list_expanded__expand-arrow');
    $expandableContainer.toggle('fade', [], 200);
    $expandableContainer.toggleClass('list_visible__container');
  }
  $expandableTitle.click(handleExpandableTitleClick);

  if (isOpened) $($expandableContainer).toggle('fade', [], 200);
}

export function initExpandableLists() {
  const $expandableLists = $('.list_expandable');
  $expandableLists.each(initExpandableList);
}
// endregion
