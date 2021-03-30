import { importCommon, importHeaderFooter } from '../../utils/imports';
import initFindRoomCards from '../../cards/find-room-card/init';
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
