/* eslint-disable no-undef */
// jquery импортирована вебпаком
import { importCommon, importContext } from '../../index';

import initBookingCards from '../../cards/booking-card/booking-card';

importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));

const $donutCharts = $('.room-details__donut-chart > .donut-chart');
function initDonutChart() {
  const $donutContainer = $(this);
  $donutContainer.donutChart({
    data: [
      {
        caption: 'Великолепно', value: 520, firstColor: '#FFE39C', secondColor: '#FFBA9C',
      },
      {
        caption: 'Хорошо', value: 260, firstColor: '#6FCF97', secondColor: '#66D2EA',
      },
      {
        caption: 'Удовлетворительно', value: 260, firstColor: '#BC9CFF', secondColor: '#8BA4F9', isActive: true,
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
      innerRadius: 116,
    },
    arcsGap: 2,
  });
}

$donutCharts.each(initDonutChart);
initBookingCards();
