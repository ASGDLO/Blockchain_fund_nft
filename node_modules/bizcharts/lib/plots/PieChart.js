"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var pie_1 = require("@antv/g2plot/lib/plots/pie");
var createPlot_1 = __importDefault(require("../createPlot"));
var polyfill_1 = require("./core/polyfill");
;
exports.default = createPlot_1.default(pie_1.Pie, 'PieChart', polyfill_1.polyfillOptions);
//# sourceMappingURL=PieChart.js.map