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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var warning_1 = __importDefault(require("warning"));
var get_1 = __importDefault(require("@antv/util/lib/get"));
var set_1 = __importDefault(require("@antv/util/lib/set"));
var rose_1 = require("@antv/g2plot/lib/plots/rose");
var createPlot_1 = __importDefault(require("../createPlot"));
var polyfill_1 = require("./core/polyfill");
var REPLACEAPILIST = [{
        sourceKey: 'stackField',
        targetKey: 'seriesField',
        notice: 'stackField 是 g2@1.0的属性，即将废弃，请使用seriesField替代',
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
    warning_1.default(false, '<StackedRoseChart /> 即将在5.0后废弃，请使用<RoseChart />替代，');
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
    return __assign(__assign({}, options), { isStack: true });
};
exports.default = createPlot_1.default(rose_1.Rose, 'StackedRoseChart', polyfill);
//# sourceMappingURL=StackedRoseChart.js.map