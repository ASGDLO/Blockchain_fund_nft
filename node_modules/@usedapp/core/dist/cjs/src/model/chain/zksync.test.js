"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var test_defaults_1 = require("./test-defaults");
var src_1 = require("../../../src");
describe('zkSync Chain', function () {
    it('getChainId', function () {
        (0, chai_1.expect)(src_1.ZkSyncTestnet.chainId).to.equal(280);
    });
    it('getChainName', function () {
        (0, chai_1.expect)(src_1.ZkSyncTestnet.chainName).to.eq('zkSync alpha testnet');
    });
    it('isTestChain', function () {
        (0, chai_1.expect)(src_1.ZkSyncTestnet.isTestChain).to.be["true"];
    });
    it('isLocalChain', function () {
        (0, chai_1.expect)(src_1.ZkSyncTestnet.isLocalChain).to.be["false"];
    });
    it('getExplorerAddressLink', function () {
        (0, chai_1.expect)(src_1.ZkSyncTestnet.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://zksync2-testnet.zkscan.io/address/".concat(test_defaults_1.TEST_ADDRESS));
    });
    it('getExplorerTransactionLink', function () {
        (0, chai_1.expect)(src_1.ZkSyncTestnet.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://zksync2-testnet.zkscan.io/tx/".concat(test_defaults_1.TEST_TX));
    });
});
//# sourceMappingURL=zksync.test.js.map