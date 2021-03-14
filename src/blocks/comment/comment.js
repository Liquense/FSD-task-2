import initLikes from '../like-button/init';
import './comment.scss';

class Comment {
  $comment;

  constructor(rootElement) {
    this._initElement(rootElement);
    this._initInnerBlocks();
  }

  _initElement(rootElement) {
    this.$comment = $(rootElement);
  }

  _initInnerBlocks() {
    initLikes(this.$comment);
  }
}

export default Comment;
