"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = __importDefault(require("@antv/util/lib/is-array"));
var for_in_1 = __importDefault(require("@antv/util/lib/for-in"));
var cloneDeep = function (deepObject) {
    var map = [];
    var clone = function (obj) {
        map.push(obj);
        if (map.includes(obj)) {
            return obj;
        }
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }
        var rst;
        if (is_array_1.default(obj)) {
            rst = [];
            for (var i = 0, l = obj.length; i < l; i++) {
                if (typeof obj[i] === 'object' && obj[i] != null) {
                    rst[i] = clone(obj[i]);
                }
                else {
                    rst[i] = obj[i];
                }
            }
        }
        else {
            rst = {};
            for_in_1.default(obj, function (value, k) {
                if (typeof value === 'object' && value != null) {
                    rst[k] = clone(value);
                }
                else {
                    rst[k] = value;
                }
            });
        }
        return rst;
    };
    return clone(deepObject);
};
exports.default = cloneDeep;
//# sourceMappingURL=cloneDeep.js.map