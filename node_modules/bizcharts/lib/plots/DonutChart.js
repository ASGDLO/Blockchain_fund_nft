"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var pie_1 = require("@antv/g2plot/lib/plots/pie");
var createPlot_1 = __importDefault(require("../createPlot"));
var polyfill_1 = require("./core/polyfill");
;
var polyfill = function (opt) {
    var options = polyfill_1.polyfillOptions(opt);
    polyfill_1.polyfillVisible(options, 'statistic');
    polyfill_1.polyfillVisible(options, 'statistic.title');
    polyfill_1.polyfillVisible(options, 'statistic.content');
    // g2Plot@1 默认是 0.8 innerRadius
    return __assign({ innerRadius: 0.8 }, options);
};
exports.default = createPlot_1.default(pie_1.Pie, 'DonutChart', polyfill);
//# sourceMappingURL=DonutChart.js.map