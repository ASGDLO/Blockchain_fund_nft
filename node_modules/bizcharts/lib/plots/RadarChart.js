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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var is_nil_1 = __importDefault(require("@antv/util/lib/is-nil"));
var get_1 = __importDefault(require("@antv/util/lib/get"));
var set_1 = __importDefault(require("@antv/util/lib/set"));
var is_object_1 = __importDefault(require("@antv/util/lib/is-object"));
var radar_1 = require("@antv/g2plot/lib/plots/radar");
var createPlot_1 = __importDefault(require("../createPlot"));
var polyfill_1 = require("./core/polyfill");
var util_1 = require("@antv/util");
var REPLACEAPILIST = [{
        sourceKey: 'angleField',
        targetKey: 'xField',
        notice: 'angleField 是 g2@1.0的属性，即将废弃，请使用xField替代',
    }, {
        sourceKey: 'radiusField',
        targetKey: 'yField',
        notice: 'radiusField 是 g2@1.0的属性，即将废弃，请使用yFeild替代',
    }, {
        sourceKey: 'angleAxis',
        targetKey: 'xAxis',
        notice: 'angleAxis 是 g2@1.0的属性，即将废弃，请使用xAxis替代',
    }, {
        sourceKey: 'radiusAxis',
        targetKey: 'yAxis',
        notice: 'radiusAxis 是 g2@1.0的属性，即将废弃，请使用yAxis替代',
    }];
var getVisibleStyle = function (visible) {
    if (is_nil_1.default(visible) || visible) { // // null,undefined : 要展示    visible为true: 要展示
        return { fillOpacity: 1, strokeOpacity: 1 };
    }
    // 不显示
    return { fillOpacity: 0, strokeOpacity: 0 };
};
// 将bizcharts.plots的radaChart的Line的API 替换成G2.plots的API替换成LineStyle
var replaceLineWithLinestyle = function (options) {
    var _a = get_1.default(options, 'line', {}), visible = _a.visible, size = _a.size, style = _a.style;
    set_1.default(options, 'lineStyle', __assign(__assign(__assign({}, style), { opacity: 1, lineWidth: typeof size === 'number' ? size : 2 }), getVisibleStyle(visible)));
};
var polyfill = function (opt) {
    // 先转为统一的，在统一polyfill
    polyfill_1.replaceApi(REPLACEAPILIST, opt);
    var options = polyfill_1.polyfillOptions(opt);
    if (get_1.default(options, 'area.visible') === false) {
        set_1.default(options, 'area', false);
    }
    if (get_1.default(options, 'point.visible') === false) {
        set_1.default(options, 'point', false);
    }
    replaceLineWithLinestyle(options);
    if (is_object_1.default(options.angleAxis) || is_object_1.default(options.radiusAxis)) {
        // 旧版用法就默认关闭此line
        if (!options.angleAxis) {
            options.angleAxis = {};
        }
        options.angleAxis.line = get_1.default(options, 'angleAxis.line', null);
        options.angleAxis.tickLine = get_1.default(options, 'angleAxis.tickLine', null);
    }
    if (get_1.default(options, 'tooltip.visible') === false) {
        set_1.default(options, 'tooltip', false);
    }
    if (get_1.default(options, 'label.visible') === false) {
        set_1.default(options, 'label', false);
    }
    if (get_1.default(options, 'yAxis.grid.line.type') === 'line') {
        util_1.deepMix(options, {
            xAxis: {
                line: null,
                tickLine: null,
            }
        }, options);
    }
    return options;
};
exports.default = createPlot_1.default(radar_1.Radar, 'RadarChart', polyfill);
//# sourceMappingURL=RadarChart.js.map