"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var heatmap_1 = require("@antv/g2plot/lib/plots/heatmap");
var polyfill_1 = require("./core/polyfill");
var createPlot_1 = __importDefault(require("../createPlot"));
var util_1 = require("@antv/util");
exports.default = createPlot_1.default(heatmap_1.Heatmap, 'DensityHeatmapChartChart', function (props) {
    var options = polyfill_1.polyfillOptions(props);
    polyfill_1.replaceApi([{
            sourceKey: 'radius',
            targetKey: 'sizeRatio',
            notice: 'radius 请使用sizeRatio替代',
        }], options);
    util_1.set(options, 'type', 'density');
    return options;
});
//# sourceMappingURL=DensityHeatmapChart.js.map