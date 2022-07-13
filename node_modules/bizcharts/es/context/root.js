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
// 最顶层chart实例 theme, 局部配置
var RootChartContext = React.createContext(null);
RootChartContext.displayName = 'RootChartContext';
export function withChartInstance(Component) {
    var Com = React.forwardRef(function (props, ref) {
        return (React.createElement(RootChartContext.Consumer, null, function (ctx) { return React.createElement(Component, __assign({ ref: ref }, ctx, props)); }));
    });
    Com.displayName = Component.name;
    return Com;
}
;
export default RootChartContext;
//# sourceMappingURL=root.js.map