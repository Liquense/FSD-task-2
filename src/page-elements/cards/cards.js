import initBookingCards from '../../cards/booking-card/init';
import initFindRoomCards from '../../cards/find-room-card/init';
import initRoomPreviewCards from '../../cards/room-preview-card/init';
import initDatepickers from '../../blocks/date-picker/init';

initDatepickers();
initBookingCards();
initFindRoomCards();
initRoomPreviewCards();

const inlineDatepicker = initDatepickers('.js-cards__inline-date-picker');
inlineDatepicker.mimicCurrentDay(8);
