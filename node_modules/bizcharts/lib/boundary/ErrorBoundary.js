"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDefaultErrorFallback = exports.ErrorFallback = void 0;
var react_1 = __importDefault(require("react"));
var react_error_boundary_1 = require("react-error-boundary");
var DefaultErrorFallback = function (_a) {
    var error = _a.error;
    return (react_1.default.createElement("div", { className: "bizcharts-error", role: "alert" },
        react_1.default.createElement("p", null, "BizCharts something went wrong:"),
        react_1.default.createElement("pre", null, error.message)));
};
function ErrorFallback(args) {
    return DefaultErrorFallback(args);
}
exports.ErrorFallback = ErrorFallback;
exports.setDefaultErrorFallback = function (CustComponents) {
    DefaultErrorFallback = CustComponents;
};
exports.default = react_error_boundary_1.ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map