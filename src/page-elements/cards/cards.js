import initBookingCards from '../../cards/booking-card/init';
import initFindRoomCards from '../../cards/find-room-card/init';
import initRoomPreviewCards from '../../cards/room-preview-card/init';
import initDatepickers from '../../blocks/date-picker/init';

initDatepickers();
initBookingCards();
initFindRoomCards();
initRoomPreviewCards();

const $inlineDatepicker = $('.js-cards__inline-date-picker');
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
