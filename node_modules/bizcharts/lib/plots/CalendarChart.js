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
var heatmap_1 = require("@antv/g2plot/lib/plots/heatmap");
var createPlot_1 = __importDefault(require("../createPlot"));
var g2plot_1 = require("@antv/g2plot");
var polyfill_1 = require("./core/polyfill");
var util_1 = require("@antv/util");
g2plot_1.G2.registerShape('polygon', 'boundary-polygon', {
    draw: function (cfg, container) {
        var group = container.addGroup();
        var attrs = {
            stroke: '#fff',
            lineWidth: 1,
            fill: cfg.color,
            paht: [],
        };
        var points = cfg.points;
        var path = [
            ['M', points[0].x, points[0].y],
            ['L', points[1].x, points[1].y],
            ['L', points[2].x, points[2].y],
            ['L', points[3].x, points[3].y],
            ['Z'],
        ];
        // @ts-ignore
        attrs.path = this.parsePath(path);
        group.addShape('path', {
            attrs: attrs,
        });
        if (util_1.get(cfg, 'data.lastWeek')) {
            var linePath = [
                ['M', points[2].x, points[2].y],
                ['L', points[3].x, points[3].y],
            ];
            // 最后一周的多边形添加右侧边框
            group.addShape('path', {
                attrs: {
                    path: this.parsePath(linePath),
                    lineWidth: 4,
                    stroke: '#404040',
                },
            });
            if (util_1.get(cfg, 'data.lastDay')) {
                group.addShape('path', {
                    attrs: {
                        path: this.parsePath([
                            ['M', points[1].x, points[1].y],
                            ['L', points[2].x, points[2].y],
                        ]),
                        lineWidth: 4,
                        stroke: '#404040',
                    },
                });
            }
        }
        return group;
    },
});
var REPLACEAPILIST = [{
        sourceKey: 'colors',
        targetKey: 'color',
        notice: 'colors 是 g2Plot@1.0 的属性，请使用 color 属性替代',
    }, {
        sourceKey: 'valueField',
        targetKey: 'colorField',
        notice: 'valueField 是 g2@1.0的属性，即将废弃，请使用colorField替代',
    }, {
        sourceKey: 'radiusField',
        targetKey: 'yField',
        notice: 'radiusField 是 g2@1.0的属性，即将废弃，请使用yFeild替代',
    }];
exports.default = createPlot_1.default(heatmap_1.Heatmap, 'CalendarChart', function (props) {
    var options = polyfill_1.polyfillOptions(props);
    polyfill_1.replaceApi(REPLACEAPILIST, options);
    if (util_1.isNil(util_1.get(props, 'shape'))) {
        util_1.set(options, 'shape', 'boundary-polygon');
    }
    // 1.0 的默认值
    if (util_1.isNil(util_1.get(options, 'xField')) && util_1.isNil(util_1.get(options, 'yField'))) {
        util_1.set(options, 'xField', 'week');
        util_1.set(options, 'meta.week', __assign({ type: 'cat' }, util_1.get(options, 'meta.week', {})));
        util_1.set(options, 'yField', 'day');
        util_1.set(options, 'meta.day', {
            type: 'cat',
            values: ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'],
        });
        util_1.set(options, 'reflect', 'y');
        util_1.set(options, 'xAxis', __assign({ tickLine: null, line: null, title: null, label: {
                offset: 20,
                style: {
                    fontSize: 12,
                    fill: '#bbb',
                    textBaseline: 'top',
                },
                formatter: function (val) {
                    if (val == '2') {
                        return 'MAY';
                    }
                    else if (val === '6') {
                        return 'JUN';
                    }
                    else if (val == '10') {
                        return 'JUL';
                    }
                    else if (val === '14') {
                        return 'AUG';
                    }
                    else if (val == '18') {
                        return 'SEP';
                    }
                    else if (val === '24') {
                        return 'OCT';
                    }
                    return '';
                },
            } }, util_1.get(options, 'xAxis', {})));
    }
    return options;
});
//# sourceMappingURL=CalendarChart.js.map