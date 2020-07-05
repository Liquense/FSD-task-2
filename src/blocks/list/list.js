/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком
import 'jquery-ui/ui/effects/effect-fade';
import { handleArrowChangeState } from '../arrow/arrow';

// region Expandable
function initExpandableList(index, element) {
  const $expandableList = $(element);

  if ($expandableList.data('isInitialized')) return;
  $expandableList.data('isInitialized', true);

  const $expandableTitle = $expandableList.find('.js-list__title_expandable');
  const $expandableContainer = $expandableList.find('.js-list__container_expandable');
  const $expandArrow = $expandableList.find('.js-list__expand-arrow');
  const isOpened = $expandableList.hasClass('list_expandable-opened');

  function handleExpandableClick() {
    $expandableList.toggleClass('list__expand-arrow_expanded');
    $expandableContainer.toggle('fade', [], 200);
    $expandableContainer.toggleClass('list__container_visible');

    handleArrowChangeState($expandArrow);
  }

  $expandableTitle.on('click.list', handleExpandableClick);
  $expandArrow.on('click.list', handleExpandableClick);

  if (isOpened) handleExpandableClick();
}

function initExpandableLists() {
  const $expandableLists = $('.js-list_expandable');
  $expandableLists.each(initExpandableList);
}
// endregion

export default initExpandableLists;
