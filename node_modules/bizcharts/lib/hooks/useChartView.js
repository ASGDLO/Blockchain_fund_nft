"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var view_1 = __importDefault(require("../context/view"));
function useView() {
    // @ts-ignore
    return react_1.default.useContext(view_1.default);
}
exports.default = useView;
//# sourceMappingURL=useChartView.js.map