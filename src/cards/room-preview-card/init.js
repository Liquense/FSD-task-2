import initBlocks from '../../utils/dynamicInit';
import RoomPreviewCard from './room-preview-card';

function initRoomPreviewCards(rootElement) {
  return initBlocks(rootElement, '.js-room-preview-card', RoomPreviewCard);
}

export default initRoomPreviewCards;
