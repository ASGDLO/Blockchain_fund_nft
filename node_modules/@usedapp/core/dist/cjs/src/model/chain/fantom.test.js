"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var src_1 = require("../../../src");
var test_defaults_1 = require("./test-defaults");
describe('Fantom Chain', function () {
    it('getChainId', function () {
        (0, chai_1.expect)(src_1.Fantom.chainId).to.equal(250);
        (0, chai_1.expect)(src_1.FantomTestnet.chainId).to.equal(4002);
    });
    it('getChainName', function () {
        (0, chai_1.expect)(src_1.Fantom.chainName).to.eq('Fantom');
        (0, chai_1.expect)(src_1.FantomTestnet.chainName).to.eq('FantomTestnet');
    });
    it('isTestChain', function () {
        (0, chai_1.expect)(src_1.Fantom.isTestChain).to.be["false"];
        (0, chai_1.expect)(src_1.FantomTestnet.isTestChain).to.be["true"];
    });
    it('isLocalChain', function () {
        (0, chai_1.expect)(src_1.Fantom.isLocalChain).to.be["false"];
        (0, chai_1.expect)(src_1.FantomTestnet.isLocalChain).to.be["false"];
    });
    it('getExplorerAddressLink', function () {
        (0, chai_1.expect)(src_1.Fantom.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://ftmscan.com/address/".concat(test_defaults_1.TEST_ADDRESS));
        (0, chai_1.expect)(src_1.FantomTestnet.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://testnet.ftmscan.com/address/".concat(test_defaults_1.TEST_ADDRESS));
    });
    it('getExplorerTransactionLink', function () {
        (0, chai_1.expect)(src_1.Fantom.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://ftmscan.com/tx/".concat(test_defaults_1.TEST_TX));
        (0, chai_1.expect)(src_1.FantomTestnet.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://testnet.ftmscan.com/tx/".concat(test_defaults_1.TEST_TX));
    });
});
//# sourceMappingURL=fantom.test.js.map