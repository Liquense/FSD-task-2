import "jquery-ui/ui/widgets/checkboxradio"
import "./Checkbox.scss"
//type
import "./_type/_default/Checkbox_type_default"
import "./_type/_radio/Checkbox_type_radio"
import "./_type/_toggle/Checkbox_type_toggle"
import "./_type/_like/checkbox_type_like"
//rich
import "./_rich/Checkbox_rich.scss"

/**
 * Инициирует чекбокс и возвращает его
 * @param jquerySelector можно передавать как селектор, так и JQ-объект
 * @param classes
 * @returns {*|jQuery}
 */
export function initCheckbox(jquerySelector, classes) {
	const $hiddenInput = $(jquerySelector);

	$hiddenInput.each(function () {
		const $singleInput = $(this);
		const checkbox = $singleInput.checkboxradio({
			classes: {
				"ui-checkboxradio-icon": classes.icon,
				"ui-checkboxradio-icon-space": classes.iconSpace
			}
		});
		const isChecked = $singleInput.attr("data-isChecked");

		if (isChecked === "true") {
			checkbox.attr("checked","checked").change();
		}
	});
}
