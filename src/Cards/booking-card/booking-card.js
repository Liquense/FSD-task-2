/* eslint-disable no-undef */
// jquery объявлена вебпаком
import './booking-card.scss';
import '../../blocks/Input/input';
import { setInitialDates } from '../../blocks/twoCalendarRangePicker/twoCalendarRangePicker';
import { formatNumber, ruDeclination } from '../../common/functions';

function getTotalCost(priceData) {
  const totalCost = Number.parseFloat(priceData.stayingSum)
    + Number.parseFloat(priceData.servicesSum)
    + Number.parseFloat(priceData.addServicesSum);
  return totalCost > 0 ? totalCost : 0;
}

function writeTotalCost($totalCostSpan, priceData) {
  const totalBookingCost = getTotalCost(priceData);
  const formattedTotalBookingCost = formatNumber(totalBookingCost, ' ');

  $totalCostSpan.text(`${formattedTotalBookingCost}${priceData.currency}`);
}


function writeFormattedDailyPrice($dailyPriceSpan, priceToShow, currency) {
  $dailyPriceSpan.text(`${priceToShow}${currency}`);
}

function getDaysFromDateRange(dateRange) {
  if (dateRange[0]) {
    return dateRange[1] ? (dateRange[1] - dateRange[0]) / (24 * 60 * 60 * 1000) : 0;
  }

  return 0;
}

function writeStayingCostsToSpans(
  $calculatingStayingCostSpan, $stayingSumSpan, priceData, daysCount,
) {
  const declinedPeriod = ruDeclination(daysCount, 'сут|ки|ок|ок');
  $calculatingStayingCostSpan.text(
    `${priceData.priceToShow}${priceData.currency}`
    + ` х ${daysCount} ${declinedPeriod}`,
  );
  priceData.stayingSum = priceData.price * daysCount;
  const sumToPrint = formatNumber(priceData.stayingSum, ' ');
  $stayingSumSpan.text(`${sumToPrint}${priceData.currency}`);
}

function getOverallServicesData($servicesEnumSpan, $servicesSumSpan, priceData) {
  const servicesData = $servicesEnumSpan.attr('data-services');
  const services = JSON.parse(servicesData);

  let overallServicesCost = 0;
  let servicesString = 'Сбор за услуги: ';

  services.forEach((service) => {
    overallServicesCost += service.cost;
    servicesString
      += `${service.name} `
      + `${formatNumber(Math.abs(service.cost), ' ')}`
      + `${priceData.currency}, `;
  });

  servicesString = servicesString.substring(0, servicesString.length - 2);
  priceData.servicesSum = overallServicesCost;
  overallServicesCost = overallServicesCost > 0 ? overallServicesCost : 0;

  return { text: servicesString, sum: overallServicesCost };
}

function writeServicesToSpans($servicesEnumSpan, $servicesSumSpan, currency, servicesData) {
  $servicesEnumSpan.text(servicesData.text);
  $servicesSumSpan.text(`${servicesData.sum}${currency}`);
}

function addRefreshCheckOnInputChange(
  $firstDatePicker, $secondDatePicker, $stayingCostRow, $totalCostSpan, priceData,
) {
  function refreshCheckValuesOnDateChange(event) {
    const $calculatingStayingCostSpan = $stayingCostRow.children('.booking-card__staying-cost-calculation');
    const $stayingSumSpan = $stayingCostRow.children('.booking-card__staying-cost-sum');
    const datePickerData = $(event.target).data('datepicker');
    const daysCount = getDaysFromDateRange(datePickerData.selectedDates);

    writeStayingCostsToSpans(
      $calculatingStayingCostSpan,
      $stayingSumSpan,
      priceData,
      daysCount,
    );
    writeTotalCost($totalCostSpan, priceData);
  }

  $firstDatePicker.change(refreshCheckValuesOnDateChange);
  $secondDatePicker.change(refreshCheckValuesOnDateChange);
}

function initBookingCard() {
  const $bookingCard = $(this);

  const $dailyPrice = $bookingCard.find('.booking-card__daily-price');
  const priceAmount = $dailyPrice.attr('data-dailyPrice');
  const currency = $dailyPrice.attr('data-currency');
  const priceToShow = formatNumber(priceAmount, ' ');
  writeFormattedDailyPrice($dailyPrice, priceToShow, currency);

  const $rangePicker = $bookingCard.find('.booking-card__range-picker');
  const $firstDatepicker = $rangePicker.find('.twoCalendarRangePicker__firstDatepicker .input__control_type_datepicker');
  const $secondDatepicker = $rangePicker.find('.twoCalendarRangePicker__secondDatepicker .input__control_type_datepicker');
  const $stayingCostRow = $bookingCard.find('.booking-card__staying-cost-row');

  const priceData = {
    price: priceAmount,
    currency,
    priceToShow,
    servicesData: 0,
    addServicesSum: 0,
    stayingSum: 0,
  };
  const $totalCostSpan = $bookingCard.find('.booking-card__summary-total-cost');
  addRefreshCheckOnInputChange(
    $firstDatepicker,
    $secondDatepicker,
    $stayingCostRow,
    $totalCostSpan,
    priceData,
  );

  setInitialDates($rangePicker, $firstDatepicker);

  const $servicesEnumSpan = $bookingCard.find('.booking-card__services');
  const $servicesSumSpan = $bookingCard.find('.booking-card__services-sum');

  const servicesData = getOverallServicesData($servicesEnumSpan, $servicesSumSpan, priceData);
  const $addServicesSumSpan = $bookingCard.find('.booking-card__additional-services-sum');
  priceData.addServicesSum = $addServicesSumSpan.attr('data-addServices');

  writeServicesToSpans($servicesEnumSpan, $servicesSumSpan, currency, servicesData);
  writeTotalCost($totalCostSpan, priceData);
}

const $bookingCards = $('.booking-card');
$bookingCards.each(initBookingCard);
