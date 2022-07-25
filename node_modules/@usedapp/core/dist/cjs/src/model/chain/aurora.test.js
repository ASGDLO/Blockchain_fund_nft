"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var test_defaults_1 = require("./test-defaults");
var src_1 = require("../../../src");
describe('Aurora Chain', function () {
    it('getChainId', function () {
        (0, chai_1.expect)(src_1.Aurora.chainId).to.equal(1313161554);
        (0, chai_1.expect)(src_1.AuroraTestnet.chainId).to.equal(1313161555);
    });
    it('getChainName', function () {
        (0, chai_1.expect)(src_1.Aurora.chainName).to.eq('Aurora');
        (0, chai_1.expect)(src_1.AuroraTestnet.chainName).to.eq('Aurora Testnet');
    });
    it('isTestChain', function () {
        (0, chai_1.expect)(src_1.Aurora.isTestChain).to.be["false"];
        (0, chai_1.expect)(src_1.AuroraTestnet.isTestChain).to.be["true"];
    });
    it('isLocalChain', function () {
        (0, chai_1.expect)(src_1.Aurora.isLocalChain).to.be["false"];
        (0, chai_1.expect)(src_1.AuroraTestnet.isLocalChain).to.be["false"];
    });
    it('getExplorerAddressLink', function () {
        (0, chai_1.expect)(src_1.Aurora.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://explorer.mainnet.aurora.dev/address/".concat(test_defaults_1.TEST_ADDRESS));
        (0, chai_1.expect)(src_1.AuroraTestnet.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://explorer.testnet.aurora.dev/address/".concat(test_defaults_1.TEST_ADDRESS));
    });
    it('getExplorerTransactionLink', function () {
        (0, chai_1.expect)(src_1.Aurora.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://explorer.mainnet.aurora.dev/tx/".concat(test_defaults_1.TEST_TX));
        (0, chai_1.expect)(src_1.AuroraTestnet.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://explorer.testnet.aurora.dev/tx/".concat(test_defaults_1.TEST_TX));
    });
});
//# sourceMappingURL=aurora.test.js.map