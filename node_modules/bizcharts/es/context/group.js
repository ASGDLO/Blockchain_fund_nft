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
// Group 实例透传
var GroupContext = React.createContext(null);
GroupContext.displayName = 'GroupContext';
export function withGroupContext(Component) {
    var Com = React.forwardRef(function (props, ref) {
        return (React.createElement(GroupContext.Consumer, null, function (ctx) { return React.createElement(Component, __assign({ ref: ref, group: ctx }, props)); }));
    });
    Com.displayName = Component.name;
    return Com;
}
;
export default GroupContext;
//# sourceMappingURL=group.js.map