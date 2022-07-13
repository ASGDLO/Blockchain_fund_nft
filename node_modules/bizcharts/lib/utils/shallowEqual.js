"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var each_1 = __importDefault(require("@antv/util/lib/each"));
var is_array_1 = __importDefault(require("@antv/util/lib/is-array"));
var is_object_1 = __importDefault(require("@antv/util/lib/is-object"));
function is(x, y) {
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    }
    return x !== x && y !== y; //  NaN == NaN
}
function length(obj) {
    if (is_array_1.default(obj)) {
        return obj.length;
    }
    if (is_object_1.default(obj)) {
        return Object.keys(obj).length;
    }
    return 0;
}
function default_1(objA, objB) {
    if (is(objA, objB)) {
        return true;
    }
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
    }
    if (is_array_1.default(objA) !== is_array_1.default(objB)) {
        return false;
    }
    if (length(objA) !== length(objB)) {
        return false;
    }
    var ret = true;
    each_1.default(objA, function (v, k) {
        if (!is(v, objB[k])) {
            ret = false;
            return ret;
        }
        return true;
    });
    return ret;
}
exports.default = default_1;
//# sourceMappingURL=shallowEqual.js.map