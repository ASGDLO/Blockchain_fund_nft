import { isObject, isArray } from '@antv/util';
var isEqual = function (value, other) {
    if (isObject(value) && isObject(other)) {
        var valueKeys = Object.keys(value);
        var otherKeys = Object.keys(other);
        if (valueKeys.length !== otherKeys.length) {
            return false;
        }
        var rst = true;
        for (var i = 0; i < valueKeys.length; i++) {
            rst = isEqual(value[valueKeys[i]], other[valueKeys[i]]);
            if (!rst) {
                break;
            }
        }
        return rst;
    }
    if (isArray(value) && isArray(other)) {
        if (value.length !== other.length) {
            return false;
        }
        var rst = true;
        for (var i = 0; i < value.length; i++) {
            rst = isEqual(value[i], other[i]);
            if (!rst) {
                break;
            }
        }
        return rst;
    }
    if (value === other) {
        return true;
    }
    if (!value || !other) {
        return false;
    }
    return false;
};
export default isEqual;
//# sourceMappingURL=isEqual.js.map