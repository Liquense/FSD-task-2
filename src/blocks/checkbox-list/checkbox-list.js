import initArrows from '../arrow/init';

class CheckboxList {
  static expandedClass = 'checkbox-list_expanded';

  $list;

  $title;

  $container;

  $arrow;

  arrow;

  isExpanded;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initList();
  }

  _initElements(rootElement) {
    this.$list = $(rootElement);

    this.$title = this.$list.find('.js-checkbox-list__title');
    this.$container = this.$list.find('.js-checkbox-list__container');
  }

  _initList() {
    if (this.$list.hasClass(CheckboxList.expandableClass)) { this._initExpandableList(); }
  }

  _initExpandableList() {
    this.isExpanded = this.$list.hasClass('checkbox-list_expanded');

    this._initArrow();
    this._addExpandableEvents();

    if (this.isExpanded) {
      this.isExpanded = !this.isExpanded;
      this._toggleContainerVisibility();
      this._toggleArrowState();
    }
  }

  _initArrow() {
    this.arrow = initArrows(this.$list);
    this.$arrow = this.arrow.$element;
  }

  _addExpandableEvents() {
    this.$title.on('click.checkbox-list', this._handleExpandableClick);
    this.$arrow.on('click.checkbox-list', this._handleExpandableClick);
  }

  _handleExpandableClick = () => {
    this.isExpanded = !this.isExpanded;

    this.$list.toggleClass(CheckboxList.expandedClass);
    this._toggleContainerVisibility();
    this._toggleArrowState();
  }

  _toggleContainerVisibility() {
    this.$container.toggleClass('checkbox-list__container_visible');
  }

  _toggleArrowState() {
    this.$arrow.toggleClass('checkbox-list__expand-arrow_expanded');
    this.arrow.handleArrowChangeState();
  }
}

export default CheckboxList;
