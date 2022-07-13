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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
function withContainer(Component, name) {
    if (name === void 0) { name = 'ChartContainer'; }
    var Cls = react_1.default.forwardRef(function (props, ref) {
        var container = react_1.useRef();
        var _a = react_1.useState(false), inited = _a[0], setInited = _a[1];
        var _b = props, _c = _b.className, className = _c === void 0 ? "bizcharts" : _c, containerStyle = _b.containerStyle, options = __rest(_b, ["className", "containerStyle"]);
        react_1.useEffect(function () {
            setInited(true);
        }, []);
        // @ts-ignore
        return react_1.default.createElement("div", { ref: container, className: className, 
            // @ts-ignore
            style: __assign({ position: 'relative', height: props.height || '100%', width: props.width || '100%' }, containerStyle) }, inited ? react_1.default.createElement(Component, __assign({ ref: ref, container: container.current }, options)) : react_1.default.createElement(react_1.default.Fragment, null));
    });
    Cls.displayName = name || Component.name;
    return Cls;
}
exports.default = withContainer;
;
//# sourceMappingURL=withContainer.js.map