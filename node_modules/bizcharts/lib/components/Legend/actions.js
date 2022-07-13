"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var list_highlight_1 = __importDefault(require("@antv/g2/lib/interaction/action/component/list-highlight"));
var list_active_1 = __importDefault(require("@antv/g2/lib/interaction/action/component/list-active"));
var list_unchecked_1 = __importDefault(require("@antv/g2/lib/interaction/action/component/list-unchecked"));
var filter_1 = __importDefault(require("@antv/g2/lib/interaction/action/data/filter"));
var list_selected_1 = __importDefault(require("@antv/g2/lib/interaction/action/component/list-selected"));
var core_1 = require("../../core");
core_1.registerAction('list-active', list_active_1.default);
core_1.registerAction('list-selected', list_selected_1.default);
core_1.registerAction('list-highlight', list_highlight_1.default);
core_1.registerAction('list-unchecked', list_unchecked_1.default);
// 筛选数据
core_1.registerAction('data-filter', filter_1.default);
core_1.registerAction('legend-item-highlight', list_highlight_1.default, {
    componentNames: ['legend']
});
core_1.registerInteraction('legend-active', {
    start: [{ trigger: 'legend-item:mouseenter', action: ['list-active:active', 'element-active:active'] }],
    end: [{ trigger: 'legend-item:mouseleave', action: ['list-active:reset', 'element-active:reset'] }],
});
// legend hover，element active
core_1.registerInteraction('legend-highlight', {
    start: [{ trigger: 'legend-item:mouseenter', action: ['legend-item-highlight:highlight', 'element-highlight:highlight'] }],
    end: [{ trigger: 'legend-item:mouseleave', action: ['legend-item-highlight:reset', 'element-highlight:reset'] }],
});
core_1.registerInteraction('legend-filter', {
    showEnable: [
        { trigger: 'legend-item:mouseenter', action: 'cursor:pointer' },
        { trigger: 'legend-item:mouseleave', action: 'cursor:default' },
    ],
    start: [
        { trigger: 'legend-item:click', action: 'list-unchecked:toggle' },
        { trigger: 'legend-item:click', action: 'data-filter:filter' },
    ],
});
//# sourceMappingURL=actions.js.map