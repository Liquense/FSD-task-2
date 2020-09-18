import { formatNumber, ruDeclination } from '../../common/functions';
import initDropdowns from '../../blocks/dropdown/init';
import initTwoCalendarDatepickers from '../../blocks/double-date-picker/init';

class BookingCard {
  $bookingCard;

  $dailyPrice;

  $dropdownWrap;

  $rangeDatepickerWrap;

  $servicesEnum;

  $servicesCost;

  $stayingCostCalculation;

  $stayingCost;

  $additionalServicesCostSum;

  $totalCost;

  guestsDropdown;

  doubleDatePicker;

  servicesCostSum;

  additionalServicesCostSum;

  daysAmount;

  dailyPrice;

  currency;

  servicesData;

  get stayingCost() {
    return this.dailyPrice * this.daysAmount;
  }

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initProperties();
    this._initBookingCard();
    this._updateDailyPrice();
  }

  _initElements(rootElement) {
    this.$bookingCard = $(rootElement);
    this.$dailyPrice = this.$bookingCard.find('.js-booking-card__daily-price');
    this.$dropdownWrap = this.$bookingCard.find('.js-booking-card__guests-dropdown');
    this.$rangeDatepickerWrap = this.$bookingCard.find('.js-booking-card__range-picker');
    this.$totalCost = this.$bookingCard.find('.js-booking-card__summary-total-cost');
    this.$servicesEnum = this.$bookingCard.find('.js-booking-card__services');
    this.$servicesCost = this.$bookingCard.find('.js-booking-card__services-sum');
    this.$additionalServicesCostSum = this.$bookingCard.find('.js-booking-card__additional-services-sum');
    this.$stayingCostCalculation = this.$bookingCard.find('.js-booking-card__staying-cost-calculation');
    this.$stayingCost = this.$bookingCard.find('.js-booking-card__staying-cost-sum');
  }

  _initProperties() {
    this.dailyPrice = this.$dailyPrice.attr('data-daily-price');
    this.currency = this.$dailyPrice.attr('data-currency');
    this.additionalServicesCostSum = this.$additionalServicesCostSum.attr('data-addServices');
  }

  _initBookingCard() {
    this._initGuestsDropdown();
    this._initRangeDatepicker();
    this._addRefreshCostsOnInputChange();
    this._updateDaysAmount();

    this._updateServicesData();
    this._refreshServicesCaption();
    this._refreshDynamicCosts();
  }

  _initGuestsDropdown() {
    this.guestsDropdown = initDropdowns(this.$dropdownWrap);
  }

  _initRangeDatepicker() {
    this.doubleDatePicker = initTwoCalendarDatepickers(this.$rangeDatepickerWrap);
  }

  _addRefreshCostsOnInputChange() {
    this.doubleDatePicker.addSelectCallback(this._handleDatepickerChange);
  }

  _handleDatepickerChange = () => {
    this._updateDaysAmount();
    this._refreshDynamicCosts();
  }

  _refreshDynamicCosts() {
    this._refreshStayingCost();
    this._refreshTotalCost();
  }

  _refreshStayingCost() {
    const declinedPeriod = ruDeclination(this.daysAmount, 'сут|ки|ок|ок');

    const dailyPriceToPrint = formatNumber(this.dailyPrice, ' ');
    this.$stayingCostCalculation.text(
      `${dailyPriceToPrint}${this.currency} х ${this.daysAmount} ${declinedPeriod}`,
    );

    const sumToPrint = formatNumber(this.stayingCost, ' ');
    this.$stayingCost.text(`${sumToPrint}${this.currency}`);
  }

  static _secondsToDays = (secondsAmount) => Math.round(secondsAmount / (24 * 60 * 60 * 1000));

  _updateDaysAmount() {
    const dateRange = this.doubleDatePicker.getSelectedDates();

    let daysAmount;
    if (dateRange[0] && dateRange[1]) {
      const secondsAmount = Math.round((dateRange[1] - dateRange[0]));
      daysAmount = BookingCard._secondsToDays(secondsAmount);
    }

    this.daysAmount = daysAmount || 0;
  }

  _updateServicesData() {
    const servicesEnum = this.$servicesEnum.attr('data-services');
    const services = JSON.parse(servicesEnum);

    let overallServicesCost = 0;
    let servicesString = 'Сбор за услуги: ';

    services.forEach((service) => {
      overallServicesCost += Number.parseFloat(service.cost);
      servicesString += `${service.name} ${formatNumber(Math.abs(service.cost), ' ')}${this.currency}, `;
    });

    servicesString = servicesString.substring(0, servicesString.length - 2);
    this.servicesCostSum = overallServicesCost;
    overallServicesCost = overallServicesCost > 0 ? overallServicesCost : 0;

    this.servicesData = { text: servicesString, sum: overallServicesCost };
  }

  _refreshServicesCaption() {
    this.$servicesEnum.text(this.servicesData.text);
    this.$servicesCost.text(`${this.servicesData.sum}${this.currency}`);
  }

  _refreshTotalCost() {
    const totalBookingCost = this._getTotalCost();
    const formattedTotalBookingCost = formatNumber(totalBookingCost, ' ');

    this.$totalCost.text(`${formattedTotalBookingCost}${this.currency}`);
  }

  _getTotalCost() {
    const totalCost = Number.parseFloat(this.stayingCost)
      + Number.parseFloat(this.servicesCostSum)
      + Number.parseFloat(this.additionalServicesCostSum);
    return Math.max(totalCost, 0);
  }

  _updateDailyPrice() {
    this.$dailyPrice.text(`${formatNumber(this.dailyPrice, ' ')}${this.currency}`);
  }
}

export default BookingCard;
