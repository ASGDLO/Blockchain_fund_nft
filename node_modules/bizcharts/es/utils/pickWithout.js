import _each from '@antv/util/lib/each';
import _isString from '@antv/util/lib/is-string';
// 支持正则匹配
var pickWithout = function (obj, keys) {
    var ret = {};
    _each(obj, function (v, k) {
        var match = false;
        keys.forEach(function (itKey) {
            if (_isString(itKey) && itKey === k) {
                match = true;
            }
            else if (itKey instanceof RegExp && k.match(itKey)) {
                match = true;
            }
        });
        if (!match) {
            ret[k] = v;
        }
    });
    return ret;
};
export default pickWithout;
//# sourceMappingURL=pickWithout.js.map