import 'react';
import { Scatter } from '@antv/g2plot/lib/plots/scatter';
import warn from 'warning';
import get from '@antv/util/lib/get';
import set from '@antv/util/lib/set';
import isNil from '@antv/util/lib/is-nil';
import { polyfillOptions } from './core/polyfill';
import createPlot from '../createPlot';
;
// 气泡图, 与散点图合并
export default createPlot(Scatter, 'BubbleChart', function (props) {
    var options = polyfillOptions(props);
    if (!isNil(get(options, 'pointSize'))) {
        set(options, 'size', get(options, 'pointSize'));
    }
    warn(false, 'BubbleChart 图表类型命名已变更为Scatter，请修改为<ScatterChart />');
    return options;
});
//# sourceMappingURL=BubbleChart.js.map