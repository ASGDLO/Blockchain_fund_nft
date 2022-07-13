"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var line_1 = require("@antv/g2plot/lib/plots/line");
var createPlot_1 = __importDefault(require("../createPlot"));
var LineChart_1 = require("./LineChart");
var warning_1 = __importDefault(require("warning"));
;
exports.default = createPlot_1.default(line_1.Line, 'StepLineChart', function (props) {
    warning_1.default(false, '<StepLineChart />即将在5.0后废弃，请使用<LineChart />替代。');
    props.stepType = props.stepType || props.step || 'hv';
    return LineChart_1.polyfill(props);
});
//# sourceMappingURL=StepLineChart.js.map