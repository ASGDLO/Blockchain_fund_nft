"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var test_defaults_1 = require("./test-defaults");
var __1 = require("../..");
describe('Boba Chain', function () {
    it('getChainId', function () {
        (0, chai_1.expect)(__1.Boba.chainId).to.equal(288);
    });
    it('getChainName', function () {
        (0, chai_1.expect)(__1.Boba.chainName).to.eq('Boba');
    });
    it('isTestChain', function () {
        (0, chai_1.expect)(__1.Boba.isTestChain).to.be["false"];
    });
    it('isLocalChain', function () {
        (0, chai_1.expect)(__1.Boba.isLocalChain).to.be["false"];
    });
    it('getExplorerAddressLink', function () {
        (0, chai_1.expect)(__1.Boba.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://blockexplorer.boba.network/address/".concat(test_defaults_1.TEST_ADDRESS));
    });
    it('getExplorerTransactionLink', function () {
        (0, chai_1.expect)(__1.Boba.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://blockexplorer.boba.network/tx/".concat(test_defaults_1.TEST_TX));
    });
});
//# sourceMappingURL=boba.test.js.map