import $ from "jquery"

$(document).ready(function () {
    var slider = $(".slider");
    console.log(slider.find(".slider__control"));
});

$(".slider__control").slider({
    range: true,
});
