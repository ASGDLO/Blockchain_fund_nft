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
import _isFunction from '@antv/util/lib/is-function';
import Circle from '@antv/g2/lib/facet/circle';
import List from '@antv/g2/lib/facet/list';
import Matrix from '@antv/g2/lib/facet/matrix';
import Mirror from '@antv/g2/lib/facet/mirror';
import Rect from '@antv/g2/lib/facet/rect';
import Tree from '@antv/g2/lib/facet/tree';
import useChartView from '../../hooks/useChartView';
import useChartInstance from '../../hooks/useChartInstance';
import { registerFacet } from '../../core';
registerFacet('rect', Rect);
registerFacet('mirror', Mirror);
registerFacet('list', List);
registerFacet('matrix', Matrix);
registerFacet('circle', Circle);
registerFacet('tree', Tree);
function Facet(props) {
    var chart = useChartView();
    var chartInstance = useChartInstance();
    var type = props.type, children = props.children, cfg = __rest(props, ["type", "children"]);
    // @ts-ignore
    if (chart.facetInstance) {
        // 分面如果已存在不能重复执行，销毁重新配置
        // @ts-ignore
        chart.facetInstance.destroy();
        // @ts-ignore
        chart.facetInstance = null;
        // todo: 是否有必要区分数据更新和配置项更新，当前处理为全部都重绘
        chartInstance.forceReRender = true; // 重新渲染，不能更新
    }
    if (_isFunction(children)) {
        chart.facet(type, __assign(__assign({}, cfg), { 
            // @ts-ignore
            eachView: children }));
    }
    else {
        chart.facet(type, __assign({}, cfg));
    }
    return null;
}
export default Facet;
//# sourceMappingURL=index.js.map