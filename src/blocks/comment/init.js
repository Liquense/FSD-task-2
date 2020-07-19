import initBlocks from '../../common/dynamicInit';
import Comment from './comment';

function initComments(rootElement) {
  return initBlocks(rootElement, '.js-comment', Comment);
}

export default initComments;
