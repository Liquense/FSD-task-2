import "./checkbox_type_like.scss"

$(".checkbox__label_type_like").each(function () {
    let likeButton;
    let $likeLabel = $(this);
    $(this).find(".checkbox__hiddenButton_type_like").each(function () {
        likeButton = $(this).checkboxradio({
            classes: {
                "ui-checkboxradio-icon": "checkbox__button checkbox__button_type_like",
                "ui-checkboxradio-icon-space": "checkbox__buttonBorder_type_like"
            }
        });
    });

    let likesCount = $($likeLabel).attr("data-likes-count").trim();
    $likeLabel.click(function (e) {
        if ($(e.target)[0] === $($likeLabel)[0]) {
            if ($($likeLabel).hasClass("ui-checkboxradio-checked"))
                likesCount--;
            else
                likesCount++;
            $(likeButton).checkboxradio("option", "label", likesCount);
            $($likeLabel).attr("data-likes-count", likesCount);
        }
    });
});
