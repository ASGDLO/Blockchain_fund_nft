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
// canvas 实例透传
var CanvasContext = React.createContext(null);
CanvasContext.displayName = 'CanvasContext';
export function withCanvasContext(Component) {
    var Com = React.forwardRef(function (props, ref) {
        return (React.createElement(CanvasContext.Consumer, null, function (ctx) { return React.createElement(Component, __assign({ ref: ref, ctx: ctx }, props)); }));
    });
    Com.displayName = Component.name;
    return Com;
}
;
export default CanvasContext;
//# sourceMappingURL=canvas.js.map