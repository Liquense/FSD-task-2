import initBlocks from '../../utils/dynamicInit';
import LikeButton from './like-button';

function initLikes(rootElement) {
  return initBlocks(rootElement, '.js-like-button', LikeButton);
}

export default initLikes;
