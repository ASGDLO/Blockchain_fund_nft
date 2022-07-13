"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var heatmap_1 = require("@antv/g2plot/lib/plots/heatmap");
var createPlot_1 = __importDefault(require("../createPlot"));
var polyfill_1 = require("./core/polyfill");
var warning_1 = require("warning");
exports.default = createPlot_1.default(heatmap_1.Heatmap, 'HeatmapChart', function (props) {
    var _a = polyfill_1.polyfillOptions(props), shapeType = _a.shapeType, options = __rest(_a, ["shapeType"]);
    if (shapeType) {
        options.heatmapStyle = shapeType;
        warning_1.warn(false, 'shapeType是g2plot@1.0的属性，即将废弃，请使用 `heatmapStyle` 替代');
    }
    // shape 没有指定，但配置了sizeField
    if (!options.shape && options.sizeField) {
        options.shape = "square";
    }
    return options;
});
//# sourceMappingURL=HeatmapChart.js.map