/* eslint-disable no-undef */
// jQuery объявлена глобально вебпаком
import 'jquery-ui/ui/widgets/checkboxradio';

export function initCheckbox(jquerySelector, classes) {
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

function initToggleCheckboxes() {
  initCheckbox('.checkbox_type_toggle__hidden-button', {
    icon: 'checkbox__button checkbox_type_toggle__button',
    iconSpace: 'checkbox__icon-space checkbox_type_toggle__icon-space',
  });
}

function initRadioCheckboxes() {
  initCheckbox('.checkbox_type_radio__hidden-button',
    {
      icon: 'checkbox__button checkbox_type_radio__button',
      iconSpace: 'checkbox__icon-space checkbox_type_radio__iconSpace',
    });
}

function initLikeCheckbox() {
  const $likeLabel = $(this);
  const $likeButton = $($likeLabel.find('.checkbox_type_like__hidden-button')[0]);

  const checkboxRadioData = $likeButton.data('uiCheckboxradio');
  initCheckbox($likeButton, {
    icon: 'checkbox__button checkbox_type_like__button',
  });

  const gradientBorderElement = document.createElement('div');
  gradientBorderElement.classList.add('checkbox_type_like__button-border');
  $likeLabel.prepend(gradientBorderElement);

  if (Number.isNaN(
    Number.parseInt($likeLabel.attr('data-likes-count'), 10),
  )) {
    return;
  }

  if (checkboxRadioData) return; // чтобы не навешивать лишних обработчиков

  let likesCount = Number.parseInt($likeLabel.attr('data-likes-count'), 10);
  $likeButton.change(() => {
    const $likeText = $($likeLabel.find('.checkbox_type_like__text')[0]);

    likesCount = $likeLabel.hasClass('ui-checkboxradio-checked') ? likesCount + 1 : likesCount - 1;

    $likeText.text(likesCount);
    $likeLabel.attr('data-likes-count', likesCount);
  });
}

function initLikeCheckboxes() {
  const $likeCheckboxes = $('.checkbox_type_like__label');
  $likeCheckboxes.each(initLikeCheckbox);
}

initCheckbox('.checkbox_type_default__hidden-button', {
  icon: 'checkbox__button checkbox_type_default__button',
  iconSpace: 'checkbox__icon-space checkbox_type_default__icon-space',
});

function initDefaultCheckboxes() {
  const $defaultCheckboxes = $('.checkbox_type_default__button');
  $defaultCheckboxes.text('check');
}

class Checkbox {
  static initDefault() {
    initDefaultCheckboxes();
  }

  static initLike() {
    initLikeCheckboxes();
  }

  static initRadio() {
    initRadioCheckboxes();
  }

  static initToggle() {
    initToggleCheckboxes();
  }
}

export default Checkbox;
