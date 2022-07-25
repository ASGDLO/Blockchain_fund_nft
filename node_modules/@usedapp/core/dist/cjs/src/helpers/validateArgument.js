"use strict";
exports.__esModule = true;
exports.validateArguments = void 0;
function validateArguments(args, assertions) {
    for (var _i = 0, _a = Object.getOwnPropertyNames(args); _i < _a.length; _i++) {
        var key = _a[_i];
        if (typeof args[key] !== assertions[key]) {
            throw new Error("Expected \"".concat(key, "\" to be of type \"").concat(assertions[key], "\", got \"").concat(args[key], "\" instead."));
        }
    }
}
exports.validateArguments = validateArguments;
//# sourceMappingURL=validateArgument.js.map