import 'react';
import { Heatmap } from '@antv/g2plot/lib/plots/heatmap';
import { polyfillOptions, replaceApi } from './core/polyfill';
import createPlot from '../createPlot';
import { set } from '@antv/util';
export default createPlot(Heatmap, 'DensityHeatmapChartChart', function (props) {
    var options = polyfillOptions(props);
    replaceApi([{
            sourceKey: 'radius',
            targetKey: 'sizeRatio',
            notice: 'radius 请使用sizeRatio替代',
        }], options);
    set(options, 'type', 'density');
    return options;
});
//# sourceMappingURL=DensityHeatmapChart.js.map