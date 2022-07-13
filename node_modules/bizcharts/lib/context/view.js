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
exports.withView = void 0;
var react_1 = __importDefault(require("react"));
// 父级图层实例，chart 或者 view
var ChartViewContext = react_1.default.createContext(null);
ChartViewContext.displayName = 'ChartViewContext';
var Consumer = ChartViewContext.Consumer;
function withView(Component) {
    return function (props) {
        return react_1.default.createElement(Consumer, null, function (ctx) { return react_1.default.createElement(Component, __assign({ chartView: ctx }, props)); });
    };
}
exports.withView = withView;
exports.default = ChartViewContext;
//# sourceMappingURL=view.js.map