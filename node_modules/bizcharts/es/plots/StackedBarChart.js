import 'react';
import { Bar } from '@antv/g2plot/lib/plots/bar';
import createPlot from '../createPlot';
import warn from 'warning';
import { deepMix } from '@antv/util';
import { polyfill } from './BarChart';
export default createPlot(Bar, 'StackedBarChart', function (props) {
    warn(false, '<StackedBarChart /> 即将在5.0后废弃，请使用<BarChart />替代，');
    deepMix(props, {
        isStack: true,
    });
    return polyfill(props);
});
//# sourceMappingURL=StackedBarChart.js.map