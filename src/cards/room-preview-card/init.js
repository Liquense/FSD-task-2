import initBlocks from '../../common/dynamicInit';
import RoomPreviewCard from './room-preview-card';

function initRoomPreviewCard(rootElement) {
  return initBlocks(rootElement, '.js-room-preview-card', RoomPreviewCard);
}

export default initRoomPreviewCard;
