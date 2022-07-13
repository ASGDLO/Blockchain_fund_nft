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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withChartInstance = void 0;
var react_1 = __importDefault(require("react"));
// 最顶层chart实例 theme, 局部配置
var RootChartContext = react_1.default.createContext(null);
RootChartContext.displayName = 'RootChartContext';
function withChartInstance(Component) {
    var Com = react_1.default.forwardRef(function (props, ref) {
        return (react_1.default.createElement(RootChartContext.Consumer, null, function (ctx) { return react_1.default.createElement(Component, __assign({ ref: ref }, ctx, props)); }));
    });
    Com.displayName = Component.name;
    return Com;
}
exports.withChartInstance = withChartInstance;
;
exports.default = RootChartContext;
//# sourceMappingURL=root.js.map