import initBookingCards from '../../../cards/booking-card/init';
import initFindRoomCards from '../../../cards/find-room-card/init';
import initRegistrationCards from '../../../cards/registration-card/init';
import initRoomPreviewCards from '../../../cards/room-preview-card/init';
import initDatepickers from '../../../blocks/datepicker-block/init';

initDatepickers();
initBookingCards();
initFindRoomCards();
initRegistrationCards();
initRoomPreviewCards();

const $inlineDatepicker = $('.js-ui-kit__datepicker_inline');
const $datepickerCells = $inlineDatepicker.find('.datepicker--cell.datepicker--cell-day');

$datepickerCells.each((index, element) => {
  const $datepickerCell = $(element);
  if ($datepickerCell.attr('data-date') === '8') {
    $datepickerCell.addClass('-current-');
  }
  if ($datepickerCell.attr('data-month') === '7') {
    $datepickerCell.removeClass('-disabled-');
  }
});
