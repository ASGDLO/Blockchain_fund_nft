"use strict";
exports.__esModule = true;
exports.useDebounce = void 0;
var react_1 = require("react");
// modified from https://usehooks.com/useDebounce/
/**
 * Debounce a value of type T.
 * It stores a single value but returns after debounced time unless a new value is assigned before the debounce time elapses, in which case the process restarts.
 * @param value variable to be debounced
 * @param delay debounce time - amount of time in ms.
 * @internal Intended for internal use - use it on your own risk
 * @returns debounced value
 *
 * @example
 * const [someValue, setValue] = useState(...)
 * const debouncedValue = useDebounce(value, 1000)
 */
function useDebounce(value, delay) {
    var _a = (0, react_1.useState)(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    (0, react_1.useEffect)(function () {
        // Update debounced value after delay
        var handler = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
}
exports.useDebounce = useDebounce;
//# sourceMappingURL=useDebounce.js.map