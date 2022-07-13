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
import React, { useCallback, useEffect, useRef } from 'react';
import _isFunction from '@antv/util/lib/is-function';
import _Tooltip from '@antv/g2/lib/chart/controller/tooltip';
import _uniqueId from '@antv/util/lib/unique-id';
import _isArray from '@antv/util/lib/is-array';
import _isString from '@antv/util/lib/is-string';
import { registerComponentController } from '../../core';
import useChartView from '../../hooks/useChartView';
import ReactTooltip from './ReactTooltip';
import { registerConnector } from '../../connector/createTooltipConnector';
import './actions';
registerComponentController('tooltip', _Tooltip);
var isReactTooltip = function (props) {
    var _a = props.visible, visible = _a === void 0 ? true : _a, children = props.children;
    return visible && _isFunction(children);
};
var TooltipNormal = function (props) {
    var _a = props.visible, visible = _a === void 0 ? true : _a, children = props.children, options = __rest(props, ["visible", "children"]);
    var chartView = useChartView();
    chartView.getController('tooltip').clear();
    if (visible === true) {
        chartView.tooltip(__assign({ customContent: null, showMarkers: false }, options));
    }
    else {
        chartView.tooltip(false);
    }
    return null;
};
export default function Tooltip(props) {
    var children = props.children, triggerOn = props.triggerOn, onShow = props.onShow, onChange = props.onChange, onHide = props.onHide, lock = props.lock, linkage = props.linkage, options = __rest(props, ["children", "triggerOn", "onShow", "onChange", "onHide", "lock", "linkage"]);
    var chartView = useChartView();
    chartView.removeInteraction('tooltip');
    chartView.removeInteraction('tooltip-click');
    chartView.removeInteraction('tooltip-lock');
    if (triggerOn === 'click') {
        // 只有click的时候才会出现tooltip，hover 无效
        chartView.interaction("tooltip-click");
    }
    else if (lock) {
        // hover的时候触发，但是点击的时候锁定位置
        chartView.interaction("tooltip-lock");
    }
    else {
        // click不会有任何动作，只有hover的时候跟随
        chartView.interaction("tooltip");
    }
    var connectorId = useRef(_uniqueId('tooltip'));
    // tooltip 联动
    useEffect(function () {
        if (_isArray(linkage)) {
            registerConnector(linkage[0], connectorId.current, chartView, options.shared, linkage[1]);
        }
        else if (_isString(linkage)) {
            registerConnector(linkage, connectorId.current, chartView, options.shared);
        }
    }, [linkage, chartView]);
    var showFnc = useCallback(function (ITooltipEvent) {
        if (_isFunction(onShow)) {
            onShow(ITooltipEvent, chartView);
        }
    }, []);
    var changeFnc = useCallback(function (ITooltipEvent) {
        if (_isFunction(onChange)) {
            onChange(ITooltipEvent, chartView);
        }
    }, []);
    var hideFnc = useCallback(function (ITooltipEvent) {
        if (_isFunction(onHide)) {
            onHide(ITooltipEvent, chartView);
        }
    }, []);
    chartView.off('tooltip:show', showFnc);
    chartView.on('tooltip:show', showFnc);
    chartView.off('tooltip:change', changeFnc);
    chartView.on('tooltip:change', changeFnc);
    chartView.off('tooltip:hide', hideFnc);
    chartView.on('tooltip:hide', hideFnc);
    return isReactTooltip(props) ? React.createElement(ReactTooltip, __assign({}, options), children) : React.createElement(TooltipNormal, __assign({}, props));
}
Tooltip.defaultProps = {
    showMarkers: false,
    triggerOn: 'hover',
};
//# sourceMappingURL=index.js.map