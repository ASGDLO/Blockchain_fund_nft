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
import { getShapeAttrs, getConstraint } from '@antv/g2/lib/geometry/shape/area/util';
// 按需使用需要加载图形
import '@antv/g2/lib/geometry/shape/line';
import '@antv/g2/lib/geometry/shape/area';
import _isObject from '@antv/util/lib/is-object';
import _deepMix from '@antv/util/lib/deep-mix';
import _get from '@antv/util/lib/get';
import _set from '@antv/util/lib/set';
import { registerShape } from '../core';
import * as d3Color from 'd3-color';
import useChartView from '../hooks/useChartView';
import useChartInstance from '../hooks/useChartInstance';
import Line from './Line';
import Point from './Point';
import Area from './Area';
var areaStyle = {
    "default": {
        "style": {
            "fill": "#5B8FF9",
            "fillOpacity": 0.25,
            "stroke": null
        }
    },
    "active": {
        "style": { "fillOpacity": 0.5 }
    },
    "inactive": {
        "style": { "fillOpacity": 0.4 }
    },
    "selected": {
        "style": { "fillOpacity": 0.5 }
    }
};
var LineAdvance = function (props) {
    var point = props.point, area = props.area, shape = props.shape, cfg = __rest(props, ["point", "area", "shape"]);
    var pointCfg = { shape: 'circle' };
    var chart = useChartInstance();
    var view = useChartView();
    var areaCfg = { shape: shape === 'smooth' ? 'gradient-smooth' : 'gradient' };
    var theme = view.getTheme();
    // todo: 需要g2层修改
    theme.geometries.area.gradient = areaStyle;
    // todo: 需要g2层修改
    theme.geometries.area['gradient-smooth'] = areaStyle;
    if (_get(chart, ['options', 'tooltip']) !== false) {
        // 默认为shared
        if (_get(view, ['options', 'tooltip', 'shared']) === undefined) {
            _set(view, ['options', 'tooltip', 'shared'], true);
        }
        ;
        // 默认showCrosshairs
        if (_get(view, ['options', 'tooltip', 'showCrosshairs']) === undefined) {
            _set(view, ['options', 'tooltip', 'showCrosshairs'], true);
        }
        ;
        if (_get(view, ['options', 'tooltip', 'showMarkers']) === undefined) {
            _set(view, ['options', 'tooltip', 'showMarkers'], true);
        }
        ;
    }
    if (_isObject(pointCfg)) {
        _deepMix(pointCfg, point);
    }
    if (_isObject(areaCfg)) {
        _deepMix(areaCfg, area);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Line, __assign({ shape: shape, state: {
                default: { style: { shadowColor: '#ddd', shadowBlur: 3, shadowOffsetY: 2 } },
                active: { style: { shadowColor: '#ddd', shadowBlur: 3, shadowOffsetY: 5 } },
            } }, cfg)),
        !!area && React.createElement(Area, __assign({}, cfg, { tooltip: false }, areaCfg)),
        !!point && React.createElement(Point, __assign({ size: 3 }, cfg, { state: {
                active: { style: { stroke: '#fff', lineWidth: 1.5, strokeOpacity: 0.9 } },
            }, tooltip: false }, pointCfg))));
};
// Area 几何标记默认的 shape：填充的区域图
registerShape('area', 'gradient', {
    draw: function (cfg, container) {
        var attrs = getShapeAttrs(cfg, false, false, this);
        var c = attrs.fill;
        var clr = d3Color.color(c);
        if (clr) {
            attrs.fill = "l (90) 0:" + d3Color.rgb(clr.r, clr.g, clr.b, 1).formatRgb() + " 1:" + d3Color.rgb(clr.r, clr.g, clr.b, 0.1).formatRgb();
        }
        // attrs.fill = 'red';
        var shape = container.addShape({
            type: 'path',
            attrs: attrs,
            name: 'area',
        });
        return shape;
    },
});
/**
 * 填充的平滑曲面图
 */
registerShape('area', 'gradient-smooth', {
    draw: function (cfg, container) {
        var coordinate = this.coordinate;
        var attrs = getShapeAttrs(cfg, false, true, this, getConstraint(coordinate));
        var c = attrs.fill;
        var clr = d3Color.color(c);
        if (clr) {
            attrs.fill = "l (90) 0:" + d3Color.rgb(clr.r, clr.g, clr.b, 1).formatRgb() + " 1:" + d3Color.rgb(clr.r, clr.g, clr.b, 0.1).formatRgb();
        }
        // attrs.fill = 'red';
        var shape = container.addShape({
            type: 'path',
            attrs: attrs,
            name: 'area',
        });
        return shape;
    }
});
export default LineAdvance;
//# sourceMappingURL=LineAdvance.js.map