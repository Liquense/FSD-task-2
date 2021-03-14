import { importCommon, importContext, importHeaderFooter } from '../../imports';

import '../../blocks/donut-chart/donut-chart';
import initDonutCharts from '../../blocks/donut-chart/init';
import '../../cards/booking-card/booking-card';
import initBookingCards from '../../cards/booking-card/init';
import '../../blocks/comment/comment';
import initComments from '../../blocks/comment/init';
import './room-details.scss';
import '../../blocks/title/title.scss';
import '../../blocks/features-list/features-list.scss';
import '../../blocks/bullet-list/bullet-list.scss';

importHeaderFooter();
importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));

initDonutCharts();
initBookingCards();
initComments();
