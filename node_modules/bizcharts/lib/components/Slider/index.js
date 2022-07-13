"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var slider_1 = __importDefault(require("@antv/g2/lib/chart/controller/slider"));
var core_1 = require("@antv/g2/lib/core");
var useChartView_1 = __importDefault(require("../../hooks/useChartView"));
// 引入 slider 组件
core_1.registerComponentController('slider', slider_1.default);
function Slider(props) {
    var view = useChartView_1.default();
    view.option('slider', props);
    return null;
}
exports.default = Slider;
//# sourceMappingURL=index.js.map