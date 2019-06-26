import "./checkbox_type_like.scss"

$(".checkbox__label_type_like").each(function () {
    let likeButton;
    let likeLabel = this;
    $(this).find(".checkbox__hiddenButton_type_like").each(function () {
        likeButton = $(this).checkboxradio({
            classes: {
                "ui-checkboxradio-icon": "checkbox__button checkbox__button_type_like",
                "ui-checkboxradio-icon-space": "checkbox__buttonBorder_type_like"
            }
        });
    });

    let likeCount = $(likeLabel).text().trim();
    $(likeLabel).click(function (e) {
        if ($(e.target)[0] === $(likeLabel)[0]) {
            if ($(likeLabel).hasClass("ui-checkboxradio-checked"))
                $(likeButton).checkboxradio("option", "label", --likeCount);
            else
                $(likeButton).checkboxradio("option", "label", ++likeCount);
        }
    });
});
