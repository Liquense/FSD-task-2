/* eslint-disable import/no-extraneous-dependencies,no-undef */
// jquery объявлена глобально вебпаком
import 'jquery-ui/ui/effects/effect-fade';
import './list_expandable.scss';

const $expandableLists = $('.list_expandable');
function initExpandableList() {
  const expandableTitle = $(this).find('.list__title_expandable');
  const expandableContainer = $(this).find('.list__container_expandable');

  function handleExpandableTitleClick() {
    $(this).toggleClass('list__expandArrow_expanded');
    $(expandableContainer).toggle('fade', [], 200);
    $(expandableContainer).toggleClass('list__container_visible');
  }

  $(expandableTitle).click(handleExpandableTitleClick);
}

$expandableLists.each(initExpandableList);
