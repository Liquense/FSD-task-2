import { importCommon, importHeaderFooter } from '../../imports';

import initFindRoomCards from '../../cards/find-room-card/init';
import '../../cards/find-room-card/find-room-card';
import './landing.scss';

importHeaderFooter();
importCommon();

const imagePaths = [];
imagePaths.push(require('../../assets/images/room-big-1.jpg'));
imagePaths.push(require('../../assets/images/room-big-2.jpg'));
imagePaths.push(require('../../assets/images/room-big-3.jpg'));

const $roomContainers = $('.js-landing');
function initRoomContainer() {
  const $container = $(this);
  const randomNum = Math.floor(Math.random() * imagePaths.length);
  $container.css('background-image', `url(${imagePaths[randomNum]})`);
}

$roomContainers.each(initRoomContainer);

initFindRoomCards();
