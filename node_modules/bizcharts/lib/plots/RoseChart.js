"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var get_1 = __importDefault(require("@antv/util/lib/get"));
var set_1 = __importDefault(require("@antv/util/lib/set"));
var rose_1 = require("@antv/g2plot/lib/plots/rose");
var createPlot_1 = __importDefault(require("../createPlot"));
var polyfill_1 = require("./core/polyfill");
var REPLACEAPILIST = [{
        sourceKey: 'colorField',
        targetKey: 'seriesField',
        notice: 'colorField 是 g2@1.0的属性，即将废弃，请使用seriesField替代',
    }, {
        sourceKey: 'categoryField',
        targetKey: 'xField',
        notice: 'categoryField 是 g2@1.0的属性，即将废弃，请使用xField替代',
    }, {
        sourceKey: 'radiusField',
        targetKey: 'yField',
        notice: 'radiusField 是 g2@1.0的属性，即将废弃，请使用yFeild替代',
    }];
var polyfill = function (opt) {
    var options = polyfill_1.polyfillOptions(opt);
    polyfill_1.replaceApi(REPLACEAPILIST, options);
    if (get_1.default(options, 'tooltip.visible') === false) {
        set_1.default(options, 'tooltip', false);
    }
    if (get_1.default(options, 'label.visible') === false) {
        set_1.default(options, 'label', false);
    }
    if (get_1.default(options, 'label.type') === 'inner') {
        options.label.offset = -15;
        delete options.label.type;
    }
    if (get_1.default(options, 'label.type') === 'outer') {
        delete options.label.type;
    }
    return options;
};
exports.default = createPlot_1.default(rose_1.Rose, 'RoseChart', polyfill);
//# sourceMappingURL=RoseChart.js.map