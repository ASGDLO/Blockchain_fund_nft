"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var histogram_1 = require("@antv/g2plot/lib/plots/histogram");
var createPlot_1 = __importDefault(require("../createPlot"));
exports.default = createPlot_1.default(histogram_1.Histogram, 'HistogramChart');
//# sourceMappingURL=HistogramChart.js.map