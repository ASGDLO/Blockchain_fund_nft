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
var is_nil_1 = __importDefault(require("@antv/util/lib/is-nil"));
var is_function_1 = __importDefault(require("@antv/util/lib/is-function"));
// import _tranPropsToArray from '../../utils/tranPropsToArray';
var useChartView_1 = __importDefault(require("../../hooks/useChartView"));
function Coordinate(props) {
    var type = props.type, transpose = props.transpose, rotate = props.rotate, scale = props.scale, reflect = props.reflect, actions = props.actions, options = __rest(props, ["type", "transpose", "rotate", "scale", "reflect", "actions"]);
    var view = useChartView_1.default();
    var coordIns = view.coordinate();
    // 重置
    coordIns.update({});
    if (type) {
        view.coordinate(type, __assign({}, options));
    }
    else {
        view.coordinate('rect', __assign({}, options));
    }
    if (rotate) {
        coordIns.rotate(rotate);
    }
    if (scale) {
        coordIns.scale.apply(coordIns, scale);
    }
    if (!is_nil_1.default(reflect)) {
        coordIns.reflect(reflect);
    }
    if (transpose) {
        coordIns.transpose();
    }
    if (is_function_1.default(actions)) {
        actions(coordIns);
    }
    return null;
}
exports.default = Coordinate;
//# sourceMappingURL=index.js.map