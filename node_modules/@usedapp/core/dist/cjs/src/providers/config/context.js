"use strict";
exports.__esModule = true;
exports.ConfigContext = void 0;
var react_1 = require("react");
var default_1 = require("../../model/config/default");
/**
 * @internal Intended for internal use - use it on your own risk
 */
exports.ConfigContext = (0, react_1.createContext)({
    config: default_1.DEFAULT_CONFIG,
    updateConfig: function () { return undefined; }
});
//# sourceMappingURL=context.js.map