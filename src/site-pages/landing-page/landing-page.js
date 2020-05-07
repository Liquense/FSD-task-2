/* eslint-disable no-undef */
// jquery подключена вебпаком
import '../../common';
import initFindRoomCard from '../../cards/find-room-card/find-room-card';

import './landing-page.scss';

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

const $findRoomCardButton = $('.find-room-card__button');
$findRoomCardButton.click(() => { window.location.href = 'search-room.html'; });

const $findRoomCards = $('.find-room-card');
$findRoomCards.each(initFindRoomCard);
