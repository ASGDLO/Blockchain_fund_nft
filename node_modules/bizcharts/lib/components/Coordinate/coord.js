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
var react_1 = __importDefault(require("react"));
var warning_1 = __importDefault(require("warning"));
var index_1 = __importDefault(require("./index"));
function Coord(props) {
    warning_1.default(false, 'Coord (协调) 组件将重命名为更加语义化的组件名 Coordinate（坐标）,请使用Coordinate替代，我们将在5.0后删除Coord组件');
    return react_1.default.createElement(index_1.default, __assign({}, props));
}
exports.default = Coord;
//# sourceMappingURL=coord.js.map