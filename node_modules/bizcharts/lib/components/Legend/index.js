"use strict";
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
var react_1 = require("react");
var legend_1 = __importDefault(require("@antv/g2/lib/chart/controller/legend"));
var is_function_1 = __importDefault(require("@antv/util/lib/is-function"));
var core_1 = require("../../core");
var useChartView_1 = __importDefault(require("../../hooks/useChartView"));
require("./actions");
core_1.registerComponentController('legend', legend_1.default);
var undefinedField = function (name) { return (name === undefined); };
// 单纯的赋值，重复执行不影响性能
function Legend(props) {
    var name = props.name, _a = props.visible, visible = _a === void 0 ? true : _a, onChange = props.onChange, filter = props.filter, options = __rest(props, ["name", "visible", "onChange", "filter"]);
    var view = useChartView_1.default();
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
    if (is_function_1.default(filter) && name) {
        view.filter(name, filter);
    }
    // 事件didmount后绑定一次即可
    react_1.useEffect(function () {
        // 连续图例
        view.on('legend:valuechanged', function (ev) {
            if (is_function_1.default(props.onChange)) {
                props.onChange(ev, view);
            }
        });
        // 分类图例
        view.on('legend-item:click', function (ev) {
            if (is_function_1.default(props.onChange)) {
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
exports.default = Legend;
//# sourceMappingURL=index.js.map