/* eslint-disable no-undef */
// jquery объявлена вебпаком
import 'jquery-ui/ui/widgets/slider';
import 'jquery-ui/themes/base/slider.css';
import { formatNumber } from '../../common/functions';

function sliderValuesChange(event, ui) {
  $(ui.handle).closest('.slider').find('.slider__value').text(
    `${formatNumber(ui.value, ' ')}₽`,
  );
}

export default function sliderHandlerValueChange(event, ui) {
  $(ui.handle).attr('sliderHandleValue', ui.value);
}

// ищем слайдер, но не с диапазоном, а только одиночным значением
const $sliderControl = $('.slider__control:not(.slider__control_range)');
function initSlider() {
  const minimalValue = Number($(this).attr('data-min'));
  const maximumValue = Number($(this).attr('data-max'));
  const step = Number($(this).attr('data-step'));
  const initialValue = Number($(this).attr('data-firstValue'));

  $(this).slider({
    min: minimalValue,
    max: maximumValue,
    value: initialValue,
    step,
    animate: 'fast',
    change: sliderValuesChange,
    slide: sliderHandlerValueChange,
  });

  $(this).children('.ui-slider-handle').first().attr('sliderHandleValue', initialValue);
}
$sliderControl.each(initSlider);
