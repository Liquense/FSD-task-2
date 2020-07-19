import initBlocks from '../../common/dynamicInit';
import FindRoomCard from './find-room-card';

function initFindRoomCards(rootElement) {
  return initBlocks(rootElement, '.js-find-room-card', FindRoomCard);
}

export default initFindRoomCards;
