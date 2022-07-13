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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var react_1 = __importDefault(require("react"));
var plots = __importStar(require("./plots"));
var sparkline = __importStar(require("./sparkline"));
var warning_1 = __importDefault(require("warning"));
var PLOT_MAP = __assign(__assign({}, plots), sparkline);
var DEFAULT_PLOT = 'Line';
var PlotAdapter = function (props) {
    var chartName = props.chartName, adapter = props.adapter, others = __rest(props, ["chartName", "adapter"]);
    var adapterFnc = adapter || (function (opt) {
        // 万能plot
        return { plotType: props.plotType || DEFAULT_PLOT, options: opt };
    });
    var _a = adapterFnc(others) || {}, plotType = _a.plotType, options = _a.options;
    var Plot = PLOT_MAP[plotType];
    Plot.displayName = chartName;
    if (!Plot) {
        return react_1.default.createElement("div", { style: { color: '#aaa' } },
            "\u4E0D\u5B58\u5728plotName=\uFF1A", "" + plotType,
            "\u7684Plot\u7EC4\u4EF6");
    }
    return react_1.default.createElement(Plot, __assign({}, options));
};
// @ts-ignore
PlotAdapter.registerPlot = function (name, Component) {
    warning_1.default(!PLOT_MAP[name], '%s的plot已存在', name);
    PLOT_MAP[name] = Component;
};
exports.default = PlotAdapter;
//# sourceMappingURL=PlotAdapter.js.map