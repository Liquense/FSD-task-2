/* eslint-disable no-undef */
// jquery импортирована вебпаком
import { importCommon, importContext } from '../../index';
import initRoomPreviewCards from '../../cards/room-preview-card/room-preview-card';

importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));

function initCardsInPagination() {
  const $pagination = $(this);
  const $paginationButtons = $pagination.children('.js-pagination__buttons-container');

  $paginationButtons.addHook('afterPaging', () => {
    initRoomPreviewCards();
  });
}

const $showSidebarButtons = $('.js-search-room__show-sidebar-button');
$showSidebarButtons.each((index, element) => {
  const $showSideBarButton = $(element);

  $showSideBarButton.click(() => {
    $showSideBarButton.toggleClass('search-room__show-sidebar-button_active');
  });
});

const $paginations = $('.js-pagination');
$paginations.each(initCardsInPagination);

initRoomPreviewCards();
