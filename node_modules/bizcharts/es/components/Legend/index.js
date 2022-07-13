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
import { useEffect } from 'react';
import _Legend from '@antv/g2/lib/chart/controller/legend';
import _isFunction from '@antv/util/lib/is-function';
import { registerComponentController } from '../../core';
import useChartView from '../../hooks/useChartView';
import './actions';
registerComponentController('legend', _Legend);
var undefinedField = function (name) { return (name === undefined); };
// 单纯的赋值，重复执行不影响性能
export default function Legend(props) {
    var name = props.name, _a = props.visible, visible = _a === void 0 ? true : _a, onChange = props.onChange, filter = props.filter, options = __rest(props, ["name", "visible", "onChange", "filter"]);
    var view = useChartView();
    if (undefinedField(name)) {
        // 不指定字段，则表示对图例进行整体配置
        if (visible) {
            view.legend(options);
        }
        else {
            view.legend(false);
        }
    }
    else {
        if (visible) {
            view.legend(name, options);
        }
        else {
            view.legend(name, false);
        }
    }
    // 图例默认置灰
    if (_isFunction(filter) && name) {
        view.filter(name, filter);
    }
    // 事件didmount后绑定一次即可
    useEffect(function () {
        // 连续图例
        view.on('legend:valuechanged', function (ev) {
            if (_isFunction(props.onChange)) {
                props.onChange(ev, view);
            }
        });
        // 分类图例
        view.on('legend-item:click', function (ev) {
            if (_isFunction(props.onChange)) {
                var target = ev.target;
                var delegateObject = target.get('delegateObject');
                var item = delegateObject.item; // 图例选项
                ev.item = item; // 快捷获取
                props.onChange(ev, view);
            }
        });
    }, []);
    return null;
}
//# sourceMappingURL=index.js.map