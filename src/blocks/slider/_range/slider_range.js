/* eslint-disable no-undef */
// jquery объявлена вебпаком
import { clamp } from '../../../common/functions';
import {
  sliderHandlerValueChange,
  sliderValuesChange,
} from '../slider-common';

const $rangeSlider = $('.slider__control_range');
function initRangeSlider() {
  const $slider = $(this);
  const minimalValue = Number($slider.attr('data-min'));
  const maximumValue = Number($slider.attr('data-max'));
  const step = Number($slider.attr('data-step'));

  $slider.slider({
    min: minimalValue,
    max: maximumValue,
    step,
    range: true,
    animate: 'fast',
    change: sliderValuesChange,
    slide: sliderHandlerValueChange,
  });

  const initialValues = [];
  const
    firstValue = $slider.attr('data-firstValue');
  const secondValue = $slider.attr('data-secondValue');
  initialValues.push(clamp(firstValue, minimalValue, maximumValue));
  initialValues.push(clamp(secondValue, minimalValue, maximumValue));

  $slider.slider('values', initialValues);
  $slider.children('.ui-slider-handle').first().attr('sliderHandleValue', initialValues[0]);
  $slider.children('.ui-slider-handle').last().attr('sliderHandleValue', initialValues[1]);
}

$rangeSlider.each(initRangeSlider);
