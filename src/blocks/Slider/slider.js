/* eslint-disable no-undef */
// jquery объявлена вебпаком
import './_range/Slider_range';
import './slider.scss';
import { formatNumber } from '../../common/functions';

function sliderValuesChange(event, ui) {
  $(ui.handle).closest('.slider').find('.slider__value').text(
    `${formatNumber(ui.value, ' ')}₽`,
  );
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
