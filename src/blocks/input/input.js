/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком
import 'jquery.maskedinput/src/jquery.maskedinput';

// region Masked
const $document = $(document);
$document.ready(($) => {
  $.mask.definitions.D = '[0-3]';
  $.mask.definitions.M = '[0-1]';
  $.mask.definitions.Y = '[1-2]';

  const $maskedInput = $('.input_type_masked__control');
  const placeholder = $maskedInput.attr('placeholder');

  $maskedInput.mask('D9.M9.Y999',
    {
      placeholder,
      autoclear: false,
    });
});
// endregion
