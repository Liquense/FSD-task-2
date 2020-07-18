/* eslint-disable no-undef */
class Arrow {
  $element;

  constructor(rootElement) {
    this._initElement(rootElement);
  }

  // region expand
  handleArrowChangeState() {
    if (this.getExpandState()) this.handleArrowCollapsing();
    else this.handleArrowExpanding();
  }

  handleArrowCollapsing() {
    this.$element.text('expand_more');
    this.$element.removeClass('arrow_expanded');
  }

  handleArrowExpanding() {
    this.$element.text('expand_less');
    this.$element.addClass('arrow_expanded');
  }

  getExpandState() {
    return this.$element.hasClass('arrow_expanded');
  }
  // endregion

  _initElement(rootElement) {
    this.$element = $(rootElement);
  }
}

export default Arrow;
