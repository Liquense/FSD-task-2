/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком
import 'jquery-ui/ui/effects/effect-fade';

// region Expandable
export function initExpandableList(index, element) {
  const $expandableList = $(element);

  if ($expandableList.data('isInitialized')) return;
  $expandableList.data('isInitialized', true);

  const $expandableTitle = $($expandableList.find('.list_expandable__title')[0]);
  const $expandableContainer = $($expandableList.find('.list_expandable__container')[0]);
  const isOpened = $expandableList.hasClass('list_expandable-opened');

  function handleExpandableTitleClick() {
    $expandableList.toggleClass('list_expanded__expand-arrow');
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
