/* eslint-disable no-undef */
// jquery объявлена вебпаком
import 'jquery-ui/ui/widgets/slider';
import 'jquery-ui/themes/base/slider.css';

import { clamp, formatNumber } from '../../common/functions';

function sliderHandlerValueChange(event, ui) {
  $(ui.handle).attr('sliderHandleValue', ui.value);
}

// region range slider
function sliderValuesChange(event, ui) {
  $(ui.handle).closest('.slider').find('.slider__value').text(
    `${formatNumber(ui.values[0], ' ')}₽ - ${formatNumber(ui.values[1], ' ')}₽`,
  );
}
// endregion

// region single slider
function sliderValueChange(event, ui) {
  $(ui.handle).closest('.slider').find('.slider__value').text(
    `${formatNumber(ui.value, ' ')}₽`,
  );
}

// ищем слайдер, но не с диапазоном, а только одиночным значением
function initSlider() {
  const $slider = $(this);
  const minimalValue = Number($slider.attr('data-min'));
  const maximumValue = Number($slider.attr('data-max'));
  const step = Number($slider.attr('data-step'));
  const isRange = $slider.hasClass('slider__control_range');

  $slider.slider({
    min: minimalValue,
    max: maximumValue,
    step,
    range: isRange,
    animate: 'fast',
    change: isRange ? sliderValuesChange : sliderValueChange,
    slide: sliderHandlerValueChange,
  });

  const initialValues = [
    clamp($slider.attr('data-firstValue'), minimalValue, maximumValue),
  ];

  if (isRange) {
    const secondValue = $slider.attr('data-secondValue');
    initialValues.push(clamp(secondValue, minimalValue, maximumValue));

    $slider.slider('values', initialValues);
    $slider.children('.ui-slider-handle').first().attr('sliderHandleValue', initialValues[0]);
    $slider.children('.ui-slider-handle').last().attr('sliderHandleValue', initialValues[1]);
  } else {
    $slider.slider('value', initialValues[0]);
    $slider.children('.ui-slider-handle').first().attr('sliderHandleValue', initialValues[0]);
  }
}
// endregion

function initSliders() {
  const $sliders = $('.slider__control');
  $sliders.each(initSlider);
}

export default initSliders;
