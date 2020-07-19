/* eslint-disable no-undef */
import initCheckboxes from '../checkbox/init';

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
    initCheckboxes(this.$comment);
  }
}

export default Comment;
