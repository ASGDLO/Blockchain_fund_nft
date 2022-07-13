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
import React from 'react';
import _isString from '@antv/util/lib/is-string';
import _isBoolean from '@antv/util/lib/is-boolean';
import _isObject from '@antv/util/lib/is-object';
// plot visible 写法的快速转换
export var visibleHelper = function (cfg, defaultVisible) {
    if (defaultVisible === void 0) { defaultVisible = true; }
    if (_isString(cfg) || React.isValidElement(cfg)) {
        return {
            visible: true,
            text: cfg,
        };
    }
    if (_isBoolean(cfg)) {
        return {
            visible: cfg,
        };
    }
    if (_isObject(cfg)) {
        return __assign({ visible: true }, cfg);
    }
    return {
        visible: defaultVisible,
    };
};
export var visibleHelperInvert = function (cfg) {
    // @ts-ignore
    if (_isObject(cfg) && cfg.visible !== false) {
        // @ts-ignore
        return cfg.text;
    }
    return cfg;
};
//# sourceMappingURL=plotTools.js.map