import $ from "jquery"

$(document).ready(function () {
    var slider = $(".slider");
    console.log(slider.find(".slider__control"));

    $(".slider__control").slider({
        min: 0,
        max: 15000,
        step: 100,
        range: true,
        values: [5000, 10000],
        animate: "fast",
    });
});
