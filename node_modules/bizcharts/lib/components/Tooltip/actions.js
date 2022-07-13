"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var active_region_1 = __importDefault(require("@antv/g2/lib/interaction/action/active-region"));
var sibling_1 = __importDefault(require("@antv/g2/lib/interaction/action/component/tooltip/sibling"));
var geometry_1 = __importDefault(require("@antv/g2/lib/interaction/action/component/tooltip/geometry"));
var ellipsis_text_1 = __importDefault(require("@antv/g2/lib/interaction/action/component/tooltip/ellipsis-text"));
var core_1 = require("../../core");
core_1.registerAction('tooltip', geometry_1.default);
core_1.registerAction('sibling-tooltip', sibling_1.default);
core_1.registerAction('active-region', active_region_1.default);
core_1.registerAction('ellipsis-text', ellipsis_text_1.default);
// 注册 tooltip 的 interaction
core_1.registerInteraction('tooltip', {
    start: [
        { trigger: 'plot:mousemove', action: 'tooltip:show', throttle: { wait: 50, leading: true, trailing: false } },
        { trigger: 'plot:touchmove', action: 'tooltip:show', throttle: { wait: 50, leading: true, trailing: false } },
    ],
    end: [
        { trigger: 'plot:mouseleave', action: 'tooltip:hide' },
        { trigger: 'plot:leave', action: 'tooltip:hide' },
        { trigger: 'plot:touchend', action: 'tooltip:hide' },
    ],
});
core_1.registerInteraction('ellipsis-text', {
    start: [
        {
            trigger: 'legend-item-name:mousemove',
            action: 'ellipsis-text:show',
            throttle: { wait: 50, leading: true, trailing: false },
        },
        {
            trigger: 'legend-item-name:touchstart',
            action: 'ellipsis-text:show',
            throttle: { wait: 50, leading: true, trailing: false },
        },
        {
            trigger: 'axis-label:mousemove',
            action: 'ellipsis-text:show',
            throttle: { wait: 50, leading: true, trailing: false },
        },
        {
            trigger: 'axis-label:touchstart',
            action: 'ellipsis-text:show',
            throttle: { wait: 50, leading: true, trailing: false },
        },
    ],
    end: [
        { trigger: 'legend-item-name:mouseleave', action: 'ellipsis-text:hide' },
        { trigger: 'legend-item-name:touchend', action: 'ellipsis-text:hide' },
        { trigger: 'axis-label:mouseleave', action: 'ellipsis-text:hide' },
        { trigger: 'axis-label:touchend', action: 'ellipsis-text:hide' },
    ],
});
// click 触发
core_1.registerInteraction('tooltip-click', {
    start: [
        { trigger: 'plot:click', action: 'tooltip:show', throttle: { wait: 50, leading: true, trailing: false } },
        { trigger: 'plot:touchstart', action: 'tooltip:show', throttle: { wait: 50, leading: true, trailing: false } },
    ],
    end: [
        { trigger: 'plot:leave', action: 'tooltip:hide' },
    ],
});
// tooltip 跟随和不跟随之间切换
var toggleLock = function (context) {
    var locked = context.view.isTooltipLocked();
    if (locked) {
        context.view.unlockTooltip();
    }
    else {
        context.view.lockTooltip();
    }
};
core_1.registerInteraction('tooltip-lock', {
    start: [
        { trigger: 'plot:click', action: toggleLock },
        { trigger: 'plot:touchstart', action: toggleLock },
        { trigger: 'plot:touchmove', action: 'tooltip:show', throttle: { wait: 50, leading: true, trailing: false } },
        { trigger: 'plot:mousemove', action: 'tooltip:show' },
    ],
    end: [
        { trigger: 'plot:click', action: 'tooltip:hide' },
        { trigger: 'plot:leave', action: 'tooltip:hide' },
        { trigger: 'plot:touchend', action: 'tooltip:hide' },
    ],
});
// 注册 sibling-tooltip 的 interaction
core_1.registerInteraction('sibling-tooltip', {
    start: [{ trigger: 'plot:mousemove', action: 'sibling-tooltip:show' }],
    end: [{ trigger: 'plot:mouseleave', action: 'sibling-tooltip:hide' }],
});
//# sourceMappingURL=actions.js.map