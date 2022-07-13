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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import 'react';
import { WordCloud } from '@antv/g2plot/lib/plots/word-cloud';
import createPlot from '../createPlot';
import { getTheme } from '@antv/g2';
export default createPlot(WordCloud, 'WordCloudChart', function (cfg) {
    var maskImage = cfg.maskImage, _a = cfg.wordField, wordField = _a === void 0 ? 'word' : _a, _b = cfg.weightField, weightField = _b === void 0 ? 'weight' : _b, _c = cfg.colorField, colorField = _c === void 0 ? 'word' : _c, 
    // shape,
    // backgroundColor='#fff',
    selected = cfg.selected, shuffle = cfg.shuffle, _d = cfg.interactions, interactions = _d === void 0 ? [{ type: 'element-active' }] : _d, onGetG2Instance = cfg.onGetG2Instance, tooltip = cfg.tooltip, wordStyle = cfg.wordStyle, onWordCloudHover = cfg.onWordCloudHover, onWordCloudClick = cfg.onWordCloudClick, others = __rest(cfg, ["maskImage", "wordField", "weightField", "colorField", "selected", "shuffle", "interactions", "onGetG2Instance", "tooltip", "wordStyle", "onWordCloudHover", "onWordCloudClick"]);
    var active = wordStyle.active, otherStyles = __rest(wordStyle, ["active"]);
    return __assign({ colorField: colorField,
        wordField: wordField,
        weightField: weightField, imageMask: maskImage, random: shuffle, interactions: interactions, wordStyle: otherStyles, tooltip: tooltip && !tooltip.visible ? false : tooltip, onGetG2Instance: function (c) {
            onGetG2Instance && onGetG2Instance(c);
            if (selected >= 0) {
                var chart_1 = c.chart;
                var theme = getTheme();
                if (active) {
                    // debugger;
                    Object.assign(theme.geometries.point['hollow-circle'].active.style, active);
                }
                chart_1.on('afterrender', function () {
                    if (chart_1.geometries.length) {
                        chart_1.geometries[0].elements.forEach(function (e, idx) {
                            if (idx === selected)
                                e.setState('active', true);
                        });
                    }
                });
                chart_1.on('plot:mousemove', function (e) {
                    if (!e.data) {
                        onWordCloudHover && onWordCloudHover(undefined, undefined, e.event);
                        return;
                    }
                    var _a = e.data.data, datum = _a.datum, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                    onWordCloudHover && onWordCloudHover(datum, { x: x, y: y, w: width, h: height }, e.event);
                });
                chart_1.on('plot:click', function (e) {
                    if (!e.data) {
                        onWordCloudClick && onWordCloudClick(undefined, undefined, e.event);
                        return;
                    }
                    var _a = e.data.data, datum = _a.datum, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                    onWordCloudClick && onWordCloudClick(datum, { x: x, y: y, w: width, h: height }, e.event);
                });
            }
        } }, others);
});
//# sourceMappingURL=WordCloudChart.js.map