/* eslint-disable no-undef */
// jquery импортирована вебпаком
import './ui-kit__cards.scss';
import '../../../Cards/findRoomCard/findRoomCard';
import '../../../Cards/booking-card/booking-card';
import '../../../Cards/loginCard/loginCard';
import initRegistrationCard from '../../../Cards/registrationCard/registrationCard';
import '../../../Cards/roomPreviewCard/roomPreviewCard';
import '../../../blocks/Input/_type/_datepicker/input_type_datepicker';


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
