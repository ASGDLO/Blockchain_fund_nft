"use strict";
exports.__esModule = true;
exports.decodeAggregate = void 0;
var common_1 = require("../common");
function decodeAggregate(calldata) {
    // function aggregate(tuple(address target, bytes callData)[] calls) public returns (tuple(uint256 blockNumber, bytes returnData)[])
    var errorMethodId = '0x08c379a0';
    if (calldata.startsWith(errorMethodId)) {
        throw new Error('Multicall aggregate: call failed');
    }
    calldata = calldata.slice(2); // 'remove 0x prefix'
    var getNumber = function (offset) { return (0, common_1.decodeUint)(calldata.slice(offset * common_1.wordLength, (offset + 1) * common_1.wordLength)); };
    var blockNumber = getNumber(0);
    // The array offset must be 0x40 - blockNumber + array offset
    if (getNumber(1) !== 0x40) {
        (0, common_1.fail)();
    }
    var arraySize = getNumber(2);
    var calls = [];
    for (var i = 0; i < arraySize; i++) {
        // offset of the call number i
        var callOffset = 2 * getNumber(i + 3) + 3 * common_1.wordLength; // * 2 because 1 byte = 2 chars
        // position of the call if we split calldata in chunks of 32 bytes
        var pos = callOffset / common_1.wordLength;
        // returnData is encoded as its length and the data itself
        var returnDataOffset = (pos + 1) * common_1.wordLength;
        var returnDataLength = getNumber(pos);
        var returnData = calldata.slice(returnDataOffset, returnDataOffset + 2 * returnDataLength); // * 2 because 1 byte = 2 chars
        calls.push('0x' + returnData);
    }
    return [blockNumber, calls];
}
exports.decodeAggregate = decodeAggregate;
//# sourceMappingURL=decoder.js.map