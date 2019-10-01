import "../../common"
import "../../blocks/Slider/slider"
import "../../blocks/List/list"
import "../../blocks/Pagination/Pagination"
import "../../Cards/roomPreviewCard/roomPreviewCard"

import "./searchRoom.pug"
import "./searchRoom.scss"

import {initRoomPreviewCard} from "../../Cards/roomPreviewCard/roomPreviewCard";

$(".pagination").each(function () {
	const $paginationBlock = $(this);
	const $paginationContent = $paginationBlock.children(".pagination__contentContainer");
	const $paginationButtons = $paginationBlock.children(".pagination__buttonsContainer");

	$paginationButtons.addHook("afterPaging", function () {
		initAllRoomPreviewCardsInContainer($paginationContent);
	})
});

function initAllRoomPreviewCardsInContainer($container) {
	$container.find(".roomPreviewCard").each(function () {
			initRoomPreviewCard($(this));
		}
	);
}
