import 'react';
import { Area } from '@antv/g2plot/lib/plots/area';
import createPlot from '../createPlot';
import { polyfill } from './AreaChart';
import warn from 'warning';
import { deepMix } from '@antv/util';
export default createPlot(Area, 'StackedAreaChart', function (props) {
    warn(false, '<StackedAreaChart /> 即将在5.0后废弃，请使用<AreaChart /> 替代。');
    deepMix(props, {
        isStack: true,
    });
    return polyfill(props);
});
//# sourceMappingURL=StackedAreaChart.js.map