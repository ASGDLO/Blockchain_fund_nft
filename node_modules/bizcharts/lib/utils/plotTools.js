"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.visibleHelperInvert = exports.visibleHelper = void 0;
var react_1 = __importDefault(require("react"));
var is_string_1 = __importDefault(require("@antv/util/lib/is-string"));
var is_boolean_1 = __importDefault(require("@antv/util/lib/is-boolean"));
var is_object_1 = __importDefault(require("@antv/util/lib/is-object"));
// plot visible 写法的快速转换
exports.visibleHelper = function (cfg, defaultVisible) {
    if (defaultVisible === void 0) { defaultVisible = true; }
    if (is_string_1.default(cfg) || react_1.default.isValidElement(cfg)) {
        return {
            visible: true,
            text: cfg,
        };
    }
    if (is_boolean_1.default(cfg)) {
        return {
            visible: cfg,
        };
    }
    if (is_object_1.default(cfg)) {
        return __assign({ visible: true }, cfg);
    }
    return {
        visible: defaultVisible,
    };
};
exports.visibleHelperInvert = function (cfg) {
    // @ts-ignore
    if (is_object_1.default(cfg) && cfg.visible !== false) {
        // @ts-ignore
        return cfg.text;
    }
    return cfg;
};
//# sourceMappingURL=plotTools.js.map