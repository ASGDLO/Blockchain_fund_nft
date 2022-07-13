"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var get_1 = __importDefault(require("@antv/util/lib/get"));
var set_1 = __importDefault(require("@antv/util/lib/set"));
var scatter_1 = require("@antv/g2plot/lib/plots/scatter");
var createPlot_1 = __importDefault(require("../createPlot"));
var polyfill_1 = require("./core/polyfill");
var util_1 = require("@antv/util");
var polyfill = function (opt) {
    var options = polyfill_1.polyfillOptions(opt);
    if (get_1.default(options, 'pointSize')) {
        set_1.default(options, 'size', get_1.default(options, 'pointSize'));
    }
    polyfill_1.polyfillVisible(options, 'quadrant');
    var quadrantLabel = get_1.default(options, 'quadrant.label');
    var qLabels = get_1.default(options, 'quadrant.labels');
    if (!qLabels && quadrantLabel) {
        var text = quadrantLabel.text, style_1 = quadrantLabel.style;
        if (text && text.length && style_1) {
            var labels = text.map(function (txt) { return ({ style: style_1, content: txt }); });
            set_1.default(options, 'quadrant.labels', labels);
        }
    }
    var regressionLine = get_1.default(options, 'regressionLine');
    if (!regressionLine) {
        var trendline = get_1.default(options, 'trendline');
        if (util_1.isObject(trendline) && get_1.default(trendline, 'visible') === false) {
            set_1.default(options, 'regressionLine', null);
        }
        else {
            set_1.default(options, 'regressionLine', trendline);
        }
    }
    return options;
};
exports.default = createPlot_1.default(scatter_1.Scatter, 'ScatterChart', polyfill);
//# sourceMappingURL=ScatterChart.js.map