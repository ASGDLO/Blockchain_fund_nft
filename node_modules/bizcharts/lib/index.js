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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GComponents = exports.G2 = exports.Annotation = exports.Util = void 0;
var antUtils = __importStar(require("@antv/util"));
var Annotation = __importStar(require("./components/Annotation"));
exports.Annotation = Annotation;
var G2 = __importStar(require("./g2-all"));
exports.G2 = G2;
var GComponents = __importStar(require("./g-components"));
exports.GComponents = GComponents;
var bxUtil = __importStar(require("./utils"));
exports.Util = __assign(__assign(__assign({}, antUtils), bxUtil), G2.Util);
var Chart_1 = require("./components/Chart");
Object.defineProperty(exports, "Chart", { enumerable: true, get: function () { return Chart_1.default; } });
var View_1 = require("./components/View");
Object.defineProperty(exports, "View", { enumerable: true, get: function () { return View_1.default; } });
var Tooltip_1 = require("./components/Tooltip");
Object.defineProperty(exports, "Tooltip", { enumerable: true, get: function () { return Tooltip_1.default; } });
var Legend_1 = require("./components/Legend");
Object.defineProperty(exports, "Legend", { enumerable: true, get: function () { return Legend_1.default; } });
var Coordinate_1 = require("./components/Coordinate");
Object.defineProperty(exports, "Coordinate", { enumerable: true, get: function () { return Coordinate_1.default; } });
var Axis_1 = require("./components/Axis");
Object.defineProperty(exports, "Axis", { enumerable: true, get: function () { return Axis_1.default; } });
var Facet_1 = require("./components/Facet");
Object.defineProperty(exports, "Facet", { enumerable: true, get: function () { return Facet_1.default; } });
var Slider_1 = require("./components/Slider");
Object.defineProperty(exports, "Slider", { enumerable: true, get: function () { return Slider_1.default; } });
// geometry
var Area_1 = require("./geometry/Area");
Object.defineProperty(exports, "Area", { enumerable: true, get: function () { return Area_1.default; } });
var Edge_1 = require("./geometry/Edge");
Object.defineProperty(exports, "Edge", { enumerable: true, get: function () { return Edge_1.default; } });
var Heatmap_1 = require("./geometry/Heatmap");
Object.defineProperty(exports, "Heatmap", { enumerable: true, get: function () { return Heatmap_1.default; } });
var Interval_1 = require("./geometry/Interval");
Object.defineProperty(exports, "Interval", { enumerable: true, get: function () { return Interval_1.default; } });
var Line_1 = require("./geometry/Line");
Object.defineProperty(exports, "Line", { enumerable: true, get: function () { return Line_1.default; } });
var Point_1 = require("./geometry/Point");
Object.defineProperty(exports, "Point", { enumerable: true, get: function () { return Point_1.default; } });
var Polygon_1 = require("./geometry/Polygon");
Object.defineProperty(exports, "Polygon", { enumerable: true, get: function () { return Polygon_1.default; } });
var Schema_1 = require("./geometry/Schema");
Object.defineProperty(exports, "Schema", { enumerable: true, get: function () { return Schema_1.default; } });
var Base_1 = require("./geometry/Base");
Object.defineProperty(exports, "BaseGeom", { enumerable: true, get: function () { return Base_1.default; } });
var Label_1 = require("./geometry/Label");
Object.defineProperty(exports, "Label", { enumerable: true, get: function () { return Label_1.default; } });
var Path_1 = require("./geometry/Path");
Object.defineProperty(exports, "Path", { enumerable: true, get: function () { return Path_1.default; } });
var LineAdvance_1 = require("./geometry/LineAdvance");
Object.defineProperty(exports, "LineAdvance", { enumerable: true, get: function () { return LineAdvance_1.default; } });
// 通用 geometry
var geometry_1 = require("./geometry");
Object.defineProperty(exports, "Geom", { enumerable: true, get: function () { return geometry_1.default; } });
// 兼容
var coord_1 = require("./components/Coordinate/coord");
Object.defineProperty(exports, "Coord", { enumerable: true, get: function () { return coord_1.default; } });
var Guide_1 = require("./adapter/Guide");
Object.defineProperty(exports, "Guide", { enumerable: true, get: function () { return Guide_1.default; } });
// 工具
var Effects_1 = require("./components/Effects");
Object.defineProperty(exports, "Effects", { enumerable: true, get: function () { return Effects_1.default; } });
var Interaction_1 = require("./components/Interaction");
Object.defineProperty(exports, "Interaction", { enumerable: true, get: function () { return Interaction_1.default; } });
var createPlot_1 = require("./createPlot");
Object.defineProperty(exports, "createPlot", { enumerable: true, get: function () { return createPlot_1.default; } });
var createTooltipConnector_1 = require("./connector/createTooltipConnector");
Object.defineProperty(exports, "createTooltipConnector", { enumerable: true, get: function () { return createTooltipConnector_1.default; } });
// hooks
var useChartView_1 = require("./hooks/useChartView");
Object.defineProperty(exports, "useView", { enumerable: true, get: function () { return useChartView_1.default; } });
// fixme: 更名，在5.0后正式更名为 useChartInstance
var useChartInstance_1 = require("./hooks/useChartInstance");
Object.defineProperty(exports, "useRootChart", { enumerable: true, get: function () { return useChartInstance_1.default; } });
// 正确写法
var useChartInstance_2 = require("./hooks/useChartInstance");
Object.defineProperty(exports, "useChartInstance", { enumerable: true, get: function () { return useChartInstance_2.default; } });
var useTheme_1 = require("./hooks/useTheme");
Object.defineProperty(exports, "useTheme", { enumerable: true, get: function () { return useTheme_1.default; } });
var view_1 = require("./context/view");
Object.defineProperty(exports, "withView", { enumerable: true, get: function () { return view_1.withView; } });
var root_1 = require("./context/root");
Object.defineProperty(exports, "withChartInstance", { enumerable: true, get: function () { return root_1.withChartInstance; } });
// 注册主题
__exportStar(require("./core"), exports);
// 基于 g2-plots 基础图表
__exportStar(require("./plots"), exports);
// g-components
//# sourceMappingURL=index.js.map