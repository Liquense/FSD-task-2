import initBlocks from '../../utils/dynamicInit';
import DonutChart from './donut-chart';

function initDonutCharts(rootElement, ...classInitParams) {
  return initBlocks(rootElement, '.js-donut-chart', DonutChart, ...classInitParams);
}

export default initDonutCharts;
