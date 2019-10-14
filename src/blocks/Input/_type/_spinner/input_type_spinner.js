import "jquery-ui/ui/widgets/spinner"

export const decreaseButtonClasses = "input__dropdownDecrease_type_dropdown input__button_type_spinner ui-spinner-button ui-spinner-down";
export const increaseButtonClasses = "input__dropdownIncrease_type_dropdown input__button_type_spinner ui-spinner-button ui-spinner-up";
//морф, чтобы кнопки были по бокам
$.widget("ui.spinner", $.ui.spinner, {
	_enhance: function () {
		this.uiSpinner = this.element
		.attr("autocomplete", "off")
		.wrap(this._uiSpinnerHtml())
		.parent()

		// Add buttons
		.prepend(this._buttonHtml()[0])
		.append(this._buttonHtml()[1]);
	},
	_buttonHtml: function () {
		return [
			`<button class="${decreaseButtonClasses}">-</button>`,
			`<button class="${increaseButtonClasses}">+</button>`];
	},
	//обёртка своя есть
	_uiSpinnerHtml: function () {
		return "";
	}
});

$(".input_type_dropdown").each(function () {
	let $spinners = $(this).find(".input__value_type_spinner");

	let spinner = $spinners.spinner({
		min: $spinners.attr("data-min"),
		max: $spinners.attr("data-max"),
	});

	$spinners.each(function () {
		const $spinner = $(this);
		const spinnerValue = $spinner.attr("value");

		disableButtonsAtExtremum(
			$spinner,
			spinnerValue
		);
		$spinner.on("spin", function (event, ui) {
			disableButtonsAtExtremum(
				$spinner,
				ui.value
			);
		});
	});
});

export function disableButtonsAtExtremum($spinner, currentValue) {
	const disabledButtonClass = "input__button_disabled";
	const min = $spinner.attr("data-min");
	const max = $spinner.attr("data-max");
	const $decreaseButton = $spinner.siblings(".input__dropdownDecrease_type_dropdown");
	const $increaseButton = $spinner.siblings(".input__dropdownIncrease_type_dropdown");

	console.log(`min: ${min} curr: ${currentValue} max: ${max}`);

	if (currentValue <= min) {
		$decreaseButton.addClass(disabledButtonClass);
	} else {
		$decreaseButton.removeClass(disabledButtonClass);
	}
	if (currentValue >= max) {
		$increaseButton.addClass(disabledButtonClass);
	} else {
		$increaseButton.removeClass(disabledButtonClass);
	}
}
