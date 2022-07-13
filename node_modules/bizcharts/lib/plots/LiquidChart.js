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
var liquid_1 = require("@antv/g2plot/lib/plots/liquid");
var createPlot_1 = __importDefault(require("../createPlot"));
var polyfill_1 = require("./core/polyfill");
var util_1 = require("@antv/util");
exports.default = createPlot_1.default(liquid_1.Liquid, 'LiquidChart', function (opt) {
    var _a = polyfill_1.polyfillOptions(opt), range = _a.range, _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 1 : _c, value = _a.value, options = __rest(_a, ["range", "min", "max", "value"]);
    if (!util_1.isNil(value)) {
        // 旧版数据使用方式
        options.percent = value / (max - min);
        var formatter_1 = util_1.get(options, 'statistic.content.formatter');
        if (options.statistic !== null && options.statistic !== false) {
            util_1.deepMix(options, {
                statistic: {
                    content: {
                        formatter: function () {
                            if (util_1.isFunction(formatter_1)) {
                                formatter_1(value);
                            }
                            return value;
                        }
                    }
                }
            });
        }
    }
    polyfill_1.polyfillVisible(options, 'statistic');
    polyfill_1.polyfillVisible(options, 'statistic.title');
    polyfill_1.polyfillVisible(options, 'statistic.content');
    // value 转为data，用于placeholder统一判断
    var data = options.percent;
    return __assign({ data: data }, options);
});
//# sourceMappingURL=LiquidChart.js.map