import 'jquery-ui/ui/widgets/slider';
import 'jquery-ui/themes/base/slider.css';

import { clamp, formatNumber } from '../../common/functions';

class Slider {
  $slider;

  $sliderControl;

  $sliderValueCaption;

  min;

  max;

  step;

  isRange;

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initProperties();
    this._initPlugin();
  }

  _initElements(rootElement) {
    this.$slider = $(rootElement);
    this.$sliderControl = this.$slider.find('.js-slider__control');
    this.$sliderValueCaption = this.$slider.find('.js-slider__value');
  }

  _initProperties() {
    this.min = Number(this.$sliderControl.attr('data-min'));
    this.max = Number(this.$sliderControl.attr('data-max'));
    this.step = Number(this.$sliderControl.attr('data-step'));
    this.isRange = this.$sliderControl.hasClass('slider__control_range');
  }

  _initPlugin() {
    this.$sliderControl.slider({
      min: this.min,
      max: this.max,
      step: this.step,
      range: this.isRange,
      animate: 'fast',
      change: this.isRange ? this._handleValuesChange : this._handleValueChange,
      slide: Slider._handleHandlerValueChange,
    });

    const initialValues = [
      clamp(this.$sliderControl.attr('data-first-value'), this.min, this.max),
    ];
    if (this.isRange) {
      const secondValue = this.$sliderControl.attr('data-second-value');
      initialValues.push(clamp(secondValue, this.min, this.max));
      this._setValues(initialValues);
    } else {
      this._setValue(initialValues[0]);
    }
  }

  _setValue(value) {
    this.$sliderControl.slider('value', value);
    this.$sliderControl.find('.ui-slider-handle').first().attr('sliderHandleValue', value);
  }

  _setValues(values) {
    this.$sliderControl.slider('values', values);
    this.$sliderControl.find('.ui-slider-handle').first().attr('sliderHandleValue', values[0]);
    this.$sliderControl.find('.ui-slider-handle').last().attr('sliderHandleValue', values[1]);
  }

  static _handleHandlerValueChange(event, ui) {
    $(ui.handle).attr('sliderHandleValue', ui.value);
  }

  _handleValuesChange = (event, ui) => {
    const firstValueText = `${formatNumber(ui.values[0], ' ')}₽`;
    const secondValueText = `${formatNumber(ui.values[1], ' ')}₽`;
    this.$sliderValueCaption.text(`${firstValueText} - ${secondValueText}`);
  }

  _handleValueChange = (event, ui) => {
    const firstValueText = `${formatNumber(ui.value, ' ')}₽`;
    this.$sliderValueCaption.text(firstValueText);
  }
}

export default Slider;
