import './arrow.scss';

class Arrow {
  static expandedClass = 'arrow_expanded';

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
    this.$element.removeClass(Arrow.expandedClass);
  }

  expand() {
    if (!this.isExpand) return;

    this.$element.text('expand_less');
    this.$element.addClass(Arrow.expandedClass);
  }

  isExpanded() {
    return this.$element.hasClass(Arrow.expandedClass);
  }

  _initElement(rootElement) {
    this.$element = $(rootElement);
    if (this.$element.hasClass('arrow_type_expand')) this.isExpand = true;
  }
}

export default Arrow;
