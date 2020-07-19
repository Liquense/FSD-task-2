import initBlocks from '../../common/dynamicInit';
import Slider from './slider';

function initSliders(rootElement) {
  return initBlocks(rootElement, '.js-slider', Slider);
}

export default initSliders;
