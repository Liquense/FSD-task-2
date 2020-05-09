/* eslint-disable no-undef */
// jquery импортирована вебпаком
import './ui-kit__cards.scss';
import '../../../cards/find-room-card/find-room-card';
import '../../../cards/booking-card/booking-card';
import '../../../cards/login-card/login-card';
import initRegistrationCard from '../../../cards/registration-card/registration-card';
import '../../../cards/room-preview-card/room-preview-card';
import '../../../blocks/input/_type/_datepicker/input_type_datepicker';


const $datepickerCells = $('.datepicker--cell.datepicker--cell-day');
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

initRegistrationCard();
