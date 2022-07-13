/**
 * 对比不一致则执行回调
*/
import _each from '@antv/util/lib/each';
import _isArray from '@antv/util/lib/is-array';
import _shallowEqual from './shallowEqual';
export default (function (preProps, nextProps, keys, callback) {
    // preProps 为null 即初始化。
    if (preProps === null) {
        _each(keys, function (key) {
            var value = nextProps[key];
            if (value !== undefined) {
                if (!_isArray(value)) {
                    value = [value];
                }
                callback(value, key);
            }
        });
        return;
    }
    var value;
    var nextValue;
    _each(keys, function (key) {
        value = preProps[key];
        nextValue = nextProps[key];
        if (!_shallowEqual(nextValue, value)) {
            if (!_isArray(nextValue)) {
                nextValue = [nextValue];
            }
            callback(nextValue, key);
        }
    });
});
//# sourceMappingURL=compareProps.js.map