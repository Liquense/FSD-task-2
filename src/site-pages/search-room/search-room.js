/* eslint-disable no-undef */
// jquery импортирована вебпаком
import { importCommon, importContext } from '../../index';
import initRoomPreviewCards from '../../cards/room-preview-card/room-preview-card';

importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));

function initLinksInPagination() {
  const $pagination = $(this);
  const $paginationButtons = $pagination.children('.pagination__buttons-container');

  $paginationButtons.addHook('afterPaging', () => {
    initRoomPreviewCards();
    const $roomPreviewCardsTextContent = $('.room-preview-card__text-content');
    $roomPreviewCardsTextContent.click(() => {
      window.location.href = 'room-details.html';
    });
  });
}

const $showSidebarButtons = $('.search-room__show-sidebar-button');
$showSidebarButtons.each((index, element) => {
  const $showSideBarButton = $(element);

  $showSideBarButton.click(() => {
    $showSideBarButton.toggleClass('search-room__show-sidebar-button_active');
  });
});

const $paginations = $('.pagination');
$paginations.each(initLinksInPagination);

const $roomPreviewCardsTextContent = $('.room-preview-card__text-content');
$roomPreviewCardsTextContent.click(() => {
  window.location.href = 'room-details.html';
});

initRoomPreviewCards();
