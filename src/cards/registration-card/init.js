import initBlocks from '../../common/dynamicInit';
import RegistrationCard from './registration-card';

function initRegistrationCards(rootElement) {
  return initBlocks(rootElement, '.js-registration-card', RegistrationCard);
}

export default initRegistrationCards;
