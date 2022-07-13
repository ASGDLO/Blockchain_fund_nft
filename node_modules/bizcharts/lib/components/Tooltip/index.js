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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var is_function_1 = __importDefault(require("@antv/util/lib/is-function"));
var tooltip_1 = __importDefault(require("@antv/g2/lib/chart/controller/tooltip"));
var unique_id_1 = __importDefault(require("@antv/util/lib/unique-id"));
var is_array_1 = __importDefault(require("@antv/util/lib/is-array"));
var is_string_1 = __importDefault(require("@antv/util/lib/is-string"));
var core_1 = require("../../core");
var useChartView_1 = __importDefault(require("../../hooks/useChartView"));
var ReactTooltip_1 = __importDefault(require("./ReactTooltip"));
var createTooltipConnector_1 = require("../../connector/createTooltipConnector");
require("./actions");
core_1.registerComponentController('tooltip', tooltip_1.default);
var isReactTooltip = function (props) {
    var _a = props.visible, visible = _a === void 0 ? true : _a, children = props.children;
    return visible && is_function_1.default(children);
};
var TooltipNormal = function (props) {
    var _a = props.visible, visible = _a === void 0 ? true : _a, children = props.children, options = __rest(props, ["visible", "children"]);
    var chartView = useChartView_1.default();
    chartView.getController('tooltip').clear();
    if (visible === true) {
        chartView.tooltip(__assign({ customContent: null, showMarkers: false }, options));
    }
    else {
        chartView.tooltip(false);
    }
    return null;
};
function Tooltip(props) {
    var children = props.children, triggerOn = props.triggerOn, onShow = props.onShow, onChange = props.onChange, onHide = props.onHide, lock = props.lock, linkage = props.linkage, options = __rest(props, ["children", "triggerOn", "onShow", "onChange", "onHide", "lock", "linkage"]);
    var chartView = useChartView_1.default();
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
    var connectorId = react_1.useRef(unique_id_1.default('tooltip'));
    // tooltip 联动
    react_1.useEffect(function () {
        if (is_array_1.default(linkage)) {
            createTooltipConnector_1.registerConnector(linkage[0], connectorId.current, chartView, options.shared, linkage[1]);
        }
        else if (is_string_1.default(linkage)) {
            createTooltipConnector_1.registerConnector(linkage, connectorId.current, chartView, options.shared);
        }
    }, [linkage, chartView]);
    var showFnc = react_1.useCallback(function (ITooltipEvent) {
        if (is_function_1.default(onShow)) {
            onShow(ITooltipEvent, chartView);
        }
    }, []);
    var changeFnc = react_1.useCallback(function (ITooltipEvent) {
        if (is_function_1.default(onChange)) {
            onChange(ITooltipEvent, chartView);
        }
    }, []);
    var hideFnc = react_1.useCallback(function (ITooltipEvent) {
        if (is_function_1.default(onHide)) {
            onHide(ITooltipEvent, chartView);
        }
    }, []);
    chartView.off('tooltip:show', showFnc);
    chartView.on('tooltip:show', showFnc);
    chartView.off('tooltip:change', changeFnc);
    chartView.on('tooltip:change', changeFnc);
    chartView.off('tooltip:hide', hideFnc);
    chartView.on('tooltip:hide', hideFnc);
    return isReactTooltip(props) ? react_1.default.createElement(ReactTooltip_1.default, __assign({}, options), children) : react_1.default.createElement(TooltipNormal, __assign({}, props));
}
exports.default = Tooltip;
Tooltip.defaultProps = {
    showMarkers: false,
    triggerOn: 'hover',
};
//# sourceMappingURL=index.js.map