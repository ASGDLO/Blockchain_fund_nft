"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var test_defaults_1 = require("./test-defaults");
var __1 = require("../..");
describe('Arbitrum Chain', function () {
    it('getChainId', function () {
        (0, chai_1.expect)(__1.Arbitrum.chainId).to.equal(42161);
        (0, chai_1.expect)(__1.ArbitrumRinkeby.chainId).to.equal(421611);
    });
    it('getChainName', function () {
        (0, chai_1.expect)(__1.Arbitrum.chainName).to.eq('Arbitrum');
        (0, chai_1.expect)(__1.ArbitrumRinkeby.chainName).to.eq('ArbitrumRinkeby');
    });
    it('isTestChain', function () {
        (0, chai_1.expect)(__1.Arbitrum.isTestChain).to.be["false"];
        (0, chai_1.expect)(__1.ArbitrumRinkeby.isTestChain).to.be["true"];
    });
    it('isLocalChain', function () {
        (0, chai_1.expect)(__1.Arbitrum.isLocalChain).to.be["false"];
        (0, chai_1.expect)(__1.ArbitrumRinkeby.isLocalChain).to.be["false"];
    });
    it('rpcUrl', function () {
        (0, chai_1.expect)(__1.Arbitrum.rpcUrl).to.eq('https://arb1.arbitrum.io/rpc');
        (0, chai_1.expect)(__1.ArbitrumRinkeby.rpcUrl).to.eq('https://rinkeby.arbitrum.io/rpc');
    });
    it('getExplorerAddressLink', function () {
        (0, chai_1.expect)(__1.Arbitrum.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://arbiscan.io/address/".concat(test_defaults_1.TEST_ADDRESS));
        (0, chai_1.expect)(__1.ArbitrumRinkeby.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://testnet.arbiscan.io/address/".concat(test_defaults_1.TEST_ADDRESS));
    });
    it('getExplorerTransactionLink', function () {
        (0, chai_1.expect)(__1.Arbitrum.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://arbiscan.io/tx/".concat(test_defaults_1.TEST_TX));
        (0, chai_1.expect)(__1.ArbitrumRinkeby.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://testnet.arbiscan.io/tx/".concat(test_defaults_1.TEST_TX));
    });
});
//# sourceMappingURL=arbitrum.test.js.map