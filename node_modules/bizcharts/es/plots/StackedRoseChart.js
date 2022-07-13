var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import 'react';
import warn from 'warning';
import get from '@antv/util/lib/get';
import set from '@antv/util/lib/set';
import { Rose } from '@antv/g2plot/lib/plots/rose';
import createPlot from '../createPlot';
import { polyfillOptions, replaceApi } from './core/polyfill';
var REPLACEAPILIST = [{
        sourceKey: 'stackField',
        targetKey: 'seriesField',
        notice: 'stackField 是 g2@1.0的属性，即将废弃，请使用seriesField替代',
    }, {
        sourceKey: 'categoryField',
        targetKey: 'xField',
        notice: 'categoryField 是 g2@1.0的属性，即将废弃，请使用xField替代',
    }, {
        sourceKey: 'radiusField',
        targetKey: 'yField',
        notice: 'radiusField 是 g2@1.0的属性，即将废弃，请使用yFeild替代',
    }];
var polyfill = function (opt) {
    warn(false, '<StackedRoseChart /> 即将在5.0后废弃，请使用<RoseChart />替代，');
    var options = polyfillOptions(opt);
    replaceApi(REPLACEAPILIST, options);
    if (get(options, 'tooltip.visible') === false) {
        set(options, 'tooltip', false);
    }
    if (get(options, 'label.visible') === false) {
        set(options, 'label', false);
    }
    if (get(options, 'label.type') === 'inner') {
        options.label.offset = -15;
        delete options.label.type;
    }
    if (get(options, 'label.type') === 'outer') {
        delete options.label.type;
    }
    return __assign(__assign({}, options), { isStack: true });
};
export default createPlot(Rose, 'StackedRoseChart', polyfill);
//# sourceMappingURL=StackedRoseChart.js.map