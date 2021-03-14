import 'paginationjs';

import { outerHTML } from '../../common/functions';

import './pagination.scss';

class Pagination {
  $pagination;

  $contentContainer;

  $buttons;

  pageSize;

  HTMLContent = [];

  constructor(rootElement) {
    this._initElements(rootElement);
    this._getPaginationContent();
    this._initPlugin();
  }

  _initElements(rootElement) {
    this.$pagination = $(rootElement);
    this.$contentContainer = this.$pagination.find('.js-pagination__content');
    this.$buttons = this.$pagination.find('.js-pagination__buttons');

    this.pageSize = this.$pagination.attr('data-page-size');
  }

  _getPaginationContent() {
    this.$contentContainer.children().each((index, element) => {
      this.HTMLContent.push(outerHTML($(element)));
    });
  }

  _initPlugin() {
    this.$buttons.pagination({
      dataSource: this.HTMLContent,
      prevText: 'arrow_back',
      nextText: 'arrow_forward',
      pageSize: this.pageSize,
      pageRange: 1,
      callback: (arrayData) => {
        this.$contentContainer.html(arrayData);
      },
      showNavigator: true,
      formatNavigator: (currentPage, totalPage, totalNumber) => {
        let totalCount = totalNumber.toString();
        if (totalNumber > 100) {
          totalCount = '100+';
        }

        let startCount = 1;
        if (currentPage > 1) {
          startCount = (currentPage - 1) * this.pageSize + 1;
        }

        let endCount = this.pageSize * currentPage;
        if (endCount > totalNumber) {
          endCount = totalNumber;
        }

        return `<span>${startCount} – ${endCount} из ${totalCount} вариантов аренды</span>`;
      },
      ulClassName: 'pagination__pages-list',
    });
  }
}

export default Pagination;
