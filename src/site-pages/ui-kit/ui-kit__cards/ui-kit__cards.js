/* eslint-disable no-undef */
// jquery импортирована вебпаком
import { initDatepickers } from '../../../blocks/datepicker-block/datepicker-block';
import initRoomPreviewCards from '../../../cards/room-preview-card/room-preview-card';

initDatepickers(); // для работоспособности инлайн календаря
initRoomPreviewCards();

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
