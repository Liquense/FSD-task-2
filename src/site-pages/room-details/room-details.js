/* eslint-disable no-undef */
// jquery импортирована вебпаком
import { importCommon, importContext } from '../../index';

import initDonutCharts from '../../blocks/donut-chart/init';
import initBookingCards from '../../cards/booking-card/init';
import initComments from '../../blocks/comment/init';

importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));

const donutParams = {
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
};

initDonutCharts(document.body, donutParams);
initBookingCards();
initComments();
