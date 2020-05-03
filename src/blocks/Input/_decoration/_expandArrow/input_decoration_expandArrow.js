/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком

function addClickToArrow(arrowElement, expandableElement, controlElement) {
  $(controlElement).click(() => {
    if ($(arrowElement).hasClass('expanded')) {
      expandableElement.hide();
    } else {
      expandableElement.show();
    }
  });
}

function disableLabelClicks(event) {
  // при клике на заголовок/стрелку итак происходит анфокус и календарь прячется,
  // лишний клик не нужен
  event.preventDefault();
}

export default function initExpandableElement() {
  const $expandArrow = $(this);
  const $control = $(this).siblings('.input__control_decoration_expandArrow');
  const $ownerLabel = $(this).parent();
  let expandableElement;

  // переопределение функций появления и скрытия календарей
  // для взаимодействия с декоратором-стрелкой
  if ($control.hasClass('input__control_type_datepicker')) {
    $control.each(() => {
      expandableElement = $control.data('datepicker');
      expandableElement.update({
        onHide(inst, animationCompleted) {
          if (!animationCompleted) {
            $expandArrow.text('expand_more');
            return;
          }
          $($expandArrow).removeClass('expanded');
          // чтобы лейбловые прокликивания снова заработали
          // нужно показывать календарь при клике на что-то кроме инпута
          $($ownerLabel).unbind('click', disableLabelClicks);
        },
        onShow(inst, animationCompleted) {
          if (!animationCompleted) {
            $expandArrow.text('expand_less');
            return;
          }
          $expandArrow.addClass('expanded');
          $ownerLabel.click(disableLabelClicks);
        },
        todayButton: false,
      });
      // чтобы вызвать onSelect для обновления данных в инпуте
      // (поскольку форматирование переопределено)
      expandableElement.selectDate(expandableElement.selectedDates);
    });
  }
  if (expandableElement) {
    addClickToArrow($expandArrow, expandableElement, $control, $ownerLabel);
  }
}

const $expandArrowInputs = $('.input__arrow_decoration_expandArrow');
$expandArrowInputs.each(initExpandableElement);
