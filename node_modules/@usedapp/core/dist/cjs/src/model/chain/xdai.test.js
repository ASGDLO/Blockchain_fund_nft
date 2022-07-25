"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var test_defaults_1 = require("./test-defaults");
var src_1 = require("../../../src");
describe('xDai Chain', function () {
    it('getChainId', function () {
        (0, chai_1.expect)(src_1.xDai.chainId).to.equal(100);
        (0, chai_1.expect)(src_1.Gnosis.chainId).to.equal(100);
    });
    it('getChainName', function () {
        (0, chai_1.expect)(src_1.xDai.chainName).to.eq('xDai');
        (0, chai_1.expect)(src_1.Gnosis.chainName).to.eq('Gnosis');
    });
    it('isTestChain', function () {
        (0, chai_1.expect)(src_1.xDai.isTestChain).to.be["false"];
        (0, chai_1.expect)(src_1.Gnosis.isTestChain).to.be["false"];
    });
    it('isLocalChain', function () {
        (0, chai_1.expect)(src_1.xDai.isLocalChain).to.be["false"];
        (0, chai_1.expect)(src_1.Gnosis.isLocalChain).to.be["false"];
    });
    it('getExplorerAddressLink', function () {
        (0, chai_1.expect)(src_1.xDai.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://blockscout.com/poa/xdai/address/".concat(test_defaults_1.TEST_ADDRESS, "/transactions"));
        (0, chai_1.expect)(src_1.Gnosis.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://blockscout.com/poa/xdai/address/".concat(test_defaults_1.TEST_ADDRESS, "/transactions"));
    });
    it('getExplorerTransactionLink', function () {
        (0, chai_1.expect)(src_1.xDai.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://blockscout.com/poa/xdai/tx/".concat(test_defaults_1.TEST_TX, "/internal-transactions"));
        (0, chai_1.expect)(src_1.Gnosis.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://blockscout.com/poa/xdai/tx/".concat(test_defaults_1.TEST_TX, "/internal-transactions"));
    });
});
//# sourceMappingURL=xdai.test.js.map