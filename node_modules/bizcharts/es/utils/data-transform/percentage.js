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
// 只列举常用的函数，复杂的推荐使用第三方类库。
import _forIn from '@antv/util/lib/for-in';
import sum from './sum';
import warn from 'warning';
import partition from './partition';
/**
 * 百分比计算, 不支持重复数据统计
 * @param data object[] 数据源
 * @param field string 被统计的值
 * @param as string 生成的百分比字段名
 * @param groupBy : string | string[] 将数据分组后再计算百分比
 */
export default (function (data, field, as, groupBy) {
    var result = [];
    var groups = groupBy ? partition(data, groupBy) : { _data: data };
    _forIn(groups, function (group) {
        var totalSum = sum(group.map(function (row) { return row[field]; }));
        warn(totalSum !== 0, "Invalid data: total sum of field " + field + " is 0!");
        _forIn(group, function (item) {
            var resultRow = __assign({}, item);
            if (totalSum === 0) {
                resultRow[as] = 0;
            }
            else {
                resultRow[as] = item[field] / totalSum;
            }
            result.push(resultRow);
        });
    });
    return result;
});
//# sourceMappingURL=percentage.js.map