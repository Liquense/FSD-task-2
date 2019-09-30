import "paginationjs"
//
import "./Pagination.scss"

let pageSize = 12;

function getPaginationContent($contentContainer) {
	let contentHTMLArray = [];

	$contentContainer.children().each(function () {
		contentHTMLArray.push($(this).html());
		console.log($(this).outerHTML());
	});

	return contentHTMLArray;
}

$(".pagination").each(function () {
	const $paginationBlock = $(this);
	const $paginationContent = $paginationBlock.children(".pagination__contentContainer");
	const $paginationButtons = $paginationBlock.children(".pagination__buttonsContainer");

	const contentHTMLArray = getPaginationContent($paginationContent);
	console.log(contentHTMLArray);

	$paginationButtons.pagination({
		dataSource: contentHTMLArray,
		//className: "pagination__pluginButtons",
		//autoHidePrevious: true,
		prevText: "arrow_back",
		//autoHideNext: true,
		nextText: "arrow_forward",
		pageSize: pageSize,
		pageRange: 1,
		callback: function (arrayData, paginationData) {
			$(".pagination__contentContainer").html(arrayData);
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
	})
});
