import 'react';
import { Column } from '@antv/g2plot/lib/plots/column';
import { polyfill } from './ColumnChart';
import createPlot from '../createPlot';
import warn from 'warning';
import { deepMix } from '@antv/util';
;
export default createPlot(Column, 'RangeColumnChart', function (props) {
    warn(false, '<RangeColumnChart /> 即将在5.0后废弃，请使用<ColumnChart />替代。');
    deepMix(props, {
        isRange: true,
    });
    return polyfill(props);
});
//# sourceMappingURL=RangeColumnChart.js.map