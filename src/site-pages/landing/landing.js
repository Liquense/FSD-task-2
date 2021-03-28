import { importCommon, importHeaderFooter } from '../../common/imports';

import initFindRoomCards from '../../cards/find-room-card/init';
import '../../cards/find-room-card/find-room-card';
import './landing.scss';

importHeaderFooter();
importCommon();

const $roomContainers = $('.js-landing');
function initRoomContainer() {
  const $container = $(this);
  const randomNum = Math.floor(Math.random() * 3) + 1;
  $container.attr('data-background-index', randomNum);
}

$roomContainers.each(initRoomContainer);

initFindRoomCards();
