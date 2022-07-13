"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var column_1 = require("@antv/g2plot/lib/plots/column");
var createPlot_1 = __importDefault(require("../createPlot"));
var warning_1 = __importDefault(require("warning"));
var util_1 = require("@antv/util");
var ColumnChart_1 = require("./ColumnChart");
;
exports.default = createPlot_1.default(column_1.Column, 'StackedColumnChart', function (props) {
    warning_1.default(false, '<StackedColumnChart />即将在5.0中废弃，请使用<ColumnChart />替代。');
    util_1.deepMix(props, {
        isStack: true,
    });
    return ColumnChart_1.polyfill(props);
});
//# sourceMappingURL=StackedColumnChart.js.map