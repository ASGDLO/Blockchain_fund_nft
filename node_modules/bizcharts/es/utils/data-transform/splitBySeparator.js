export default (function (num, separator) {
    if (separator === void 0) { separator = ','; }
    if (typeof num === 'number') {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }
    return num;
});
//# sourceMappingURL=splitBySeparator.js.map