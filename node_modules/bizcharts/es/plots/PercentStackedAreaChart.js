import 'react';
import { Area } from '@antv/g2plot/lib/plots/area';
import createPlot from '../createPlot';
import { polyfill } from './AreaChart';
import warn from 'warning';
import { deepMix } from '@antv/util';
export default createPlot(Area, 'PercentStackedAreaChart', function (props) {
    warn(false, '<PercentStackedAreaChart /> 即将在5.0后废弃，请使用<AreaChart /> 替代。');
    deepMix(props, {
        isPercent: true
    });
    return polyfill(props);
});
//# sourceMappingURL=PercentStackedAreaChart.js.map