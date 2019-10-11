import "./checkbox_type_like.scss"
import {initCheckbox} from "../../Checkbox";

$(".checkbox__label_type_like").each(function () {
	let $likeButton;
	let $likeLabel = $(this);

	$likeButton = $($likeLabel.find(".checkbox__hiddenButton_type_like")[0]);
	initCheckbox($likeButton, {
		icon: "checkbox__button checkbox__button_type_like",
		iconSpace: "checkbox__buttonBorder_type_like"
	});

	let likesCount = $likeLabel.attr("data-likes-count").trim();
	$likeLabel.click(function (e) {
		if ($(e.target)[0] === $($likeLabel)[0]) {
			if ($($likeLabel).hasClass("ui-checkboxradio-checked"))
				likesCount--;
			else
				likesCount++;
			console.log(likesCount);
			$($likeButton).checkboxradio("option", "label", likesCount);
			$($likeLabel).attr("data-likes-count", likesCount);
		}
	});
});
