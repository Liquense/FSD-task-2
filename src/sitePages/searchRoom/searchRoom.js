/* eslint-disable no-undef */
// jquery импортирована вебпаком
import '../../common';
import '../../blocks/Slider/slider';
import '../../blocks/List/list';
import '../../blocks/Pagination/Pagination';
import Checkbox from '../../blocks/Checkbox/Checkbox';
import initRoomPreviewCard from '../../Cards/roomPreviewCard/roomPreviewCard';

import './searchRoom.pug';
import './searchRoom.scss';

function initAllRoomPreviewCardsInContainer($container) {
  $container.find('.roomPreviewCard').each(initRoomPreviewCard);
}

const $paginations = $('.pagination');
function initLinksInPagination() {
  const $pagination = $(this);
  const $paginationContent = $pagination.children('.pagination__contentContainer');
  const $paginationButtons = $pagination.children('.pagination__buttonsContainer');

  $paginationButtons.addHook('afterPaging', () => {
    initAllRoomPreviewCardsInContainer($paginationContent);
  });
}
$paginations.each(initLinksInPagination);

const $roomPreviewCardsTextContent = $('.roomPreviewCard__textContent');
$roomPreviewCardsTextContent.click(() => {
  window.location.href = 'roomDetails.html';
});

Checkbox.initDefault();
