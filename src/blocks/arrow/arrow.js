/* eslint-disable no-undef */
class ExpandArrow {
  $element;

  constructor(rootElement) {
    this.$element = ExpandArrow.findExpandArrow(rootElement);
  }

  static findExpandArrow(rootElement) { return $(rootElement).find('.js-arrow_expand'); }

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
}

export default ExpandArrow;
