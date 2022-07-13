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
import React, { useRef, useEffect, useState } from 'react';
export default function withContainer(Component, name) {
    if (name === void 0) { name = 'ChartContainer'; }
    var Cls = React.forwardRef(function (props, ref) {
        var container = useRef();
        var _a = useState(false), inited = _a[0], setInited = _a[1];
        var _b = props, _c = _b.className, className = _c === void 0 ? "bizcharts" : _c, containerStyle = _b.containerStyle, options = __rest(_b, ["className", "containerStyle"]);
        useEffect(function () {
            setInited(true);
        }, []);
        // @ts-ignore
        return React.createElement("div", { ref: container, className: className, 
            // @ts-ignore
            style: __assign({ position: 'relative', height: props.height || '100%', width: props.width || '100%' }, containerStyle) }, inited ? React.createElement(Component, __assign({ ref: ref, container: container.current }, options)) : React.createElement(React.Fragment, null));
    });
    Cls.displayName = name || Component.name;
    return Cls;
}
;
//# sourceMappingURL=withContainer.js.map