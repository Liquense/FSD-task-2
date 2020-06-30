/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком
import 'paginationjs';

function getPaginationContent($contentContainer) {
  const HTMLContent = [];

  function addHTMLContentToArray() { HTMLContent.push($(this).outerHTML()); }
  $contentContainer.children().each(addHTMLContentToArray);

  return HTMLContent;
}

function initPagination() {
  const $paginationBlock = $(this);
  const $paginationContent = $paginationBlock.children('.pagination__content-container');
  const $paginationButtons = $paginationBlock.children('.pagination__buttons-container');

  const pageSize = $paginationBlock.attr('data-page-size');
  const contentHTMLArray = getPaginationContent($paginationContent);

  const $paginationContainer = $('.pagination__content-container');
  $paginationButtons.pagination({
    dataSource: contentHTMLArray,
    prevText: 'arrow_back',
    nextText: 'arrow_forward',
    pageSize,
    pageRange: 1,
    callback(arrayData) {
      $paginationContainer.html(arrayData);
    },
    showNavigator: true,
    formatNavigator(currentPage, totalPage, totalNumber) {
      let totalCount = totalNumber.toString();
      if (totalNumber > 100) {
        totalCount = '100+';
      } // так в макете

      let startCount = 1;
      if (currentPage > 1) {
        startCount = (currentPage - 1) * pageSize + 1;
      }

      let endCount = pageSize * currentPage;
      if (endCount > totalNumber) {
        endCount = totalNumber;
      }

      return '<span class=\'text_type_regular\'>'
        + ` ${startCount} – ${endCount} из ${totalCount} вариантов аренды</span>`;
    },
  });
}

function initPaginations() {
  const $paginations = $('.pagination');
  $paginations.each(initPagination);
}

export default initPaginations;
