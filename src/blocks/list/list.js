import initArrows from '../arrow/init';

class List {
  static expandableClass = 'list_expandable';

  static expandedClass = 'list__title_expanded';

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

    this.$title = this.$list.find('.js-list__title');
    this.$container = this.$list.find('.js-list__container');
  }

  _initList() {
    if (this.$list.hasClass(List.expandableClass)) { this._initExpandableList(); }
  }

  _initExpandableList() {
    this.isExpanded = this.$list.hasClass('list_expanded');

    this._initArrow();
    this._addExpandableEvents();

    if (this.isExpanded) {
      this.isExpanded = !this.isExpanded;
      this._handleExpandableClick();
    }
  }

  _initArrow() {
    this.arrow = initArrows(this.$list);
    this.$arrow = this.arrow.$element;
  }

  _addExpandableEvents() {
    this.$title.on('click.list', this._handleExpandableClick);
    this.$arrow.on('click.list', this._handleExpandableClick);
  }

  _handleExpandableClick = () => {
    this.isExpanded = !this.isExpanded;

    this.$container.toggleClass('list__container_visible');
    this.$title.toggleClass('list__title_expanded');
    this.$arrow.toggleClass('list__expand-arrow_expanded');
    this.arrow.handleArrowChangeState();
  }
}

export default List;
