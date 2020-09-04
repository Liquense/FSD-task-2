class Arrow {
  $element;

  isExpand = false;

  constructor(rootElement) {
    this._initElement(rootElement);
  }

  toggleExpandState() {
    if (this.isExpanded()) this.collapse();
    else this.expand();
  }

  collapse() {
    if (!this.isExpand) return;

    this.$element.text('expand_more');
    this.$element.removeClass('arrow_expanded');
  }

  expand() {
    if (!this.isExpand) return;

    this.$element.text('expand_less');
    this.$element.addClass('arrow_expanded');
  }

  isExpanded() {
    return this.$element.hasClass('arrow_expanded');
  }

  _initElement(rootElement) {
    this.$element = $(rootElement);
    if (this.$element.hasClass('arrow_type_expand')) this.isExpand = true;
  }
}

export default Arrow;
