import 'react';
import { TinyColumn } from '@antv/g2plot/lib/plots/tiny-column';
import set from '@antv/util/lib/set';
import createPlot from '../createPlot';
import { polyfillOptions } from './core/polyfill';
import { isNil } from '@antv/util';
var polyfill = function (opt) {
    var options = polyfillOptions(opt);
    if (!isNil(options.yField)) { // yField不是null/undefined
        var list = options.data
            .map(function (item) { return item[options.yField]; })
            .filter(function (val) { return !isNil(val); });
        list && list.length && set(options, 'data', list);
    }
    set(options, 'tooltip', false);
    return options;
};
export default createPlot(TinyColumn, 'TinyColumnChart', polyfill);
//# sourceMappingURL=TinyColumnChart.js.map