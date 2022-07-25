"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var src_1 = require("../../src");
var chain_1 = require("./chain");
describe('chain', function () {
    var mainnet = src_1.ChainId.Mainnet;
    var ropsten = src_1.ChainId.Ropsten;
    var ganache = src_1.ChainId.Localhost;
    it('returns correct chain name from id', function () {
        var mainnetName = (0, chain_1.getChainName)(mainnet);
        (0, chai_1.expect)(mainnetName).to.eq('Mainnet');
    });
    it('tells correct if chain is test', function () {
        var isMainnetTest = (0, chain_1.isTestChain)(mainnet);
        var isRopstenTest = (0, chain_1.isTestChain)(ropsten);
        (0, chai_1.expect)(isMainnetTest).to.be["false"];
        (0, chai_1.expect)(isRopstenTest).to.be["true"];
    });
    it('tells correct if chain is local', function () {
        var isMainnetLocal = (0, chain_1.isLocalChain)(mainnet);
        var isGanacheLocal = (0, chain_1.isLocalChain)(ganache);
        (0, chai_1.expect)(isMainnetLocal).to.be["false"];
        (0, chai_1.expect)(isGanacheLocal).to.be["true"];
    });
});
//# sourceMappingURL=chain.test.js.map