import initBlocks from '../../utils/dynamicInit';
import Slider from './slider';

function initSliders(rootElement) {
  return initBlocks(rootElement, '.js-slider', Slider);
}

export default initSliders;
