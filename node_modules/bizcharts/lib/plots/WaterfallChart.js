"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var waterfall_1 = require("@antv/g2plot/lib/plots/waterfall");
var createPlot_1 = __importDefault(require("../createPlot"));
exports.default = createPlot_1.default(waterfall_1.Waterfall, 'WaterfallChart');
//# sourceMappingURL=WaterfallChart.js.map