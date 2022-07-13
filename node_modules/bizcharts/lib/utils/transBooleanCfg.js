"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clone_1 = __importDefault(require("@antv/util/lib/clone"));
// g2 的配置项为 xxCfg | null
exports.default = (function (cfg, keys) {
    var opt = clone_1.default(cfg);
    keys.forEach(function (key) {
        if (opt[key] === true) {
            opt[key] = {};
        }
        else if (opt[key] === false) {
            opt[key] = null;
        }
    });
    return opt;
});
//# sourceMappingURL=transBooleanCfg.js.map