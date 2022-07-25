"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var src_1 = require("../../../src");
var test_defaults_1 = require("./test-defaults");
describe('Avalanche Chain', function () {
    it('getChainId', function () {
        (0, chai_1.expect)(src_1.Avalanche.chainId).to.equal(43114);
        (0, chai_1.expect)(src_1.AvalancheTestnet.chainId).to.equal(43113);
    });
    it('getChainName', function () {
        (0, chai_1.expect)(src_1.Avalanche.chainName).to.eq('Avalanche');
        (0, chai_1.expect)(src_1.AvalancheTestnet.chainName).to.eq('AvalancheTestnet');
    });
    it('isTestChain', function () {
        (0, chai_1.expect)(src_1.Avalanche.isTestChain).to.be["false"];
        (0, chai_1.expect)(src_1.AvalancheTestnet.isTestChain).to.be["true"];
    });
    it('isLocalChain', function () {
        (0, chai_1.expect)(src_1.Avalanche.isLocalChain).to.be["false"];
        (0, chai_1.expect)(src_1.AvalancheTestnet.isLocalChain).to.be["false"];
    });
    it('getExplorerAddressLink', function () {
        (0, chai_1.expect)(src_1.Avalanche.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://snowtrace.io/address/".concat(test_defaults_1.TEST_ADDRESS));
        (0, chai_1.expect)(src_1.AvalancheTestnet.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://testnet.snowtrace.io/address/".concat(test_defaults_1.TEST_ADDRESS));
    });
    it('getExplorerTransactionLink', function () {
        (0, chai_1.expect)(src_1.Avalanche.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://snowtrace.io/tx/".concat(test_defaults_1.TEST_TX));
        (0, chai_1.expect)(src_1.AvalancheTestnet.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://testnet.snowtrace.io/tx/".concat(test_defaults_1.TEST_TX));
    });
});
//# sourceMappingURL=avalanche.test.js.map