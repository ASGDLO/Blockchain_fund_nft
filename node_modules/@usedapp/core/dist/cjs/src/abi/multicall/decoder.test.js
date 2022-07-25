"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var crypto_1 = require("crypto");
var benchmark_1 = require("../benchmark");
var constants_1 = require("./constants");
var decoder_1 = require("./decoder");
describe('Multicall decoder', function () {
    var testData = [
        1,
        Array.from(Array(20).keys()).map(function (i) { return '0x' + (0, crypto_1.randomBytes)((i + 1) * 8).toString('hex'); }),
    ];
    var encoded = constants_1.ethersAbi.encodeFunctionResult('aggregate', testData);
    it('Properly decodes', function () {
        var manual = (0, decoder_1.decodeAggregate)(encoded);
        (0, chai_1.expect)(manual).to.deep.eq(testData);
    });
    it('bench ethers', function () {
        (0, benchmark_1.formatBench)((0, benchmark_1.bench)(function () {
            constants_1.ethersAbi.decodeFunctionResult('aggregate', encoded);
        }));
    });
    it('bench manual', function () {
        (0, benchmark_1.formatBench)((0, benchmark_1.bench)(function () {
            (0, decoder_1.decodeAggregate)(encoded);
        }));
    });
});
//# sourceMappingURL=decoder.test.js.map