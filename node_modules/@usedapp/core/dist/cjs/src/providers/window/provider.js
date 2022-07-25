"use strict";
exports.__esModule = true;
exports.WindowProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var context_1 = require("./context");
/**
 * @internal Intended for internal use - use it on your own risk
 */
function WindowProvider(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(true), isActiveWindow = _b[0], setActiveWindow = _b[1];
    (0, react_1.useEffect)(function () {
        var visibilityChangeListener = function () {
            switch (document.visibilityState) {
                case 'hidden':
                    setActiveWindow(false);
                    break;
                case 'visible':
                    setActiveWindow(true);
                    break;
            }
        };
        document.addEventListener('visibilitychange', visibilityChangeListener);
        return function () { return document.removeEventListener('visibilitychange', visibilityChangeListener); };
    }, []);
    return (0, jsx_runtime_1.jsx)(context_1.WindowContext.Provider, { value: { isActive: isActiveWindow }, children: children });
}
exports.WindowProvider = WindowProvider;
//# sourceMappingURL=provider.js.map