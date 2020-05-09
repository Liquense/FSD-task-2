/* eslint-disable no-undef */
// jQuery объявлена глобально вебпаком
import './checkbox_type_like.scss';
import initCheckbox from '../../checkbox-common';

function initLikeCheckbox() {
  const $likeLabel = $(this);
  const $likeButton = $($likeLabel.find('.checkbox__hidden-button_type_like')[0]);

  const checkboxRadioData = $likeButton.data('uiCheckboxradio');
  console.log("before:" + $likeLabel.attr('data-likes-count'));
  initCheckbox($likeButton, {
    icon: 'checkbox__button checkbox__button_type_like',
  });
  console.log("after:" + $likeLabel.attr('data-likes-count'));

  const gradientBorderElement = document.createElement('div');
  gradientBorderElement.classList.add('checkbox__button-border_type_like');
  $likeLabel.prepend(gradientBorderElement);

  if (Number.isNaN(
    Number.parseInt($likeLabel.attr('data-likes-count'), 10),
  )) {
    return;
  }

  if (checkboxRadioData) return; // чтобы не навешивать лишних обработчиков

  let likesCount = Number.parseInt($likeLabel.attr('data-likes-count'), 10);
  $likeButton.change(() => {
    console.log(likesCount);
    const $likeText = $($likeLabel.find('.checkbox__text_type_like')[0]);

    likesCount = $likeLabel.hasClass('ui-checkboxradio-checked') ? likesCount + 1 : likesCount - 1;

    $likeText.text(likesCount);
    $likeLabel.attr('data-likes-count', likesCount);
  });
}

export default function initLikeCheckboxes() {
  const $likeCheckboxes = $('.checkbox__label_type_like');
  $likeCheckboxes.each(initLikeCheckbox);
}
