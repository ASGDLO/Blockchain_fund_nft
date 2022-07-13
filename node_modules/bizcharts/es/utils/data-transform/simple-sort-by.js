// from g2-dataSte
import isArray from '@antv/util/lib/is-array';
import isFunction from '@antv/util/lib/is-function';
import isString from '@antv/util/lib/is-string';
export default function sortBy(arr, keys) {
    if (keys === void 0) { keys = []; }
    var comparer;
    if (isFunction(keys)) {
        comparer = keys;
    }
    else if (isArray(keys)) {
        comparer = function (a, b) {
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (a[key] < b[key]) {
                    return -1;
                }
                if (a[key] > b[key]) {
                    return 1;
                }
            }
            return 0;
        };
    }
    else if (isString(keys)) {
        comparer = function (a, b) {
            if (a[keys] < b[keys]) {
                return -1;
            }
            if (a[keys] > b[keys]) {
                return 1;
            }
            return 0;
        };
    }
    return arr.sort(comparer);
}
//# sourceMappingURL=simple-sort-by.js.map