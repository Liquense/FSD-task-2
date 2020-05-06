/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком
import 'jquery-ui/ui/effects/effect-fade';
import './list_expandable.scss';

export function initExpandableList(index, rootElement) {
  const $expandable = $(rootElement);
  const $expandableTitle = $($expandable.find('.list__title_expandable')[0]);
  const $expandableContainer = $($expandable.find('.list__container_expandable')[0]);
  const isOpened = $expandable.hasClass('list_expandable-opened');

  function handleExpandableTitleClick() {
    $expandable.toggleClass('list__expandArrow_expanded');
    $expandableContainer.toggle('fade', [], 200);
    $expandableContainer.toggleClass('list__container_visible');
  }
  $expandableTitle.click(handleExpandableTitleClick);

  if (isOpened) $($expandableContainer).toggle('fade', [], 200);
}

export function initExpandableLists() {
  const $expandableLists = $('.list_expandable');
  $expandableLists.each(initExpandableList);
}
