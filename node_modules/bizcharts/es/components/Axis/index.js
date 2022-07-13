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
import _Axis from '@antv/g2/lib/chart/controller/axis';
import useChartView from '../../hooks/useChartView';
import _transBooleanCfg from '../../utils/transBooleanCfg';
import { registerComponentController } from '../../core';
registerComponentController('axis', _Axis);
var undefinedField = function (name) { return (name === undefined); };
var mixinAxisCfg = function (options) {
    // 兼容boolean类型的配置 例： <Axis title /> 
    return _transBooleanCfg(options, ['title', 'line', 'tickLine', 'subTickLine', 'label', 'grid']);
};
export default function Axis(props) {
    var name = props.name, _a = props.visible, visible = _a === void 0 ? true : _a, options = __rest(props, ["name", "visible"]);
    var view = useChartView();
    var newConfig = mixinAxisCfg(options);
    // warning(newConfig.grid !== null, 'fix g2 bug: Axis null 请先在Chart上配置forceUpdate 强制刷新以等待g2 修复。');
    if (visible) {
        if (undefinedField(name)) {
            // 不指定字段名称，仅visible生效
            view.axis(true);
        }
        else {
            view.axis(name, newConfig);
        }
    }
    else {
        if (undefinedField(name)) {
            view.axis(false);
        }
        else {
            view.axis(name, false);
        }
    }
    return null;
}
//# sourceMappingURL=index.js.map