"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.polyfill = void 0;
require("react");
var line_1 = require("@antv/g2plot/lib/plots/line");
var createPlot_1 = __importDefault(require("../createPlot"));
var polyfill_1 = require("./core/polyfill");
;
exports.polyfill = function (opt) {
    var options = polyfill_1.polyfillOptions(opt);
    // point
    polyfill_1.polyfillVisible(options, 'point');
    // bizcharts 端支持 <LineChart point /> 写法
    if (options.point === true) {
        options.point = {};
    }
    return options;
};
exports.default = createPlot_1.default(line_1.Line, 'LineChart', exports.polyfill);
//# sourceMappingURL=LineChart.js.map