"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// from g2-dataSte
var is_array_1 = __importDefault(require("@antv/util/lib/is-array"));
var is_function_1 = __importDefault(require("@antv/util/lib/is-function"));
var is_string_1 = __importDefault(require("@antv/util/lib/is-string"));
function sortBy(arr, keys) {
    if (keys === void 0) { keys = []; }
    var comparer;
    if (is_function_1.default(keys)) {
        comparer = keys;
    }
    else if (is_array_1.default(keys)) {
        comparer = function (a, b) {
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (a[key] < b[key]) {
                    return -1;
                }
                if (a[key] > b[key]) {
                    return 1;
                }
            }
            return 0;
        };
    }
    else if (is_string_1.default(keys)) {
        comparer = function (a, b) {
            if (a[keys] < b[keys]) {
                return -1;
            }
            if (a[keys] > b[keys]) {
                return 1;
            }
            return 0;
        };
    }
    return arr.sort(comparer);
}
exports.default = sortBy;
//# sourceMappingURL=simple-sort-by.js.map