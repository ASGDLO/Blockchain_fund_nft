import 'react';
import { Funnel } from '@antv/g2plot/lib/plots/funnel';
import createPlot from '../createPlot';
import { polyfillOptions, replaceApi } from './core/polyfill';
export default createPlot(Funnel, 'FunnelChart', function (props) {
    var options = polyfillOptions(props);
    replaceApi([{
            sourceKey: 'transpose',
            targetKey: 'isTransposed',
            notice: 'transpose 即将废弃 请使用isTransposed替代',
        }], options);
    return options;
});
//# sourceMappingURL=FunnelChart.js.map