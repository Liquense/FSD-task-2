/* eslint-disable no-undef */
// jquery объявлена вебпаком
import 'jquery-ui/ui/widgets/slider';
import 'jquery-ui/themes/base/slider.css';
import { formatNumber } from '../../common/functions';

export function sliderHandlerValueChange(event, ui) {
  $(ui.handle).attr('sliderHandleValue', ui.value);
}

export function sliderValuesChange(event, ui) {
  $(ui.handle).closest('.slider').find('.slider__value').text(
    `${formatNumber(ui.value, ' ')}₽`,
  );
}
