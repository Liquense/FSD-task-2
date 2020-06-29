/* eslint-disable no-undef */
// jquery импортирована вебпаком
import initRegistrationCard from '../../../cards/registration-card/registration-card';
import initBookingCards from '../../../cards/booking-card/booking-card';
import { initDatepickerInputs } from '../../../blocks/datepicker/datepicker';

initDatepickerInputs(); // для работоспособности инлайн календаря
initRegistrationCard();
initBookingCards();

const $inlineDatepicker = $('.ui-kit__datepicker_inline');
const $datepickerCells = $inlineDatepicker.find('.datepicker--cell.datepicker--cell-day');
// визуальные изменения для соответствия макету
$datepickerCells.each((index, element) => {
  const $datepickerCell = $(element);
  if ($datepickerCell.attr('data-date') === '8') {
    $datepickerCell.addClass('-current-');
  }
  if ($datepickerCell.attr('data-month') === '7') {
    $datepickerCell.removeClass('-disabled-');
  }
});
