"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// from g2-dataSte
var is_array_1 = __importDefault(require("@antv/util/lib/is-array"));
var is_function_1 = __importDefault(require("@antv/util/lib/is-function"));
var is_string_1 = __importDefault(require("@antv/util/lib/is-string"));
var group_by_1 = __importDefault(require("@antv/util/lib/group-by"));
var simple_sort_by_1 = __importDefault(require("./simple-sort-by"));
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
        newRows = simple_sort_by_1.default(rows, order_by);
    }
    var groupingFn;
    if (is_function_1.default(group_by)) {
        groupingFn = group_by;
    }
    else if (is_array_1.default(group_by)) {
        groupingFn = function (row) { return "_" + group_by.map(function (col) { return row[col]; }).join('-'); };
        // NOTE: Object.keys({'b': 'b', '2': '2', '1': '1', 'a': 'a'}) => [ '1', '2', 'b', 'a' ]
        // that is why we have to add a prefix
    }
    else if (is_string_1.default(group_by)) {
        groupingFn = function (row) { return "_" + row[group_by]; };
    }
    var groups = group_by_1.default(newRows, groupingFn);
    return groups;
}
;
exports.default = partition;
//# sourceMappingURL=partition.js.map