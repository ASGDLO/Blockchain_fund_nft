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
import 'react';
import { Bullet } from '@antv/g2plot/lib/plots/bullet';
import warn from 'warning';
import get from '@antv/util/lib/get';
import set from '@antv/util/lib/set';
import createPlot from '../createPlot';
import isNil from '@antv/util/lib/is-nil';
import isArray from '@antv/util/lib/is-array';
import { polyfillOptions } from './core/polyfill';
var polyfill = function (opt) {
    var options = polyfillOptions(opt);
    // size
    if (!isNil(get(opt, 'measureSize'))) {
        warn(false, 'measureSize已废弃，请使用size.measure替代');
        set(options, 'size.measure', get(opt, 'measureSize'));
    }
    if (!isNil(get(opt, 'rangeSize'))) {
        warn(false, 'rangeSize已废弃，请使用size.range替代');
        set(options, 'size.range', get(opt, 'rangeSize'));
    }
    if (!isNil(get(opt, 'markerSize'))) {
        warn(false, 'markerSizee已废弃，请使用size.target替代');
        set(options, 'size.target', get(opt, 'markerSize'));
    }
    // color
    if (!isNil(get(opt, 'measureColors'))) {
        warn(false, 'measureColors已废弃，请使用color.measure替代');
        set(options, 'color.measure', get(opt, 'measureColors'));
    }
    if (!isNil(get(opt, 'rangeColors'))) {
        warn(false, 'rangeColors已废弃，请使用color.range替代');
        set(options, 'color.range', get(opt, 'rangeColors'));
    }
    if (!isNil(get(opt, 'markerColors'))) {
        warn(false, 'markerColors已废弃，请使用color.target替代');
        set(options, 'color.target', get(opt, 'markerColors'));
    }
    // bulletStyle
    if (!isNil(get(opt, 'markerStyle'))) {
        warn(false, 'markerStyle已废弃，请使用bulletStyle.target替代');
        set(options, 'bulletStyle.target', get(opt, 'markerStyle'));
    }
    if (isNil(get(opt, 'xAxis.line'))) {
        // 默认不显示轴线
        set(options, 'xAxis.line', false);
    }
    if (isNil(get(opt, 'yAxis'))) {
        // 默认不显示y轴
        set(options, 'yAxis', false);
    }
    if (isNil(get(opt, 'measureField'))) {
        // 默认measureField
        set(options, 'measureField', 'measures');
    }
    if (isNil(get(opt, 'rangeField'))) {
        // 默认rangeField
        set(options, 'rangeField', 'ranges');
    }
    if (isNil(get(opt, 'targetField'))) {
        // 默认targetField
        set(options, 'targetField', 'target');
    }
    // polyfill
    warn(!isNil(get(opt, 'rangeMax')), '该属性已废弃，请在数据中配置range，并配置rangeField');
    if (isArray(get(opt, 'data'))) {
        // 兼容旧版数据格式
        set(options, 'data', opt.data.map(function (it) {
            var range = {};
            if (!isNil(get(opt, 'rangeMax'))) {
                range = { ranges: [get(opt, 'rangeMax')] };
            }
            if (isArray(it.targets)) {
                return __assign(__assign(__assign({}, range), { target: it.targets[0] }), it);
            }
            return __assign(__assign({}, range), it);
        }));
    }
    return options;
};
// 子弹图
export default createPlot(Bullet, 'BulletChart', polyfill);
//# sourceMappingURL=BulletChart.js.map