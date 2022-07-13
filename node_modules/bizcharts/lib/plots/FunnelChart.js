"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var funnel_1 = require("@antv/g2plot/lib/plots/funnel");
var createPlot_1 = __importDefault(require("../createPlot"));
var polyfill_1 = require("./core/polyfill");
exports.default = createPlot_1.default(funnel_1.Funnel, 'FunnelChart', function (props) {
    var options = polyfill_1.polyfillOptions(props);
    polyfill_1.replaceApi([{
            sourceKey: 'transpose',
            targetKey: 'isTransposed',
            notice: 'transpose 即将废弃 请使用isTransposed替代',
        }], options);
    return options;
});
//# sourceMappingURL=FunnelChart.js.map