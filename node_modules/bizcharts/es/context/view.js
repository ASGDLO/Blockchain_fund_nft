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
import React from 'react';
// 父级图层实例，chart 或者 view
var ChartViewContext = React.createContext(null);
ChartViewContext.displayName = 'ChartViewContext';
var Consumer = ChartViewContext.Consumer;
export function withView(Component) {
    return function (props) {
        return React.createElement(Consumer, null, function (ctx) { return React.createElement(Component, __assign({ chartView: ctx }, props)); });
    };
}
export default ChartViewContext;
//# sourceMappingURL=view.js.map