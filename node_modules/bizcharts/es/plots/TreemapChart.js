import 'react';
import { Treemap } from '@antv/g2plot/lib/plots/treemap';
import createPlot from '../createPlot';
import { polyfillOptions } from './core/polyfill';
import { get, set, isNil } from '@antv/util';
import warn from 'warning';
var formatDataByMaxlevel = function (data, maxLevel, curLevel) {
    if (curLevel === void 0) { curLevel = 1; }
    if (curLevel > maxLevel) {
        delete data.children;
    }
    else {
        var children = data.children;
        if (children && children.length) {
            children.forEach(function (it) {
                formatDataByMaxlevel(it, maxLevel, curLevel + 1);
            });
        }
    }
};
var polyfill = function (opt) {
    var options = polyfillOptions(opt);
    var maxLevel = get(options, 'maxLevel', 2);
    if (!isNil(maxLevel)) {
        if (maxLevel < 1) {
            warn(false, 'maxLevel 必须大于等于1');
        }
        else {
            var data = get(options, 'data', {});
            formatDataByMaxlevel(data, maxLevel);
            set(options, 'data', data);
            set(options, 'maxLevel', maxLevel);
        }
    }
    return options;
};
export default createPlot(Treemap, 'TreemapChart', polyfill);
//# sourceMappingURL=TreemapChart.js.map