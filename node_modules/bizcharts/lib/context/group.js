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
exports.withGroupContext = void 0;
var react_1 = __importDefault(require("react"));
// Group 实例透传
var GroupContext = react_1.default.createContext(null);
GroupContext.displayName = 'GroupContext';
function withGroupContext(Component) {
    var Com = react_1.default.forwardRef(function (props, ref) {
        return (react_1.default.createElement(GroupContext.Consumer, null, function (ctx) { return react_1.default.createElement(Component, __assign({ ref: ref, group: ctx }, props)); }));
    });
    Com.displayName = Component.name;
    return Com;
}
exports.withGroupContext = withGroupContext;
;
exports.default = GroupContext;
//# sourceMappingURL=group.js.map