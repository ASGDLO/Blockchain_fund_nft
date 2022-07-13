var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import 'react';
import { Heatmap } from '@antv/g2plot/lib/plots/heatmap';
import createPlot from '../createPlot';
import { polyfillOptions } from './core/polyfill';
import { warn } from 'warning';
export default createPlot(Heatmap, 'HeatmapChart', function (props) {
    var _a = polyfillOptions(props), shapeType = _a.shapeType, options = __rest(_a, ["shapeType"]);
    if (shapeType) {
        options.heatmapStyle = shapeType;
        warn(false, 'shapeType是g2plot@1.0的属性，即将废弃，请使用 `heatmapStyle` 替代');
    }
    // shape 没有指定，但配置了sizeField
    if (!options.shape && options.sizeField) {
        options.shape = "square";
    }
    return options;
});
//# sourceMappingURL=HeatmapChart.js.map