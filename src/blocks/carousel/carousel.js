import "slick-carousel"
import "../../../node_modules/slick-carousel/slick/slick.css"

import "./carousel.scss"

$(document).ready(function () {
	$('.carousel').each(function () {
		const $carousel = $(this);

		const params = {
			arrows: ($carousel.attr("data-arrows").toLowerCase() === 'true'),
			prevArrow: '<label class="slick-prev"><button type="button" >expand_more</button></label>',
			nextArrow: '<label class="slick-next"><button type="button" >expand_more</button></label>',
			dots: ($carousel.attr("data-dots").toLowerCase() === 'true'),
		};

		console.log(params);
		$carousel.slick(params);
	})
});
