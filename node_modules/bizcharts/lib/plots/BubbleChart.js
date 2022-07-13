"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var scatter_1 = require("@antv/g2plot/lib/plots/scatter");
var warning_1 = __importDefault(require("warning"));
var get_1 = __importDefault(require("@antv/util/lib/get"));
var set_1 = __importDefault(require("@antv/util/lib/set"));
var is_nil_1 = __importDefault(require("@antv/util/lib/is-nil"));
var polyfill_1 = require("./core/polyfill");
var createPlot_1 = __importDefault(require("../createPlot"));
;
// 气泡图, 与散点图合并
exports.default = createPlot_1.default(scatter_1.Scatter, 'BubbleChart', function (props) {
    var options = polyfill_1.polyfillOptions(props);
    if (!is_nil_1.default(get_1.default(options, 'pointSize'))) {
        set_1.default(options, 'size', get_1.default(options, 'pointSize'));
    }
    warning_1.default(false, 'BubbleChart 图表类型命名已变更为Scatter，请修改为<ScatterChart />');
    return options;
});
//# sourceMappingURL=BubbleChart.js.map