import initDonutCharts from '../../blocks/donut-chart/init';
import initComments from '../../blocks/comment/init';
import initBookingCards from '../../cards/booking-card/init';
import { importCommon, importContext, importHeaderFooter } from '../../utils/imports';
import './room-details.scss';

importHeaderFooter();
importCommon();
importContext(require.context('./', true, /\.(js|scss)$/));

initDonutCharts();
initBookingCards();
initComments();
