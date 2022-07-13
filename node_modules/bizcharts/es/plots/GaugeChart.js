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
import 'react';
import { Gauge } from '@antv/g2plot/lib/plots/gauge';
import createPlot from '../createPlot';
import { polyfillOptions } from './core/polyfill';
import { isArray, get, set, isNil, isFunction } from '@antv/util';
import warn from 'warning';
import { getTheme } from '@antv/g2';
// 该plot 无法完全兼容
export default createPlot(Gauge, 'GaugeChart', function (opt) {
    var _a = polyfillOptions(opt), range = _a.range, _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 1 : _c, value = _a.value, options = __rest(_a, ["range", "min", "max", "value"]);
    if (isArray(range)) {
        warn(false, 'range 应当是个对象，请修改配置。');
        options.range = {
            ticks: range.map(function (t) { return (t - min) / (max - min); }),
            color: getTheme().colors10,
        };
    }
    else {
        options.range = range || {};
    }
    var color = get(options, 'color');
    if (!isNil(color)) {
        warn(false, '请通过配置属性range.color来配置颜色');
        options.range.color = color;
    }
    if (isNil(get(options, 'indicator'))) {
        // 默认灰色 indicator
        set(options, 'indicator', {
            pointer: {
                style: {
                    stroke: '#D0D0D0',
                },
            },
            pin: {
                style: {
                    stroke: '#D0D0D0',
                },
            },
        });
    }
    if (get(options, 'statistic.visible')) {
        // 默认使用visible即使用旧版语法的人
        set(options, 'statistic.title', get(options, 'statistic'));
    }
    if (!isNil(min) && !isNil(max) && !isNil(value)) {
        // 旧版数据使用方式
        options.percent = (value - min) / (max - min);
        var formatter_1 = get(options, 'axis.label.formatter');
        set(options, 'axis', {
            label: {
                formatter: function (v) {
                    var val = v * (max - min) + min;
                    if (isFunction(formatter_1)) {
                        return formatter_1(val);
                    }
                    return val;
                },
            },
        });
    }
    warn(!(get(options, 'min') || get(options, 'max')), '属性 `max` 和 `min` 不推荐使用， 请直接配置属性range.ticks');
    warn(!(get(options, 'rangeSize') || get(options, 'rangeStyle') || 'rangeBackgroundStyle'), '不再支持rangeSize、rangeStyle、rangeBackgroundStyle属性, 请查看新版仪表盘配置文档。');
    // value 转为data，用于placeholder统一判断
    var data = !isNil(options.percent) ? options.percent : value;
    return __assign({ data: data }, options);
});
//# sourceMappingURL=GaugeChart.js.map