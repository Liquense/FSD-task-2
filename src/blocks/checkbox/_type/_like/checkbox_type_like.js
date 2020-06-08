/* eslint-disable no-undef */
// jQuery объявлена глобально вебпаком
import './checkbox_type_like.scss';
import initCheckbox from '../../checkbox-common';

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

export default function initLikeCheckboxes() {
  const $likeCheckboxes = $('.checkbox_type_like__label');
  $likeCheckboxes.each(initLikeCheckbox);
}
