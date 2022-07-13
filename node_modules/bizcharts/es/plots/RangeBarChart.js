import 'react';
import { Bar } from '@antv/g2plot/lib/plots/bar';
import createPlot from '../createPlot';
import { polyfill } from './BarChart';
import warn from 'warning';
import { deepMix } from '@antv/util';
export default createPlot(Bar, 'RangeBarChart', function (props) {
    warn(false, '<RangeBarChart /> 即将在5.0后废弃，请使用<BarChart />替代。');
    deepMix(props, {
        isRange: true,
    });
    return polyfill(props);
});
//# sourceMappingURL=RangeBarChart.js.map