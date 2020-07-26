/* eslint-disable no-undef */
import initLikes from '../like-button/init';

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
