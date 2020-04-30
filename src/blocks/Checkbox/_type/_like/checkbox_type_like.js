/* eslint-disable no-undef */
// jQuery объявлена глобально вебпаком
import './checkbox_type_like.scss';
import initCheckboxes from '../../CheckboxCommon';

function initLikeCheckbox() {
  const $likeLabel = $(this);

  const $likeButton = $($likeLabel.find('.checkbox__hiddenButton_type_like')[0]);
  initCheckboxes($likeButton, {
    icon: 'checkbox__button checkbox__button_type_like',
    iconSpace: 'checkbox__buttonBorder_type_like',
  });

  if (!$likeLabel.attr('data-likes-count')) { return; }

  let likesCount = Number.parseInt($likeLabel.attr('data-likes-count'), 10);
  $likeLabel.click((event) => {
    if ($(event.target)[0] === $likeLabel[0]) {
      likesCount = $($likeLabel).hasClass('ui-checkboxradio-checked')
        ? likesCount - 1 : likesCount + 1;

      $($likeButton).checkboxradio('option', 'label', likesCount);
      $($likeLabel).attr('data-likes-count', likesCount);
    }
  });
}

export default function initLikeCheckboxes() {
  const $likeCheckboxes = $('.checkbox__label_type_like');
  $likeCheckboxes.each(initLikeCheckbox);
}
