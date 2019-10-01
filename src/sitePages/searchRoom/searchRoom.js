import "../../common"
import "../../blocks/Slider/slider"
import "../../blocks/List/list"
import "../../blocks/Pagination/Pagination"
import "../../Cards/roomPreviewCard/roomPreviewCard"

import "./searchRoom.pug"
import "./searchRoom.scss"

import {initRoomPreviewCard} from "../../Cards/roomPreviewCard/roomPreviewCard";

//ON PAGE LOAD
$(".pagination").each(function () {
	const $paginationBlock = $(this);
	const $paginationContent = $paginationBlock.children(".pagination__contentContainer");
	const $paginationButtons = $paginationBlock.children(".pagination__buttonsContainer");

	$paginationButtons.addHook("afterPaging", function () {
		initAllRoomPreviewCardsInContainer($paginationContent);
	})
});

$(".searchRoom__showSidebarButton").each(function () {
	const $showSideBarButton = $(this);
	const $nextElement = $showSideBarButton.next();

	$showSideBarButton.click(function () {
		$showSideBarButton.toggleClass("searchRoom__showSidebarButton_active");
	});

	//air-datepicker не относится к контейнеру, где лежит элемент, его инициирующий, из-за этого проблема с "кликом снаружи"
	//documentAddOnClickFilterCheck($showSideBarButton, $nextElement);
});

function documentAddOnClickFilterCheck($showSidebarButton, $filterContainer) {
	$(document).click(function (event) {
		const $clickedElement = $(event.target);

		if (
			!(
				($.contains($filterContainer.get(0), $clickedElement.get(0)))
				|| ($filterContainer.get(0) === $clickedElement.get(0))
				|| ($showSidebarButton.get(0) === $clickedElement.get(0))
			)
		) {
			console.log("hmm");
			$showSidebarButton.removeClass("searchRoom__showSidebarButton_active");
		}
	});
}

//FUNCTIONS

function initAllRoomPreviewCardsInContainer($container) {
	$container.find(".roomPreviewCard").each(function () {
			initRoomPreviewCard($(this));
		}
	);
}

