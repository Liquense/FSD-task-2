import "paginationjs"
//
import "./Pagination.scss"

let pageSize = 12;
$(".pagination__buttonsContainer").pagination({
	dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,],
	//className: "pagination__pluginButtons",
	//autoHidePrevious: true,
	prevText: "arrow_back",
	//autoHideNext: true,
	nextText: "arrow_forward",
	pageSize: pageSize,
	pageRange: 1,
	callback: function (data, pagination) {
		let html = "<div class='pagination__content'>" + data + "</div>";
		$(".pagination__contentContainer").html(html);
	},
	showNavigator: true,
	formatNavigator: function (currentPage, totalPage, totalNumber) {
		let totalCount = totalNumber.toString();
		if (totalNumber > 100)
			totalCount = "100+"; //так в макете

		let startCount = 1;
		if (currentPage > 1)
			startCount = (currentPage - 1) * pageSize + 1;

		let endCount = pageSize * currentPage;
		if (endCount > totalNumber)
			endCount = totalNumber;

		return `<span class='text_type_regular'> ${startCount} – ${endCount} из ${totalCount} вариантов аренды</span>`;
	},
});
