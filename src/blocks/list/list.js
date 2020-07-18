/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком
import 'jquery-ui/ui/effects/effect-fade';
import initArrows from '../arrow/init';

class List {
  static expandableClass = 'list_expandable';

  $list;

  $title;

  $container;

  $arrow;

  arrow;

  isOpened;

  constructor(rootElement) {
    this._initList(rootElement);
  }

  _initList(rootElement) {
    this._initElements(rootElement);

    if (this.$list.hasClass(List.expandableClass)) { this._initExpandableList(); }
  }

  _initElements(rootElement) {
    this.$list = $(rootElement);

    this.$title = this.$list.find('.js-list__title');
    this.$container = this.$list.find('.js-list__container');
  }

  // region expandable
  _initExpandableList() {
    this.isOpened = this.$list.hasClass('list_expandable-opened');

    this._initArrow();
    this._addExpandableEvents();

    if (this.isOpened) this._handleExpandableClick();
  }

  _initArrow() {
    this.arrow = initArrows(this.$list);
    this.$arrow = this.arrow.$element;
  }

  _addExpandableEvents() {
    this.$title.on('click.list', this._handleExpandableClick.bind(this));
    this.$arrow.on('click.list', this._handleExpandableClick.bind(this));
  }

  _handleExpandableClick() {
    this.$arrow.toggleClass('list__expand-arrow_expanded');
    this.$container.toggle('fade', [], 200);
    this.$container.toggleClass('list__container_visible');

    this.arrow.handleArrowChangeState();
  }
  // endregion
}

export default List;
