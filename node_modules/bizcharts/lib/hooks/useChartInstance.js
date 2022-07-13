"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChartTheme = void 0;
var react_1 = __importDefault(require("react"));
var root_1 = __importDefault(require("../context/root"));
function useChartInstance() {
    return react_1.default.useContext(root_1.default).chart;
}
exports.default = useChartInstance;
function useChartTheme() {
    // todo: 局部配置的theme 合并 chart自己的theme
    return react_1.default.useContext(root_1.default).theme;
}
exports.useChartTheme = useChartTheme;
//# sourceMappingURL=useChartInstance.js.map