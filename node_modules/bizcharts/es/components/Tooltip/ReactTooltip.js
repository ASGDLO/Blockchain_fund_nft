var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import React from 'react';
import ReactDom from 'react-dom';
import _get from '@antv/util/lib/get';
import _modifyCss from '@antv/dom-util/lib/modify-css';
import { withView } from '../../context/view';
import { getTheme } from '../../core';
var CONTAINER_CLASS = 'g2-tooltip';
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderInnder = function (e) {
            var _a = e.data, title = _a.title, items = _a.items, x = _a.x, y = _a.y;
            // 当数据变化的时候渲染, todo: 新建fiber根节点，和react虚拟dom的性能对比报告
            ReactDom.render(_this.props.children(title, items, x, y, e), _this.getElement());
        };
        return _this;
    }
    Tooltip.prototype.componentWillUnmount = function () {
        var chartView = this.props.chartView;
        if (this.element) {
            this.element.remove();
        }
        chartView.getController('tooltip').clear();
        chartView.off('tooltip:change', this.renderInnder);
    };
    Tooltip.prototype.getElement = function () {
        if (!this.element) {
            this.element = document.createElement('div');
            this.element.classList.add('bizcharts-tooltip');
            this.element.classList.add('g2-tooltip');
            this.element.style.width = 'auto';
            this.element.style.height = 'auto';
        }
        return this.element;
    };
    Tooltip.prototype.overwriteCfg = function () {
        var _this = this;
        var _a = this.props, chartView = _a.chartView, children = _a.children, _b = _a.domStyles, domStyles = _b === void 0 ? {} : _b, config = __rest(_a, ["chartView", "children", "domStyles"]);
        chartView.tooltip(__assign(__assign({ inPlot: false, domStyles: domStyles }, config), { 
            // 坐标移动即渲染
            customContent: function () { return _this.getElement(); } }));
        chartView.on('tooltip:change', this.renderInnder);
        // fixme: 主题要去图表主题，要meger domStyle。
        var domStylesTheme = _get(getTheme(), ['components', 'tooltip', 'domStyles', CONTAINER_CLASS], {});
        _modifyCss(this.element, __assign(__assign({}, domStylesTheme), domStyles[CONTAINER_CLASS]));
    };
    Tooltip.prototype.render = function () {
        this.overwriteCfg();
        return null; // 无子组件
    };
    return Tooltip;
}(React.Component));
export default withView(Tooltip);
//# sourceMappingURL=ReactTooltip.js.map