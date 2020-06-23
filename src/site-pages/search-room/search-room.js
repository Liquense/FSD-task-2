/* eslint-disable no-undef */
// jquery импортирована вебпаком
import '../../common';
import '../../blocks/slider/slider';
import '../../blocks/list/list';
import '../../blocks/pagination/pagination';
import Checkbox from '../../blocks/checkbox/checkbox';
import initRoomPreviewCard from '../../cards/room-preview-card/room-preview-card';

import './search-room.pug';
import './search-room.scss';
import { initDatepickerInputs } from '../../blocks/input/_type/_datepicker/input_type_datepicker';
import { initExpandableLists } from '../../blocks/list/_expandable/list_expandable';
import { initDropdowns } from '../../blocks/input/_type/_dropdown/__list/input_type_dropdown__list';

function initAllRoomPreviewCardsInContainer($container) {
  $container.find('.room-preview-card').each(initRoomPreviewCard);
}

function initLinksInPagination() {
  const $pagination = $(this);
  const $paginationContent = $pagination.children('.pagination__content-container');
  const $paginationButtons = $pagination.children('.pagination__buttons-container');

  $paginationButtons.addHook('afterPaging', () => {
    initAllRoomPreviewCardsInContainer($paginationContent);
    const $roomPreviewCardsTextContent = $('.roomPreviewCard__textContent');
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

  // air-datepicker не относится к контейнеру, где лежит элемент, его инициирующий,
  // из-за этого проблема с "кликом снаружи"
  // documentAddOnClickFilterCheck($showSideBarButton, $nextElement);
});

const $paginations = $('.pagination');
$paginations.each(initLinksInPagination);

const $roomPreviewCardsTextContent = $('.room-preview-card__text-content');
$roomPreviewCardsTextContent.click(() => {
  window.location.href = 'room-details.html';
});

Checkbox.initDefault();

initDatepickerInputs();
initExpandableLists();
initDropdowns();
