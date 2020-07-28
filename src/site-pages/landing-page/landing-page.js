import { importCommon, importContext } from '../../index';
import initFindRoomCards from '../../cards/find-room-card/init';
import initHeaders from '../../page-elements/header/init';

initHeaders();

importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));

const imagePaths = [];
imagePaths.push(require('../../assets/images/room-big-1.jpg'));
imagePaths.push(require('../../assets/images/room-big-2.jpg'));
imagePaths.push(require('../../assets/images/room-big-3.jpg'));

const $roomContainers = $('.landing-page__room-container');
function initRoomContainer() {
  const $container = $(this);
  const randomNum = Math.floor(Math.random() * imagePaths.length);
  $container.css('background-image', `url(${imagePaths[randomNum]})`);
}

$roomContainers.each(initRoomContainer);

initFindRoomCards();
