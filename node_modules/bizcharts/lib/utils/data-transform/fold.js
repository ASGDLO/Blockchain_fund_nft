"use strict";
// 只列举常用的函数，复杂的推荐使用第三方类库。
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 折叠数据
 * @param data 数据源
 * @param fields 被折叠的字段数组
 * @param foldCate 折叠的分类字段名
 * @param foldValue 折叠后的值字段名
 */
exports.default = (function (data, fields, foldCate, foldValue) {
    var resultRows = [];
    data.forEach(function (row) {
        fields.forEach(function (field) {
            var _a;
            resultRows.push(__assign(__assign({}, row), (_a = {}, _a[foldCate] = field, _a[foldValue] = row[field], _a)));
        });
    });
    return resultRows;
});
//# sourceMappingURL=fold.js.map