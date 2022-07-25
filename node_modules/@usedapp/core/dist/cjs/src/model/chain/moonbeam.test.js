"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var test_defaults_1 = require("./test-defaults");
var src_1 = require("../../../src");
describe('Moonbeam Chain', function () {
    it('getChainId', function () {
        (0, chai_1.expect)(src_1.Moonbeam.chainId).to.equal(1284);
    });
    it('getChainName', function () {
        (0, chai_1.expect)(src_1.Moonbeam.chainName).to.eq('Moonbeam');
    });
    it('isTestChain', function () {
        (0, chai_1.expect)(src_1.Moonbeam.isTestChain).to.be["false"];
    });
    it('isLocalChain', function () {
        (0, chai_1.expect)(src_1.Moonbeam.isLocalChain).to.be["false"];
    });
    it('getExplorerAddressLink', function () {
        (0, chai_1.expect)(src_1.Moonbeam.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://blockscout.moonbeam.network/address/".concat(test_defaults_1.TEST_ADDRESS, "/transactions"));
    });
    it('getExplorerTransactionLink', function () {
        (0, chai_1.expect)(src_1.Moonbeam.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://blockscout.moonbeam.network/tx/".concat(test_defaults_1.TEST_TX, "/internal-transactions"));
    });
});
//# sourceMappingURL=moonbeam.test.js.map