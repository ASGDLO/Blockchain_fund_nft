"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var treemap_1 = require("@antv/g2plot/lib/plots/treemap");
var createPlot_1 = __importDefault(require("../createPlot"));
var polyfill_1 = require("./core/polyfill");
var util_1 = require("@antv/util");
var warning_1 = __importDefault(require("warning"));
var formatDataByMaxlevel = function (data, maxLevel, curLevel) {
    if (curLevel === void 0) { curLevel = 1; }
    if (curLevel > maxLevel) {
        delete data.children;
    }
    else {
        var children = data.children;
        if (children && children.length) {
            children.forEach(function (it) {
                formatDataByMaxlevel(it, maxLevel, curLevel + 1);
            });
        }
    }
};
var polyfill = function (opt) {
    var options = polyfill_1.polyfillOptions(opt);
    var maxLevel = util_1.get(options, 'maxLevel', 2);
    if (!util_1.isNil(maxLevel)) {
        if (maxLevel < 1) {
            warning_1.default(false, 'maxLevel 必须大于等于1');
        }
        else {
            var data = util_1.get(options, 'data', {});
            formatDataByMaxlevel(data, maxLevel);
            util_1.set(options, 'data', data);
            util_1.set(options, 'maxLevel', maxLevel);
        }
    }
    return options;
};
exports.default = createPlot_1.default(treemap_1.Treemap, 'TreemapChart', polyfill);
//# sourceMappingURL=TreemapChart.js.map