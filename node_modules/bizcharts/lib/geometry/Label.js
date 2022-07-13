"use strict";
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
// 注册 Geometry 内置的 label
var base_1 = __importDefault(require("@antv/g2/lib/geometry/label/base"));
var interval_1 = __importDefault(require("@antv/g2/lib/geometry/label/interval"));
var pie_1 = __importDefault(require("@antv/g2/lib/geometry/label/pie"));
var polar_1 = __importDefault(require("@antv/g2/lib/geometry/label/polar"));
// 注册 Geometry label 内置的布局函数
var distribute_1 = require("@antv/g2/lib/geometry/label/layout/pie/distribute");
var limit_in_canvas_1 = require("@antv/g2/lib/geometry/label/layout/limit-in-canvas");
var limit_in_shape_1 = require("@antv/g2/lib/geometry/label/layout/limit-in-shape");
var overlap_1 = require("@antv/g2/lib/geometry/label/layout/overlap");
var core_1 = require("../core");
var warning_1 = __importDefault(require("warning"));
core_1.registerGeometryLabel('base', base_1.default);
core_1.registerGeometryLabel('interval', interval_1.default);
core_1.registerGeometryLabel('pie', pie_1.default);
core_1.registerGeometryLabel('polar', polar_1.default);
core_1.registerGeometryLabelLayout('overlap', overlap_1.overlap);
core_1.registerGeometryLabelLayout('distribute', distribute_1.distribute);
core_1.registerGeometryLabelLayout('fixed-overlap', overlap_1.fixedOverlap);
core_1.registerGeometryLabelLayout('limit-in-shape', limit_in_shape_1.limitInShape);
core_1.registerGeometryLabelLayout('limit-in-canvas', limit_in_canvas_1.limitInCanvas);
function Label(props) {
    var parentInstance = props.parentInstance, content = props.content, cfg = __rest(props, ["parentInstance", "content"]);
    warning_1.default(false, 'Label组件即将被取消，请使用图形组件的label属性进行配置');
    parentInstance.label(false);
    parentInstance.label(content, cfg);
    return react_1.default.createElement(react_1.default.Fragment, null);
}
exports.default = Label;
//# sourceMappingURL=Label.js.map