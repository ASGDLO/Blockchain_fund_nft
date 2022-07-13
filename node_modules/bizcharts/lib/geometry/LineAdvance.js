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
var util_1 = require("@antv/g2/lib/geometry/shape/area/util");
// 按需使用需要加载图形
require("@antv/g2/lib/geometry/shape/line");
require("@antv/g2/lib/geometry/shape/area");
var is_object_1 = __importDefault(require("@antv/util/lib/is-object"));
var deep_mix_1 = __importDefault(require("@antv/util/lib/deep-mix"));
var get_1 = __importDefault(require("@antv/util/lib/get"));
var set_1 = __importDefault(require("@antv/util/lib/set"));
var core_1 = require("../core");
var d3Color = __importStar(require("d3-color"));
var useChartView_1 = __importDefault(require("../hooks/useChartView"));
var useChartInstance_1 = __importDefault(require("../hooks/useChartInstance"));
var Line_1 = __importDefault(require("./Line"));
var Point_1 = __importDefault(require("./Point"));
var Area_1 = __importDefault(require("./Area"));
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
    var chart = useChartInstance_1.default();
    var view = useChartView_1.default();
    var areaCfg = { shape: shape === 'smooth' ? 'gradient-smooth' : 'gradient' };
    var theme = view.getTheme();
    // todo: 需要g2层修改
    theme.geometries.area.gradient = areaStyle;
    // todo: 需要g2层修改
    theme.geometries.area['gradient-smooth'] = areaStyle;
    if (get_1.default(chart, ['options', 'tooltip']) !== false) {
        // 默认为shared
        if (get_1.default(view, ['options', 'tooltip', 'shared']) === undefined) {
            set_1.default(view, ['options', 'tooltip', 'shared'], true);
        }
        ;
        // 默认showCrosshairs
        if (get_1.default(view, ['options', 'tooltip', 'showCrosshairs']) === undefined) {
            set_1.default(view, ['options', 'tooltip', 'showCrosshairs'], true);
        }
        ;
        if (get_1.default(view, ['options', 'tooltip', 'showMarkers']) === undefined) {
            set_1.default(view, ['options', 'tooltip', 'showMarkers'], true);
        }
        ;
    }
    if (is_object_1.default(pointCfg)) {
        deep_mix_1.default(pointCfg, point);
    }
    if (is_object_1.default(areaCfg)) {
        deep_mix_1.default(areaCfg, area);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Line_1.default, __assign({ shape: shape, state: {
                default: { style: { shadowColor: '#ddd', shadowBlur: 3, shadowOffsetY: 2 } },
                active: { style: { shadowColor: '#ddd', shadowBlur: 3, shadowOffsetY: 5 } },
            } }, cfg)),
        !!area && react_1.default.createElement(Area_1.default, __assign({}, cfg, { tooltip: false }, areaCfg)),
        !!point && react_1.default.createElement(Point_1.default, __assign({ size: 3 }, cfg, { state: {
                active: { style: { stroke: '#fff', lineWidth: 1.5, strokeOpacity: 0.9 } },
            }, tooltip: false }, pointCfg))));
};
// Area 几何标记默认的 shape：填充的区域图
core_1.registerShape('area', 'gradient', {
    draw: function (cfg, container) {
        var attrs = util_1.getShapeAttrs(cfg, false, false, this);
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
core_1.registerShape('area', 'gradient-smooth', {
    draw: function (cfg, container) {
        var coordinate = this.coordinate;
        var attrs = util_1.getShapeAttrs(cfg, false, true, this, util_1.getConstraint(coordinate));
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
exports.default = LineAdvance;
//# sourceMappingURL=LineAdvance.js.map