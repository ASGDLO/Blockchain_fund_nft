"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var test_defaults_1 = require("./test-defaults");
var src_1 = require("../../../src");
describe('Oasis Emerald Chain', function () {
    it('getChainId', function () {
        (0, chai_1.expect)(src_1.OasisEmerald.chainId).to.equal(42262);
        (0, chai_1.expect)(src_1.OasisEmeraldTestnet.chainId).to.equal(42261);
    });
    it('getChainName', function () {
        (0, chai_1.expect)(src_1.OasisEmerald.chainName).to.eq('OasisEmerald');
        (0, chai_1.expect)(src_1.OasisEmeraldTestnet.chainName).to.equal('OasisEmeraldTestnet');
    });
    it('isTestChain', function () {
        (0, chai_1.expect)(src_1.OasisEmerald.isTestChain).to.be["false"];
        (0, chai_1.expect)(src_1.OasisEmeraldTestnet.isTestChain).to.be["true"];
    });
    it('isLocalChain', function () {
        (0, chai_1.expect)(src_1.OasisEmerald.isLocalChain).to.be["false"];
        (0, chai_1.expect)(src_1.OasisEmeraldTestnet.isLocalChain).to.be["false"];
    });
    it('getExplorerAddressLink', function () {
        (0, chai_1.expect)(src_1.OasisEmerald.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://explorer.emerald.oasis.dev/address/".concat(test_defaults_1.TEST_ADDRESS, "/transactions"));
        (0, chai_1.expect)(src_1.OasisEmeraldTestnet.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://testnet.explorer.emerald.oasis.dev/address/".concat(test_defaults_1.TEST_ADDRESS, "/transactions"));
    });
    it('getExplorerTransactionLink', function () {
        (0, chai_1.expect)(src_1.OasisEmerald.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://explorer.emerald.oasis.dev/tx/".concat(test_defaults_1.TEST_TX, "/internal-transactions"));
        (0, chai_1.expect)(src_1.OasisEmeraldTestnet.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://testnet.explorer.emerald.oasis.dev/tx/".concat(test_defaults_1.TEST_TX, "/internal-transactions"));
    });
});
//# sourceMappingURL=oasis.test.js.map