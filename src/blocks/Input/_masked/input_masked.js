/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком
import '../../../../vendor/jquery.maskedinput/src/jquery.maskedinput';

const $document = $(document);
$document.ready(() => {
  $.mask.definitions.m = '[012]';
  $.mask.definitions.d = '[0123]';

  const $maskedInput = $('.input__control_masked');
  $maskedInput.mask('99.99.9999',
    {
      placeholder: 'ДД.ММ.ГГГГ',
      autoclear: false,
    });
});
