import { importCommon, importContext } from '../../imports';

import initDonutCharts from '../../blocks/donut-chart/init';
import initBookingCards from '../../cards/booking-card/init';
import initComments from '../../blocks/comment/init';
import initHeaders from '../../page-elements/header/init';

initHeaders();

importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));

initDonutCharts();
initBookingCards();
initComments();
