"use strict";
exports.__esModule = true;
exports.encodeAggregate = void 0;
var common_1 = require("../common");
var encoder_1 = require("../multicall2/encoder");
var constants_1 = require("./constants");
var selector = constants_1.ethersAbi.getSighash('aggregate');
function encodeAggregate(calls) {
    // function aggregate(tuple(address target, bytes callData)[] calls) public returns (tuple(uint256 blockNumber, bytes returnData)[])
    // offset of the array is 0x20 because the only thing
    // that goes before the array is the offset itself
    var dynamicOffset = 0x20;
    var res = selector + (0, common_1.encodeUint)(dynamicOffset);
    // encode dynamic array of calls
    return (0, encoder_1.encodeCalls)(res, calls);
}
exports.encodeAggregate = encodeAggregate;
//# sourceMappingURL=encoder.js.map