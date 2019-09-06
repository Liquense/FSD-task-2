import "slick-carousel"
import "../../../node_modules/slick-carousel/slick/slick.css"

import "./carousel.scss"

$(document).ready(function () {
	$('.carousel').slick({
		dots: true,
		arrows: false,
	});
});
