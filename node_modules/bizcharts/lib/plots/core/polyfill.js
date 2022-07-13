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
exports.polyfillDescriptionEvent = exports.polyfillTitleEvent = exports.polyfillEvents = exports.polyfillOptions = exports.polyfillVisible = exports.polyfillAxis = exports.replaceApi = void 0;
var warning_1 = __importDefault(require("warning"));
var util_1 = require("@antv/util");
var sum_1 = __importDefault(require("../../utils/data-transform/sum"));
var events_1 = require("../../components/Chart/events");
// 批量替换api
exports.replaceApi = function (replaceApiList, options) {
    replaceApiList.forEach(function (item) {
        var sourceKey = item.sourceKey, targetKey = item.targetKey, notice = item.notice;
        var value = util_1.get(options, sourceKey);
        if (value) {
            warning_1.default(false, notice);
            util_1.set(options, targetKey, value);
        }
    });
};
/**
 * 将的sourceKey的配置作为targetKey的配置；
 * 例如：将angleAxis的作为xAxis的配置
 */
exports.polyfillAxis = function (cfg, name) {
    var options = util_1.get(cfg, name);
    if (options === false || options === null) {
        cfg[name] = null;
        return;
    }
    if (options === undefined) {
        return;
    }
    if (options === true) {
        cfg[name] = {};
        return;
    }
    if (!util_1.isObject(options)) {
        warning_1.default(true, name + " \u914D\u7F6E\u53C2\u6570\u4E0D\u6B63\u786E");
        return;
    }
    exports.polyfillVisible(options, 'line');
    exports.polyfillVisible(options, 'grid');
    exports.polyfillVisible(options, 'label');
    exports.polyfillVisible(options, 'tickLine');
    exports.polyfillVisible(options, 'title');
    var label = util_1.get(options, 'label');
    if (label) {
        if (util_1.isObject(label)) {
            var suffix_1 = label.suffix;
            if (suffix_1) { // 不是undefined null 或 suffix存在
                util_1.set(label, 'formatter', function (val) { return "" + val + suffix_1; });
            }
            // @ts-ignore
            var offsetX = label.offsetX, offsetY = label.offsetY, offset = label.offset;
            if (util_1.isNil(offset) && (!util_1.isNil(offsetX) || !util_1.isNil(offsetY))) {
                if (name === 'xAxis') {
                    util_1.set(label, 'offset', !util_1.isNil(offsetX) ? offsetX : offsetY);
                }
                if (name === 'yAxis') {
                    util_1.set(label, 'offset', !util_1.isNil(offsetY) ? offsetY : offsetX);
                }
            }
        }
    }
    cfg[name] = __assign(__assign({}, options), { label: label });
};
// visible的使用转化
exports.polyfillVisible = function (polyfillOpt, path) {
    var vis = util_1.get(polyfillOpt, path + ".visible");
    if (vis === false || vis === null) {
        util_1.set(polyfillOpt, path, false);
    }
    return vis;
};
exports.polyfillOptions = function (opt) {
    var polyfillOpt = __assign({}, opt);
    // tooltip
    exports.polyfillVisible(polyfillOpt, 'tooltip');
    // legend
    var legendVis = exports.polyfillVisible(polyfillOpt, 'legend');
    if (legendVis) {
        exports.polyfillVisible(polyfillOpt, 'legend.title');
        var position = util_1.get(polyfillOpt, 'legend.position');
        if (position) {
            util_1.set(polyfillOpt, 'legend.position', ({
                'top-center': 'top',
                'right-center': 'right',
                'left-center': 'left',
                'bottom-center': 'bottom',
            })[position] || position);
        }
    }
    var formatter = util_1.get(polyfillOpt, 'legend.formatter');
    if (formatter) {
        var itemName = util_1.get(polyfillOpt, 'legend.itemName', {});
        util_1.set(polyfillOpt, 'legend.itemName', __assign(__assign({}, itemName), { formatter: formatter }));
    }
    var textConfig = util_1.get(polyfillOpt, 'legend.text');
    if (textConfig) {
        util_1.set(polyfillOpt, 'legend.itemName', textConfig);
    }
    // label
    exports.polyfillVisible(polyfillOpt, 'label');
    // axis
    exports.polyfillAxis(polyfillOpt, 'xAxis');
    exports.polyfillAxis(polyfillOpt, 'yAxis');
    // 辅助线
    var guideLine = util_1.get(polyfillOpt, 'guideLine', []);
    var data = util_1.get(polyfillOpt, 'data', []);
    var yField = util_1.get(polyfillOpt, 'yField', 'y');
    guideLine.forEach(function (element) {
        if (data.length > 0) {
            var y = 'median';
            switch (element.type) {
                case 'max':
                    y = util_1.maxBy(data, function (d) { return d[yField]; })[yField];
                    break;
                case 'mean':
                    y = sum_1.default(data.map(function (d) { return d[yField]; })) / data.length;
                    break;
                default:
                    // min
                    y = util_1.minBy(data, function (d) { return d[yField]; })[yField];
                    break;
            }
            var line = __assign(__assign({ start: ['min', y], end: ['max', y], style: element.lineStyle, text: { content: y } }, element), { type: 'line' });
            if (!util_1.get(polyfillOpt, 'annotations')) {
                util_1.set(polyfillOpt, 'annotations', []);
            }
            polyfillOpt.annotations.push(line);
            util_1.set(polyfillOpt, 'point', false);
        }
    });
    // slider
    var interactions = util_1.get(polyfillOpt, 'interactions', []);
    var slider = interactions.find(function (it) { return it.type === 'slider'; });
    if (slider && util_1.isNil(polyfillOpt.slider)) {
        polyfillOpt.slider = slider.cfg;
    }
    return polyfillOpt;
};
exports.polyfillEvents = function (chart, preOptions, newOptions) {
    // 事件兼容
    var eventNames = events_1.pickEventName(util_1.get(preOptions, 'events', []));
    var newEventNames = events_1.pickEventName(util_1.get(newOptions, 'events', []));
    // 取消事件绑定
    eventNames.forEach(function (ev) {
        chart.off(ev[1], preOptions.events[ev[0]]);
    });
    // 重新事件绑定
    newEventNames.forEach(function (ev) {
        chart.on(ev[1], newOptions.events[ev[0]]);
    });
};
exports.polyfillTitleEvent = function (options) {
    var events = util_1.get(options, 'events', {});
    var titleEvents = {};
    [
        'onTitleClick',
        'onTitleDblClick',
        'onTitleMouseleave',
        'onTitleMousemove',
        'onTitleMousedown',
        'onTitleMouseup',
        'onTitleMouseenter'
    ].forEach(function (e) {
        if (events[e]) {
            titleEvents[e.replace('Title', '')] = events[e];
        }
    });
    return titleEvents;
};
exports.polyfillDescriptionEvent = function (options) {
    var events = util_1.get(options, 'events', {});
    var titleEvents = {};
    [
        'onDescriptionClick',
        'onDescriptionDblClick',
        'onDescriptionMouseleave',
        'onDescriptionMousemove',
        'onDescriptionMousedown',
        'onDescriptionMouseup',
        'onDescriptionMouseenter'
    ].forEach(function (e) {
        if (events[e]) {
            titleEvents[e.replace('Description', '')] = events[e];
        }
    });
    return titleEvents;
};
//# sourceMappingURL=polyfill.js.map