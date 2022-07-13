// from g2-dataSte
import isArray from '@antv/util/lib/is-array';
import isFunction from '@antv/util/lib/is-function';
import isString from '@antv/util/lib/is-string';
import groupBy from '@antv/util/lib/group-by';
import simpleSortBy from './simple-sort-by';
/** 数据分片
 * @param {any[]} rows
 * @param {(string | string[] | ((item: any) => string))} group_by
 * @param {(string | string[] | ((item: any) => number))} [order_by=[]]
 * @returns {Record<string, any[]>}
 */
function partition(rows, group_by, order_by) {
    if (order_by === void 0) { order_by = []; }
    var newRows = rows;
    if (order_by && order_by.length) {
        newRows = simpleSortBy(rows, order_by);
    }
    var groupingFn;
    if (isFunction(group_by)) {
        groupingFn = group_by;
    }
    else if (isArray(group_by)) {
        groupingFn = function (row) { return "_" + group_by.map(function (col) { return row[col]; }).join('-'); };
        // NOTE: Object.keys({'b': 'b', '2': '2', '1': '1', 'a': 'a'}) => [ '1', '2', 'b', 'a' ]
        // that is why we have to add a prefix
    }
    else if (isString(group_by)) {
        groupingFn = function (row) { return "_" + row[group_by]; };
    }
    var groups = groupBy(newRows, groupingFn);
    return groups;
}
;
export default partition;
//# sourceMappingURL=partition.js.map