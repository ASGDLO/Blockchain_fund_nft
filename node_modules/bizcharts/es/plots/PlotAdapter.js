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
import React from 'react';
import * as plots from './plots';
import * as sparkline from './sparkline';
import warn from 'warning';
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
        return React.createElement("div", { style: { color: '#aaa' } },
            "\u4E0D\u5B58\u5728plotName=\uFF1A", "" + plotType,
            "\u7684Plot\u7EC4\u4EF6");
    }
    return React.createElement(Plot, __assign({}, options));
};
// @ts-ignore
PlotAdapter.registerPlot = function (name, Component) {
    warn(!PLOT_MAP[name], '%s的plot已存在', name);
    PLOT_MAP[name] = Component;
};
export default PlotAdapter;
//# sourceMappingURL=PlotAdapter.js.map