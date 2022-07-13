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
import warn from 'warning';
import { get, set, maxBy, minBy, isNil, isObject } from '@antv/util';
import sum from '../../utils/data-transform/sum';
import { pickEventName } from '../../components/Chart/events';
// 批量替换api
export var replaceApi = function (replaceApiList, options) {
    replaceApiList.forEach(function (item) {
        var sourceKey = item.sourceKey, targetKey = item.targetKey, notice = item.notice;
        var value = get(options, sourceKey);
        if (value) {
            warn(false, notice);
            set(options, targetKey, value);
        }
    });
};
/**
 * 将的sourceKey的配置作为targetKey的配置；
 * 例如：将angleAxis的作为xAxis的配置
 */
export var polyfillAxis = function (cfg, name) {
    var options = get(cfg, name);
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
    if (!isObject(options)) {
        warn(true, name + " \u914D\u7F6E\u53C2\u6570\u4E0D\u6B63\u786E");
        return;
    }
    polyfillVisible(options, 'line');
    polyfillVisible(options, 'grid');
    polyfillVisible(options, 'label');
    polyfillVisible(options, 'tickLine');
    polyfillVisible(options, 'title');
    var label = get(options, 'label');
    if (label) {
        if (isObject(label)) {
            var suffix_1 = label.suffix;
            if (suffix_1) { // 不是undefined null 或 suffix存在
                set(label, 'formatter', function (val) { return "" + val + suffix_1; });
            }
            // @ts-ignore
            var offsetX = label.offsetX, offsetY = label.offsetY, offset = label.offset;
            if (isNil(offset) && (!isNil(offsetX) || !isNil(offsetY))) {
                if (name === 'xAxis') {
                    set(label, 'offset', !isNil(offsetX) ? offsetX : offsetY);
                }
                if (name === 'yAxis') {
                    set(label, 'offset', !isNil(offsetY) ? offsetY : offsetX);
                }
            }
        }
    }
    cfg[name] = __assign(__assign({}, options), { label: label });
};
// visible的使用转化
export var polyfillVisible = function (polyfillOpt, path) {
    var vis = get(polyfillOpt, path + ".visible");
    if (vis === false || vis === null) {
        set(polyfillOpt, path, false);
    }
    return vis;
};
export var polyfillOptions = function (opt) {
    var polyfillOpt = __assign({}, opt);
    // tooltip
    polyfillVisible(polyfillOpt, 'tooltip');
    // legend
    var legendVis = polyfillVisible(polyfillOpt, 'legend');
    if (legendVis) {
        polyfillVisible(polyfillOpt, 'legend.title');
        var position = get(polyfillOpt, 'legend.position');
        if (position) {
            set(polyfillOpt, 'legend.position', ({
                'top-center': 'top',
                'right-center': 'right',
                'left-center': 'left',
                'bottom-center': 'bottom',
            })[position] || position);
        }
    }
    var formatter = get(polyfillOpt, 'legend.formatter');
    if (formatter) {
        var itemName = get(polyfillOpt, 'legend.itemName', {});
        set(polyfillOpt, 'legend.itemName', __assign(__assign({}, itemName), { formatter: formatter }));
    }
    var textConfig = get(polyfillOpt, 'legend.text');
    if (textConfig) {
        set(polyfillOpt, 'legend.itemName', textConfig);
    }
    // label
    polyfillVisible(polyfillOpt, 'label');
    // axis
    polyfillAxis(polyfillOpt, 'xAxis');
    polyfillAxis(polyfillOpt, 'yAxis');
    // 辅助线
    var guideLine = get(polyfillOpt, 'guideLine', []);
    var data = get(polyfillOpt, 'data', []);
    var yField = get(polyfillOpt, 'yField', 'y');
    guideLine.forEach(function (element) {
        if (data.length > 0) {
            var y = 'median';
            switch (element.type) {
                case 'max':
                    y = maxBy(data, function (d) { return d[yField]; })[yField];
                    break;
                case 'mean':
                    y = sum(data.map(function (d) { return d[yField]; })) / data.length;
                    break;
                default:
                    // min
                    y = minBy(data, function (d) { return d[yField]; })[yField];
                    break;
            }
            var line = __assign(__assign({ start: ['min', y], end: ['max', y], style: element.lineStyle, text: { content: y } }, element), { type: 'line' });
            if (!get(polyfillOpt, 'annotations')) {
                set(polyfillOpt, 'annotations', []);
            }
            polyfillOpt.annotations.push(line);
            set(polyfillOpt, 'point', false);
        }
    });
    // slider
    var interactions = get(polyfillOpt, 'interactions', []);
    var slider = interactions.find(function (it) { return it.type === 'slider'; });
    if (slider && isNil(polyfillOpt.slider)) {
        polyfillOpt.slider = slider.cfg;
    }
    return polyfillOpt;
};
export var polyfillEvents = function (chart, preOptions, newOptions) {
    // 事件兼容
    var eventNames = pickEventName(get(preOptions, 'events', []));
    var newEventNames = pickEventName(get(newOptions, 'events', []));
    // 取消事件绑定
    eventNames.forEach(function (ev) {
        chart.off(ev[1], preOptions.events[ev[0]]);
    });
    // 重新事件绑定
    newEventNames.forEach(function (ev) {
        chart.on(ev[1], newOptions.events[ev[0]]);
    });
};
export var polyfillTitleEvent = function (options) {
    var events = get(options, 'events', {});
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
export var polyfillDescriptionEvent = function (options) {
    var events = get(options, 'events', {});
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