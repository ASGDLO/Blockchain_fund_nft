"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var bar_1 = require("@antv/g2plot/lib/plots/bar");
var createPlot_1 = __importDefault(require("../createPlot"));
var warning_1 = __importDefault(require("warning"));
var util_1 = require("@antv/util");
var BarChart_1 = require("./BarChart");
exports.default = createPlot_1.default(bar_1.Bar, 'StackedBarChart', function (props) {
    warning_1.default(false, '<StackedBarChart /> 即将在5.0后废弃，请使用<BarChart />替代，');
    util_1.deepMix(props, {
        isStack: true,
    });
    return BarChart_1.polyfill(props);
});
//# sourceMappingURL=StackedBarChart.js.map