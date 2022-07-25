"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var chai_1 = require("chai");
var ethers_1 = require("ethers");
var benchmark_1 = require("../benchmark");
var constants_1 = require("./constants");
var encoder_1 = require("./encoder");
describe('Multicall encoder', function () {
    var address = ethers_1.Wallet.createRandom().address;
    var calls = __spreadArray(__spreadArray([], __spreadArray([], Array(10), true).map(function () { return constants_1.ethersAbi.encodeFunctionData('getCurrentBlockGasLimit'); }), true), __spreadArray([], Array(10), true).map(function (_, i) { return constants_1.ethersAbi.encodeFunctionData('getBlockHash', [i]); }), true);
    it('Properly encodes', function () {
        var calldata = constants_1.ethersAbi.encodeFunctionData('aggregate', [calls.map(function (calldata) { return [address, calldata]; })]);
        var manual = (0, encoder_1.encodeAggregate)(calls.map(function (calldata) { return [address, calldata]; }));
        (0, chai_1.expect)(manual).to.eq(calldata);
    });
    it('bench ethers', function () {
        var callsLong = __spreadArray([], Array(20), true).flatMap(function () { return calls; });
        (0, benchmark_1.formatBench)((0, benchmark_1.bench)(function () {
            constants_1.ethersAbi.encodeFunctionData('aggregate', [callsLong.map(function (calldata) { return [address, calldata]; })]);
        }));
    });
    it('bench manual', function () {
        var callsLong = __spreadArray([], Array(20), true).flatMap(function () { return calls; });
        (0, benchmark_1.formatBench)((0, benchmark_1.bench)(function () {
            (0, encoder_1.encodeAggregate)(callsLong.map(function (calldata) { return [address, calldata]; }));
        }));
    });
});
//# sourceMappingURL=encoder.test.js.map