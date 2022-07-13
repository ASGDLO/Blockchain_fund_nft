"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var each_1 = __importDefault(require("@antv/util/lib/each"));
var is_string_1 = __importDefault(require("@antv/util/lib/is-string"));
// 支持正则匹配
var pickWithout = function (obj, keys) {
    var ret = {};
    each_1.default(obj, function (v, k) {
        var match = false;
        keys.forEach(function (itKey) {
            if (is_string_1.default(itKey) && itKey === k) {
                match = true;
            }
            else if (itKey instanceof RegExp && k.match(itKey)) {
                match = true;
            }
        });
        if (!match) {
            ret[k] = v;
        }
    });
    return ret;
};
exports.default = pickWithout;
//# sourceMappingURL=pickWithout.js.map