"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var test_defaults_1 = require("./test-defaults");
var __1 = require("../..");
describe('ArbitrumRedditTestnet Chain', function () {
    it('getChainId', function () {
        (0, chai_1.expect)(__1.ArbitrumRedditTestnet.chainId).to.equal(5391184);
    });
    it('getChainName', function () {
        (0, chai_1.expect)(__1.ArbitrumRedditTestnet.chainName).to.eq('ArbitrumRedditTestnet');
    });
    it('isTestChain', function () {
        (0, chai_1.expect)(__1.ArbitrumRedditTestnet.isTestChain).to.be["true"];
    });
    it('isLocalChain', function () {
        (0, chai_1.expect)(__1.ArbitrumRedditTestnet.isLocalChain).to.be["false"];
    });
    it('rpcUrl', function () {
        (0, chai_1.expect)(__1.ArbitrumRedditTestnet.rpcUrl).to.eq('https://testnet.redditspace.com/rpc');
    });
    it('getExplorerAddressLink', function () {
        (0, chai_1.expect)(__1.ArbitrumRedditTestnet.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://testnet.redditspace.com/address/".concat(test_defaults_1.TEST_ADDRESS));
    });
    it('getExplorerTransactionLink', function () {
        (0, chai_1.expect)(__1.ArbitrumRedditTestnet.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://testnet.redditspace.com/tx/".concat(test_defaults_1.TEST_TX));
    });
});
//# sourceMappingURL=arbitrumReddit.test.js.map