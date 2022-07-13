import 'react';
import { Column } from '@antv/g2plot/lib/plots/column';
import createPlot from '../createPlot';
import warn from 'warning';
import { deepMix } from '@antv/util';
import { polyfill } from './ColumnChart';
;
export default createPlot(Column, 'StackedColumnChart', function (props) {
    warn(false, '<StackedColumnChart />即将在5.0中废弃，请使用<ColumnChart />替代。');
    deepMix(props, {
        isStack: true,
    });
    return polyfill(props);
});
//# sourceMappingURL=StackedColumnChart.js.map