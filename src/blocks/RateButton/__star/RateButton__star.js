import "./RateButton__star.scss"

let states = {1: "star_border", 2: "star_half", 3: "star"};
export let setState = function ($star, stateIndex) {
	$star.text(states[stateIndex]);
};
