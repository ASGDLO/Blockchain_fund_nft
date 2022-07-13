"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOOLTIP_EVENT = exports.ANNOTATION_EVENT_TARGET = exports.AXIS_EVENT_TARGET = exports.LEGEND_EVENT = exports.GEOM_NAME = exports.LEGEND_EVENT_TARGETS = exports.LIFE_CIRCLE_NAMES = exports.MOBILE_EVENT_NAMES = exports.DRAG_EVENT_NAMES = exports.pickEventName = exports.BASE_EVENT_NAMES = void 0;
// /[^on]+\S+(?=(Click)\b)/
var for_in_1 = __importDefault(require("@antv/util/lib/for-in"));
exports.BASE_EVENT_NAMES = [
    'mousedown',
    'mouseup',
    'dblclick',
    'mouseenter',
    'mouseout',
    'mouseover',
    'mousemove',
    'mouseleave',
    'contextmenu',
    'click',
];
var EVENT_ACTION_NAMES = [
    'mousedown',
    'mouseup',
    'dblclick',
    'mouseenter',
    'mouseout',
    'mouseover',
    'mousemove',
    'mouseleave',
    'contextmenu',
    'click',
    'show',
    'hide',
    'change',
];
var RegExpEvent = new RegExp("^on(.*)(?=(" + EVENT_ACTION_NAMES.map(function (k) { return k.replace(/^\S/, function (s) { return s.toUpperCase(); }); }).join('|') + "))");
exports.pickEventName = function (props) {
    var names = [];
    for_in_1.default(props, function (v, k) {
        var event = k.match(/^on(.*)/);
        if (event) {
            var res = k.match(RegExpEvent);
            if (res) {
                var target = res[1].replace(/([A-Z])/g, "-$1").toLowerCase();
                if (target) {
                    names.push([k, target.replace('-', '') + ":" + res[2].toLowerCase()]);
                }
                else {
                    names.push([k, res[2].toLowerCase()]);
                }
            }
            else {
                names.push([k, event[1].toLowerCase()]);
            }
        }
    });
    return names;
};
exports.DRAG_EVENT_NAMES = [
    'dragstart',
    'drag',
    'dragend',
    'dragover',
    'dragenter',
    'dragleave',
    'drop'
];
exports.MOBILE_EVENT_NAMES = [
    'touchstart',
    'touchmove',
    'touchend',
];
exports.LIFE_CIRCLE_NAMES = [
    'beforerender',
    'afterrender',
    'beforepaint',
    'afterpaint',
    'beforechangedata',
    'afterchangedata',
    'beforeclear',
    'afterclear',
    'beforedestroy',
];
exports.LEGEND_EVENT_TARGETS = [
    'legend',
    'legend-title',
    'legend-item',
    'legend-item-name',
    'legend-item-Maker',
    'legend-item-value',
];
exports.GEOM_NAME = [
    'line',
    'area',
    'point',
    'interval',
    'polygon',
    'edge',
    'schema'
];
exports.LEGEND_EVENT = ['legend:valuechanged'];
exports.AXIS_EVENT_TARGET = [
    'axis-label',
    'axis-line',
    'axis-tick',
    'axis-title',
];
exports.ANNOTATION_EVENT_TARGET = [
    'annotation',
    'annotation-line',
    'annotation-line-text',
    'annotation-image',
    'annotation-region',
    'annotation-text',
];
exports.TOOLTIP_EVENT = [
    'tooltip:show',
    'tooltip:hide',
    'tooltip:change',
];
//# sourceMappingURL=events.js.map