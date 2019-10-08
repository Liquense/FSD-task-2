import "./roomDetails.pug"
import "./roomDetails.scss"

import "../../common"
import "../../blocks/donutChart/donutChart"
import "../../blocks/Comment/Comment"
import "../../pageElements/header/header"
import "../../pageElements/footer/footer"
import "../../blocks/List/list"
import "../../Cards/bookingCard/bookingCard"

$(".roomDetails__donutChart").each(function () {
	const $donutContainer = $(this);
	$donutContainer.donutChart({
		data: [
			{caption: "Великолепно", value: 520, firstColor: "#FFE39C", secondColor: "#FFBA9C"},
			{caption: "Хорошо", value: 260, firstColor: "#6FCF97", secondColor: "#66D2EA"},
			{caption: "Удовлетворительно", value: 260, firstColor: "#BC9CFF", secondColor: "#8BA4F9", isActive: true},
			{caption: "Разочарован", value: 10, firstColor: "#919191", secondColor: "#3D4975"},
		],
		defaultStyle: {
			outerRadius: 120,
			innerRadius: 116,
		},
		activeStyle: {
			outerRadius: 120,
			innerRadius: 110,
		},
		arcsGap: 2
	});
});
