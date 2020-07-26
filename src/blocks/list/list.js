/* eslint-disable no-undef */
import 'jquery-ui/ui/effects/effect-fade';
import initArrows from '../arrow/init';
import initRadioButtons from '../radio-button/init';
import initCheckboxes from '../checkbox/init';

class List {
  static expandableClass = 'list_expandable';

  $list;

  $title;

  $container;

  $arrow;

  arrow;

  isOpened;

  listItems;

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

    this.listItems = this._initListItems();
  }

  _initListItems() {
    if (this.$list.hasClass('list_type_radio')) { initRadioButtons(this.$list); } else
    if (this.$list.hasClass('list_type_checkbox') || this.$list.hasClass('list_type_toggle')) {
      initCheckboxes(this.$list);
    }
  }

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
    this.$title.on('click.list', this._handleExpandableClick);
    this.$arrow.on('click.list', this._handleExpandableClick);
  }

  _handleExpandableClick = () => {
    this.$arrow.toggleClass('list__expand-arrow_expanded');
    this.$container.toggle('fade', [], 200);
    this.$container.toggleClass('list__container_visible');

    this.arrow.handleArrowChangeState();
  }
}

export default List;
