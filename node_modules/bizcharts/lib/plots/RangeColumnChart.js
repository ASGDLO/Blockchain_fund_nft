"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var column_1 = require("@antv/g2plot/lib/plots/column");
var ColumnChart_1 = require("./ColumnChart");
var createPlot_1 = __importDefault(require("../createPlot"));
var warning_1 = __importDefault(require("warning"));
var util_1 = require("@antv/util");
;
exports.default = createPlot_1.default(column_1.Column, 'RangeColumnChart', function (props) {
    warning_1.default(false, '<RangeColumnChart /> 即将在5.0后废弃，请使用<ColumnChart />替代。');
    util_1.deepMix(props, {
        isRange: true,
    });
    return ColumnChart_1.polyfill(props);
});
//# sourceMappingURL=RangeColumnChart.js.map