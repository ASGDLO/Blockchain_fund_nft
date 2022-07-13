"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var column_1 = require("@antv/g2plot/lib/plots/column");
var createPlot_1 = __importDefault(require("../createPlot"));
var polyfill_1 = require("./core/polyfill");
var util_1 = require("@antv/util");
var warning_1 = __importDefault(require("warning"));
var util_2 = require("@antv/util");
exports.default = createPlot_1.default(column_1.Column, 'GroupedColumnChart', function (props) {
    warning_1.default(false, '<GroupedColumnChart /> 在5.0后即将被废弃，请使用<ColumnChart /> 替代');
    var _a = polyfill_1.polyfillOptions(props), columnSize = _a.columnSize, options = __rest(_a, ["columnSize"]);
    if (!util_1.isNil(columnSize)) {
        options.minColumnWidth = columnSize;
        options.maxColumnWidth = columnSize;
    }
    util_2.deepMix(props, {
        isGroup: true,
    });
    return options;
});
//# sourceMappingURL=GroupedColumnChart.js.map