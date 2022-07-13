"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var area_1 = require("@antv/g2plot/lib/plots/area");
var createPlot_1 = __importDefault(require("../createPlot"));
var AreaChart_1 = require("./AreaChart");
var warning_1 = __importDefault(require("warning"));
var util_1 = require("@antv/util");
exports.default = createPlot_1.default(area_1.Area, 'PercentStackedAreaChart', function (props) {
    warning_1.default(false, '<PercentStackedAreaChart /> 即将在5.0后废弃，请使用<AreaChart /> 替代。');
    util_1.deepMix(props, {
        isPercent: true
    });
    return AreaChart_1.polyfill(props);
});
//# sourceMappingURL=PercentStackedAreaChart.js.map