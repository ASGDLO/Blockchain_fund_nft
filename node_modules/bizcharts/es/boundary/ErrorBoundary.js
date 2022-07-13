import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
var DefaultErrorFallback = function (_a) {
    var error = _a.error;
    return (React.createElement("div", { className: "bizcharts-error", role: "alert" },
        React.createElement("p", null, "BizCharts something went wrong:"),
        React.createElement("pre", null, error.message)));
};
export function ErrorFallback(args) {
    return DefaultErrorFallback(args);
}
export var setDefaultErrorFallback = function (CustComponents) {
    DefaultErrorFallback = CustComponents;
};
export default ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map