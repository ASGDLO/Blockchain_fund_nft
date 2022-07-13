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
exports.withCanvasContext = void 0;
var react_1 = __importDefault(require("react"));
// canvas 实例透传
var CanvasContext = react_1.default.createContext(null);
CanvasContext.displayName = 'CanvasContext';
function withCanvasContext(Component) {
    var Com = react_1.default.forwardRef(function (props, ref) {
        return (react_1.default.createElement(CanvasContext.Consumer, null, function (ctx) { return react_1.default.createElement(Component, __assign({ ref: ref, ctx: ctx }, props)); }));
    });
    Com.displayName = Component.name;
    return Com;
}
exports.withCanvasContext = withCanvasContext;
;
exports.default = CanvasContext;
//# sourceMappingURL=canvas.js.map