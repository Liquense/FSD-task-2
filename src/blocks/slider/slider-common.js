/* eslint-disable no-undef */
// jquery объявлена вебпаком
import 'jquery-ui/ui/widgets/slider';
import 'jquery-ui/themes/base/slider.css';

export default function sliderHandlerValueChange(event, ui) {
  $(ui.handle).attr('sliderHandleValue', ui.value);
}
