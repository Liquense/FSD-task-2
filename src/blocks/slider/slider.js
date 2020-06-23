/* eslint-disable no-undef */
// jquery объявлена вебпаком
import './_range/slider_range';
import './slider.scss';
import sliderHandlerValueChange from './slider-common';
import { formatNumber } from '../../common/functions';

function sliderValueChange(event, ui) {
  $(ui.handle).closest('.slider').find('.slider__value').text(
    `${formatNumber(ui.value, ' ')}₽`,
  );
}

// ищем слайдер, но не с диапазоном, а только одиночным значением
const $sliderControl = $('.slider__control:not(.slider__control_range)');
function initSlider() {
  const $slider = $(this);
  const minimalValue = Number($slider.attr('data-min'));
  const maximumValue = Number($slider.attr('data-max'));
  const step = Number($slider.attr('data-step'));
  const initialValue = Number($slider.attr('data-firstValue'));

  $slider.slider({
    min: minimalValue,
    max: maximumValue,
    step,
    animate: 'fast',
    change: sliderValueChange,
    slide: sliderHandlerValueChange,
  });
  $slider.slider('value', initialValue);

  $(this).children('.ui-slider-handle').first().attr('sliderHandleValue', initialValue);
}
$sliderControl.each(initSlider);
