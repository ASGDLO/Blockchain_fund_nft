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
var tiny_area_1 = require("@antv/g2plot/lib/plots/tiny-area");
var createPlot_1 = __importDefault(require("../createPlot"));
var polyfill_1 = require("./core/polyfill");
exports.default = createPlot_1.default(tiny_area_1.TinyArea, 'TinyAreaChart', function (props) {
    var _a = polyfill_1.polyfillOptions(props), xField = _a.xField, yField = _a.yField, data = _a.data, options = __rest(_a, ["xField", "yField", "data"]);
    if (xField && yField && data) {
        options.data = data.map(function (it) { return it[yField]; });
    }
    return __assign({}, options);
});
//# sourceMappingURL=TinyAreaChart.js.map