"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var tiny_column_1 = require("@antv/g2plot/lib/plots/tiny-column");
var set_1 = __importDefault(require("@antv/util/lib/set"));
var createPlot_1 = __importDefault(require("../createPlot"));
var polyfill_1 = require("./core/polyfill");
var util_1 = require("@antv/util");
var polyfill = function (opt) {
    var options = polyfill_1.polyfillOptions(opt);
    if (!util_1.isNil(options.yField)) { // yField不是null/undefined
        var list = options.data
            .map(function (item) { return item[options.yField]; })
            .filter(function (val) { return !util_1.isNil(val); });
        list && list.length && set_1.default(options, 'data', list);
    }
    set_1.default(options, 'tooltip', false);
    return options;
};
exports.default = createPlot_1.default(tiny_column_1.TinyColumn, 'TinyColumnChart', polyfill);
//# sourceMappingURL=TinyColumnChart.js.map