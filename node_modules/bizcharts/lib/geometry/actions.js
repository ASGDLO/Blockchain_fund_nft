"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: 按照element 详细分类
var active_1 = __importDefault(require("@antv/g2/lib/interaction/action/element/active"));
var link_by_color_1 = __importDefault(require("@antv/g2/lib/interaction/action/element/link-by-color"));
var range_active_1 = __importDefault(require("@antv/g2/lib/interaction/action/element/range-active"));
var single_active_1 = __importDefault(require("@antv/g2/lib/interaction/action/element/single-active"));
var highlight_1 = __importDefault(require("@antv/g2/lib/interaction/action/element/highlight"));
var highlight_by_x_1 = __importDefault(require("@antv/g2/lib/interaction/action/element/highlight-by-x"));
var highlight_by_color_1 = __importDefault(require("@antv/g2/lib/interaction/action/element/highlight-by-color"));
var single_highlight_1 = __importDefault(require("@antv/g2/lib/interaction/action/element/single-highlight"));
var range_highlight_1 = __importDefault(require("@antv/g2/lib/interaction/action/element/range-highlight"));
var selected_1 = __importDefault(require("@antv/g2/lib/interaction/action/element/selected"));
var single_selected_1 = __importDefault(require("@antv/g2/lib/interaction/action/element/single-selected"));
var range_selected_1 = __importDefault(require("@antv/g2/lib/interaction/action/element/range-selected"));
var cursor_1 = __importDefault(require("@antv/g2/lib/interaction/action/cursor"));
var core_1 = require("../core");
core_1.registerAction('cursor', cursor_1.default);
core_1.registerAction('element-active', active_1.default);
core_1.registerAction('element-single-active', single_active_1.default);
core_1.registerAction('element-range-active', range_active_1.default);
core_1.registerAction('element-highlight', highlight_1.default);
core_1.registerAction('element-highlight-by-x', highlight_by_x_1.default);
core_1.registerAction('element-highlight-by-color', highlight_by_color_1.default);
core_1.registerAction('element-single-highlight', single_highlight_1.default);
core_1.registerAction('element-range-highlight', range_highlight_1.default);
core_1.registerAction('element-sibling-highlight', range_highlight_1.default, {
    effectSiblings: true,
    effectByRecord: true
});
core_1.registerAction('element-selected', selected_1.default);
core_1.registerAction('element-single-selected', single_selected_1.default);
core_1.registerAction('element-range-selected', range_selected_1.default);
core_1.registerAction('element-link-by-color', link_by_color_1.default);
// 移动到 elment 上 active
core_1.registerInteraction('element-active', {
    start: [{ trigger: 'element:mouseenter', action: 'element-active:active' }],
    end: [{ trigger: 'element:mouseleave', action: 'element-active:reset' }],
});
// 点击选中，允许取消
core_1.registerInteraction('element-selected', {
    start: [{ trigger: 'element:click', action: 'element-selected:toggle' }],
});
// hover highlight，允许取消
core_1.registerInteraction('element-highlight', {
    start: [{ trigger: 'element:mouseenter', action: 'element-highlight:highlight' }],
    end: [{ trigger: 'element:mouseleave', action: 'element-highlight:reset' }],
});
// hover highlight by x，允许取消
core_1.registerInteraction('element-highlight-by-x', {
    start: [{ trigger: 'element:mouseenter', action: 'element-highlight-by-x:highlight' }],
    end: [{ trigger: 'element:mouseleave', action: 'element-highlight-by-x:reset' }],
});
// hover highlight by y，允许取消
core_1.registerInteraction('element-highlight-by-color', {
    start: [{ trigger: 'element:mouseenter', action: 'element-highlight-by-color:highlight' }],
    end: [{ trigger: 'element:mouseleave', action: 'element-highlight-by-color:reset' }],
});
//# sourceMappingURL=actions.js.map