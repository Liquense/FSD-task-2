import { importCommon, importContext } from '../../imports';

import initDonutCharts from '../../blocks/donut-chart/init';
import initBookingCards from '../../cards/booking-card/init';
import initComments from '../../blocks/comment/init';

importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));

initDonutCharts();
initBookingCards();
initComments();
