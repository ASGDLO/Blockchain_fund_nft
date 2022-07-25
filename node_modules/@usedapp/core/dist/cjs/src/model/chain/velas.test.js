"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var test_defaults_1 = require("./test-defaults");
var src_1 = require("../../../src");
describe('Velas Chain', function () {
    it('getChainId', function () {
        (0, chai_1.expect)(src_1.Velas.chainId).to.equal(106);
        (0, chai_1.expect)(src_1.VelasTestnet.chainId).to.equal(111);
    });
    it('getChainName', function () {
        (0, chai_1.expect)(src_1.Velas.chainName).to.eq('Velas Mainnet');
        (0, chai_1.expect)(src_1.VelasTestnet.chainName).to.eq('Velas Testnet');
    });
    it('isTestChain', function () {
        (0, chai_1.expect)(src_1.Velas.isTestChain).to.be["false"];
        (0, chai_1.expect)(src_1.VelasTestnet.isTestChain).to.be["true"];
    });
    it('isLocalChain', function () {
        (0, chai_1.expect)(src_1.Velas.isLocalChain).to.be["false"];
        (0, chai_1.expect)(src_1.VelasTestnet.isLocalChain).to.be["false"];
    });
    it('getExplorerAddressLink', function () {
        (0, chai_1.expect)(src_1.Velas.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://evmexplorer.velas.com/address/".concat(test_defaults_1.TEST_ADDRESS));
        (0, chai_1.expect)(src_1.VelasTestnet.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://evmexplorer.testnet.velas.com/address/".concat(test_defaults_1.TEST_ADDRESS));
    });
    it('getExplorerTransactionLink', function () {
        (0, chai_1.expect)(src_1.Velas.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://evmexplorer.velas.com/tx/".concat(test_defaults_1.TEST_TX));
        (0, chai_1.expect)(src_1.VelasTestnet.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://evmexplorer.testnet.velas.com/tx/".concat(test_defaults_1.TEST_TX));
    });
});
//# sourceMappingURL=velas.test.js.map