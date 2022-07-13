import 'react';
import get from '@antv/util/lib/get';
import set from '@antv/util/lib/set';
import { Scatter } from '@antv/g2plot/lib/plots/scatter';
import createPlot from '../createPlot';
import { polyfillOptions, polyfillVisible } from './core/polyfill';
import { isObject } from '@antv/util';
var polyfill = function (opt) {
    var options = polyfillOptions(opt);
    if (get(options, 'pointSize')) {
        set(options, 'size', get(options, 'pointSize'));
    }
    polyfillVisible(options, 'quadrant');
    var quadrantLabel = get(options, 'quadrant.label');
    var qLabels = get(options, 'quadrant.labels');
    if (!qLabels && quadrantLabel) {
        var text = quadrantLabel.text, style_1 = quadrantLabel.style;
        if (text && text.length && style_1) {
            var labels = text.map(function (txt) { return ({ style: style_1, content: txt }); });
            set(options, 'quadrant.labels', labels);
        }
    }
    var regressionLine = get(options, 'regressionLine');
    if (!regressionLine) {
        var trendline = get(options, 'trendline');
        if (isObject(trendline) && get(trendline, 'visible') === false) {
            set(options, 'regressionLine', null);
        }
        else {
            set(options, 'regressionLine', trendline);
        }
    }
    return options;
};
export default createPlot(Scatter, 'ScatterChart', polyfill);
//# sourceMappingURL=ScatterChart.js.map