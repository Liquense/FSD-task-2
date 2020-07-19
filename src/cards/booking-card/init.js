import initBlocks from '../../common/dynamicInit';
import BookingCard from './booking-card';

function initBookingCards(rootElement) {
  return initBlocks(rootElement, '.js-booking-card', BookingCard);
}

export default initBookingCards;
