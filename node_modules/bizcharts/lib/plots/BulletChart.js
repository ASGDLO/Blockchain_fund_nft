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
var bullet_1 = require("@antv/g2plot/lib/plots/bullet");
var warning_1 = __importDefault(require("warning"));
var get_1 = __importDefault(require("@antv/util/lib/get"));
var set_1 = __importDefault(require("@antv/util/lib/set"));
var createPlot_1 = __importDefault(require("../createPlot"));
var is_nil_1 = __importDefault(require("@antv/util/lib/is-nil"));
var is_array_1 = __importDefault(require("@antv/util/lib/is-array"));
var polyfill_1 = require("./core/polyfill");
var polyfill = function (opt) {
    var options = polyfill_1.polyfillOptions(opt);
    // size
    if (!is_nil_1.default(get_1.default(opt, 'measureSize'))) {
        warning_1.default(false, 'measureSize已废弃，请使用size.measure替代');
        set_1.default(options, 'size.measure', get_1.default(opt, 'measureSize'));
    }
    if (!is_nil_1.default(get_1.default(opt, 'rangeSize'))) {
        warning_1.default(false, 'rangeSize已废弃，请使用size.range替代');
        set_1.default(options, 'size.range', get_1.default(opt, 'rangeSize'));
    }
    if (!is_nil_1.default(get_1.default(opt, 'markerSize'))) {
        warning_1.default(false, 'markerSizee已废弃，请使用size.target替代');
        set_1.default(options, 'size.target', get_1.default(opt, 'markerSize'));
    }
    // color
    if (!is_nil_1.default(get_1.default(opt, 'measureColors'))) {
        warning_1.default(false, 'measureColors已废弃，请使用color.measure替代');
        set_1.default(options, 'color.measure', get_1.default(opt, 'measureColors'));
    }
    if (!is_nil_1.default(get_1.default(opt, 'rangeColors'))) {
        warning_1.default(false, 'rangeColors已废弃，请使用color.range替代');
        set_1.default(options, 'color.range', get_1.default(opt, 'rangeColors'));
    }
    if (!is_nil_1.default(get_1.default(opt, 'markerColors'))) {
        warning_1.default(false, 'markerColors已废弃，请使用color.target替代');
        set_1.default(options, 'color.target', get_1.default(opt, 'markerColors'));
    }
    // bulletStyle
    if (!is_nil_1.default(get_1.default(opt, 'markerStyle'))) {
        warning_1.default(false, 'markerStyle已废弃，请使用bulletStyle.target替代');
        set_1.default(options, 'bulletStyle.target', get_1.default(opt, 'markerStyle'));
    }
    if (is_nil_1.default(get_1.default(opt, 'xAxis.line'))) {
        // 默认不显示轴线
        set_1.default(options, 'xAxis.line', false);
    }
    if (is_nil_1.default(get_1.default(opt, 'yAxis'))) {
        // 默认不显示y轴
        set_1.default(options, 'yAxis', false);
    }
    if (is_nil_1.default(get_1.default(opt, 'measureField'))) {
        // 默认measureField
        set_1.default(options, 'measureField', 'measures');
    }
    if (is_nil_1.default(get_1.default(opt, 'rangeField'))) {
        // 默认rangeField
        set_1.default(options, 'rangeField', 'ranges');
    }
    if (is_nil_1.default(get_1.default(opt, 'targetField'))) {
        // 默认targetField
        set_1.default(options, 'targetField', 'target');
    }
    // polyfill
    warning_1.default(!is_nil_1.default(get_1.default(opt, 'rangeMax')), '该属性已废弃，请在数据中配置range，并配置rangeField');
    if (is_array_1.default(get_1.default(opt, 'data'))) {
        // 兼容旧版数据格式
        set_1.default(options, 'data', opt.data.map(function (it) {
            var range = {};
            if (!is_nil_1.default(get_1.default(opt, 'rangeMax'))) {
                range = { ranges: [get_1.default(opt, 'rangeMax')] };
            }
            if (is_array_1.default(it.targets)) {
                return __assign(__assign(__assign({}, range), { target: it.targets[0] }), it);
            }
            return __assign(__assign({}, range), it);
        }));
    }
    return options;
};
// 子弹图
exports.default = createPlot_1.default(bullet_1.Bullet, 'BulletChart', polyfill);
//# sourceMappingURL=BulletChart.js.map