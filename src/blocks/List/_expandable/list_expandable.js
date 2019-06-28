import "jquery-ui/ui/effects/effect-fade"
import "./list_expandable.scss"

$(".list_expandable").each(function () {
    let expandableTitle = $(this).find(".list__title_expandable");
    let expandableContainer = $(this).find(".list__container_expandable");

    $(expandableTitle).click(function () {
        $(this).toggleClass("list__expandArrow_expanded");

        $(expandableContainer).toggle("fade", [], 200);
        $(expandableContainer).toggleClass("list__container_visible");
    });
});
