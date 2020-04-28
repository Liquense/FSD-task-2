/* eslint-disable no-undef */
// jQuery объявлена глобально вебпаком
import './checkbox_type_like.scss';
import initCheckbox from '../../Checkbox';

const $likeCheckboxes = $('.checkbox__label_type_like');
function init() {
  const $likeLabel = $(this);

  const $likeButton = $($likeLabel.find('.checkbox__hiddenButton_type_like')[0]);
  initCheckbox($likeButton, {
    icon: 'checkbox__button checkbox__button_type_like',
    iconSpace: 'checkbox__buttonBorder_type_like',
  });

  if (!$likeLabel.attr('data-likes-count')) { return; }

  let likesCount = $likeLabel.attr('data-likes-count').trim();
  $likeLabel.click((e) => {
    if ($(e.target)[0] === $($likeLabel)[0]) {
      if ($($likeLabel).hasClass('ui-checkboxradio-checked')) { likesCount -= 1; } else { likesCount += 1; }

      $($likeButton).checkboxradio('option', 'label', likesCount);
      $($likeLabel).attr('data-likes-count', likesCount);
    }
  });
}

$likeCheckboxes.each(init);
