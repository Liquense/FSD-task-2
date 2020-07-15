/* eslint-disable no-undef */
// jquery импортирована вебпаком
import { importCommon, importContext } from '../../index';

import initBookingCards from '../../cards/booking-card/booking-card';
import DonutChart from '../../blocks/donut-chart/donut-chart';

importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));

const $donutCharts = $('.js-room-details__donut-chart > .js-donut-chart');
$donutCharts.each((index, element) => {
  const donutCharts = [];
  donutCharts.push(new DonutChart({
    rootElement: element,
    data: [
      {
        caption: 'Великолепно', value: 520, firstColor: '#FFE39C', secondColor: '#FFBA9C',
      },
      {
        caption: 'Хорошо', value: 260, firstColor: '#6FCF97', secondColor: '#66D2EA',
      },
      {
        caption: 'Удовлетворительно',
        value: 260,
        firstColor: '#BC9CFF',
        secondColor: '#8BA4F9',
        isActive: true,
      },
      {
        caption: 'Разочарован', value: 0, firstColor: '#919191', secondColor: '#3D4975',
      },
    ],
    defaultStyle: {
      outerRadius: 120,
      innerRadius: 116,
    },
    activeStyle: {
      outerRadius: 120,
      innerRadius: 110,
    },
    arcsGap: 2,
  }));

  return donutCharts;
});

initBookingCards();
