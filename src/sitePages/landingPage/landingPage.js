/* eslint-disable no-undef */
// jquery подключена вебпаком
import '../../common';
import '../../Cards/findRoomCard/findRoomCard';
import './landingPage.scss';

const imagePaths = [];

imagePaths.push(require('../../assets/images/room-big-1.jpg'));
imagePaths.push(require('../../assets/images/room-big-2.jpg'));
imagePaths.push(require('../../assets/images/room-big-3.jpg'));

const $roomContainers = $('.landingPage__roomContainer');
function initRoomContainer() {
  const $container = $(this);
  const randomNum = Math.floor(Math.random() * imagePaths.length);
  $container.css('background-image', `url(${imagePaths[randomNum]})`);
}

$roomContainers.each(initRoomContainer);

const $findRoomCardButton = $('.findRoomCard__button');
$findRoomCardButton.click(() => { window.location.href = 'searchRoom.html'; });
