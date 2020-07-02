/* eslint-disable no-undef */
// jQuery объявлена глобально вебпаком
import 'jquery-ui/ui/widgets/checkboxradio';

export function initCheckbox(jquerySelector, { icon, iconSpace }) {
  const $hiddenInput = $(jquerySelector);

  function initialization() {
    const $singleInput = $(this);
    if ($singleInput.data('uiCheckboxradio')) return; // чтобы не инициализировать лишнего

    const checkbox = $singleInput.checkboxradio({
      classes: {
        'ui-checkboxradio-icon': icon,
        'ui-checkboxradio-icon-space': iconSpace,
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
  initCheckbox('.js-checkbox__hidden-button_type_toggle', {
    icon: 'checkbox__button checkbox__button_type_toggle',
    iconSpace: 'checkbox__icon-space checkbox__icon-space_type_toggle',
  });
}

function initRadioCheckboxes() {
  initCheckbox('.js-checkbox__hidden-button_type_radio',
    {
      icon: 'checkbox__button checkbox__button_type_radio',
      iconSpace: 'checkbox__icon-space checkbox__icon-space_type_radio',
    });
}

function initLikeCheckbox() {
  const $likeLabel = $(this);
  const $likeButton = $likeLabel.find('.js-checkbox__hidden-button_type_like');
  const $likeText = $likeLabel.find('.js-checkbox__text_type_like');

  const checkboxRadioData = $likeButton.data('uiCheckboxradio');
  if (checkboxRadioData) return; // чтобы не навешивать лишних обработчиков

  initCheckbox($likeButton, { icon: 'checkbox__button checkbox__button_type_like' });

  const gradientBorderElement = document.createElement('div');
  gradientBorderElement.classList.add('checkbox__button-border_type_like');
  $likeLabel.prepend(gradientBorderElement);

  let likesCount = Number.parseInt($likeLabel.attr('data-likes-count'), 10);
  if (Number.isNaN(likesCount)) return;

  $likeButton.change(() => {
    likesCount = $likeLabel.hasClass('ui-checkboxradio-checked') ? likesCount + 1 : likesCount - 1;

    $likeText.text(likesCount);
    $likeLabel.attr('data-likes-count', likesCount);
  });
}

function initLikeCheckboxes() {
  const $likeCheckboxes = $('.js-checkbox__label_type_like');
  $likeCheckboxes.each(initLikeCheckbox);
}

function initDefaultCheckboxes() {
  initCheckbox('.js-checkbox__hidden-button_type_default', {
    icon: 'checkbox__button js-checkbox__button_type_default checkbox__button_type_default',
    iconSpace: 'checkbox__icon-space checkbox__icon-space_type_default',
  });

  const $defaultCheckboxButtons = $('.js-checkbox__button_type_default');
  $defaultCheckboxButtons.text('check');
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
