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
var rose_1 = require("@antv/g2plot/lib/plots/rose");
var createPlot_1 = __importDefault(require("../createPlot"));
var polyfill_1 = require("./core/polyfill");
var util_1 = require("@antv/util");
var REPLACEAPILIST = [{
        sourceKey: 'groupField',
        targetKey: 'seriesField',
        notice: 'groupField 是 g2@1.0的属性，即将废弃，请使用seriesField替代',
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
    warning_1.default(false, '<GroupedRose /> 即将在5.0后废弃，请使用<Rose />。');
    var options = polyfill_1.polyfillOptions(opt);
    polyfill_1.replaceApi(REPLACEAPILIST, options);
    if (util_1.get(options, 'label.type') === 'inner') {
        options.label.offset = -15;
        delete options.label.type;
    }
    if (util_1.get(options, 'label.type') === 'outer') {
        delete options.label.type;
    }
    return __assign(__assign({}, options), { isGroup: true });
};
exports.default = createPlot_1.default(rose_1.Rose, 'GroupedRoseChart', polyfill);
//# sourceMappingURL=GroupedRoseChart.js.map