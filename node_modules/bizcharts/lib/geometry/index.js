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
var react_1 = __importDefault(require("react"));
var Area_1 = __importDefault(require("./Area"));
var Edge_1 = __importDefault(require("./Edge"));
var Heatmap_1 = __importDefault(require("./Heatmap"));
var Interval_1 = __importDefault(require("./Interval"));
var Line_1 = __importDefault(require("./Line"));
var Point_1 = __importDefault(require("./Point"));
var Polygon_1 = __importDefault(require("./Polygon"));
var LineAdvance_1 = __importDefault(require("./LineAdvance"));
var warning_1 = __importDefault(require("warning"));
var GEOM_MAP = {
    area: Area_1.default,
    edge: Edge_1.default,
    heatmap: Heatmap_1.default,
    interval: Interval_1.default,
    line: Line_1.default,
    point: Point_1.default,
    polygon: Polygon_1.default,
    // bx 做了预设的图形
    'line-advance': LineAdvance_1.default,
};
function default_1(props) {
    var type = props.type, cfg = __rest(props, ["type"]);
    var Geom = GEOM_MAP[type];
    if (Geom)
        return react_1.default.createElement(Geom, __assign({}, cfg));
    warning_1.default(false, 'Only support the below type: area|edge|heatmap|interval|line|point|polygon|line-advance');
    return null;
}
exports.default = default_1;
//# sourceMappingURL=index.js.map