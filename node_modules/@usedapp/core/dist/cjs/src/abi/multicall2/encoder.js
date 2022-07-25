"use strict";
exports.__esModule = true;
exports.encodeTryAggregate = exports.encodeCalls = void 0;
var common_1 = require("../common");
var constants_1 = require("./constants");
var selector = constants_1.ethersAbi.getSighash('tryAggregate');
function encodeCalls(start, calls) {
    var res = start;
    // the first offset is calls.length * 0x20 because the first
    // item of a dynamic array starts after all offsets
    var dynamicOffset = calls.length * 0x20;
    // number of items in the array
    res += (0, common_1.encodeUint)(calls.length);
    for (var _i = 0, calls_1 = calls; _i < calls_1.length; _i++) {
        var call = calls_1[_i];
        // offset of the current call
        res += (0, common_1.encodeUint)(dynamicOffset);
        // offset for the next call - current offset
        // + length of the current call
        // + space taken by the current offset
        // + the first item in the next tuple - address for the next call
        // + space taken by the offset for the next call data
        dynamicOffset += 3 * 0x20 + (0, common_1.bufPaddedLength)(call[1]);
    }
    for (var _a = 0, calls_2 = calls; _a < calls_2.length; _a++) {
        var call = calls_2[_a];
        // address + calldata offset
        dynamicOffset = 0x40;
        res += '000000000000000000000000' + call[0].slice(2).toLowerCase();
        res += (0, common_1.encodeUint)(dynamicOffset);
        // call data length
        res += (0, common_1.buffLength)(call[1]).toString(16).padStart(64, '0');
        // calldata
        res += call[1].slice(2).padEnd((0, common_1.bufPaddedLength)(call[1]) * 2, '0');
    }
    return res;
}
exports.encodeCalls = encodeCalls;
function encodeTryAggregate(b, calls) {
    // function tryAggregate(bool requireSuccess, tuple(address target, bytes callData)[] calls) public returns (tuple(bool success, bytes returnData)[])
    var res = selector;
    // offset of the array is 0x40 because we need to
    // encode requireSuccess flag and the offset itself
    var dynamicOffset = 0x40;
    res += b ? constants_1.trueEncoded : constants_1.falseEncoded;
    res += (0, common_1.encodeUint)(dynamicOffset);
    // encode dynamic array of calls
    return encodeCalls(res, calls);
}
exports.encodeTryAggregate = encodeTryAggregate;
//# sourceMappingURL=encoder.js.map