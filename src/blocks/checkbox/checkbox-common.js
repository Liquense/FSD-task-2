/* eslint-disable no-undef */
// jQuery объявлена глобально вебпаком
/**
 * Инициирует чекбокс и возвращает его
 * @param jquerySelector можно передавать как селектор, так и JQ-объект
 * @param classes
 * @returns {*|jQuery}
 */
export default function initCheckbox(jquerySelector, classes) {
  const $hiddenInput = $(jquerySelector);
  function initialization() {
    const $singleInput = $(this);

    if ($singleInput.data('uiCheckboxradio')) return; // чтобы не инициализировать лишнего

    const checkbox = $singleInput.checkboxradio({
      classes: {
        'ui-checkboxradio-icon': classes.icon,
        'ui-checkboxradio-icon-space': classes.iconSpace,
      },
    });
    const isChecked = $singleInput.attr('data-isChecked');

    if (isChecked === 'true') {
      checkbox.attr('checked', 'checked').change();
    }
  }

  $hiddenInput.each(initialization);
}
