import initArrows from '../arrow/init';
import './checkbox-list.scss';

class CheckboxList {
  static expandedClass = 'checkbox-list_expanded';

  $list;

  $titleWrap;

  arrow;

  isExpanded;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initList();
  }

  _initElements(rootElement) {
    this.$list = $(rootElement);
    this.$titleWrap = this.$list.find('.js-checkbox-list__title-wrap');
  }

  _initList() {
    if (this.$list.hasClass('checkbox-list_expandable')) {
      this._initExpandableList();
    }
  }

  _initExpandableList() {
    this.isExpanded = this.$list.hasClass(CheckboxList.expandedClass);

    this._initArrow();
    this._addExpandableEvents();

    if (this.isExpanded) {
      this.arrow.toggleExpandState();
    }
  }

  _initArrow() {
    this.arrow = initArrows(this.$list);
  }

  _addExpandableEvents() {
    this.$titleWrap.on('click.checkbox-list', this._handleListClick);
  }

  _handleListClick = () => {
    this.isExpanded = !this.isExpanded;
    this.$list.toggleClass(CheckboxList.expandedClass);
    this.arrow.toggleExpandState();
  }
}

export default CheckboxList;
