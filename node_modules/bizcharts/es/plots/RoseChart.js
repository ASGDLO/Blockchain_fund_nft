import 'react';
import get from '@antv/util/lib/get';
import set from '@antv/util/lib/set';
import { Rose } from '@antv/g2plot/lib/plots/rose';
import createPlot from '../createPlot';
import { polyfillOptions, replaceApi } from './core/polyfill';
var REPLACEAPILIST = [{
        sourceKey: 'colorField',
        targetKey: 'seriesField',
        notice: 'colorField 是 g2@1.0的属性，即将废弃，请使用seriesField替代',
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
    return options;
};
export default createPlot(Rose, 'RoseChart', polyfill);
//# sourceMappingURL=RoseChart.js.map