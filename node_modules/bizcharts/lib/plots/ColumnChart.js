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
exports.polyfill = void 0;
require("react");
var column_1 = require("@antv/g2plot/lib/plots/column");
var polyfill_1 = require("./core/polyfill");
var createPlot_1 = __importDefault(require("../createPlot"));
var util_1 = require("@antv/util");
var REPLACEAPILIST = [{
        sourceKey: 'colorField',
        targetKey: 'seriesField',
        notice: 'colorField 是 g2@1.0的属性，即将废弃，请使用seriesField替代',
    }, {
        sourceKey: 'stackField',
        targetKey: 'seriesField',
        notice: 'colorField是旧版API，即将废弃 请使用seriesField替代',
    }];
exports.polyfill = function (props) {
    var _a = polyfill_1.polyfillOptions(props), columnSize = _a.columnSize, options = __rest(_a, ["columnSize"]);
    polyfill_1.replaceApi(REPLACEAPILIST, options);
    if (!util_1.isNil(columnSize)) {
        options.minColumnWidth = columnSize;
        options.maxColumnWidth = columnSize;
    }
    return options;
};
exports.default = createPlot_1.default(column_1.Column, 'ColumnChart', exports.polyfill);
//# sourceMappingURL=ColumnChart.js.map