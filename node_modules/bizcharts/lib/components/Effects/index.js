"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var is_function_1 = __importDefault(require("@antv/util/lib/is-function"));
var useChartInstance_1 = __importDefault(require("../../hooks/useChartInstance"));
var warning_1 = __importDefault(require("warning"));
function Effects(props) {
    var chart = useChartInstance_1.default();
    if (is_function_1.default(props.children)) {
        var res = props.children(chart);
        return react_1.default.isValidElement(res) ? res : null;
    }
    warning_1.default(false, 'Effects 的子组件应当是一个函数 (chart) => {}');
    return null;
}
exports.default = Effects;
//# sourceMappingURL=index.js.map