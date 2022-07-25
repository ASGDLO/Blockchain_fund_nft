"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var test_defaults_1 = require("./test-defaults");
var src_1 = require("../../../src");
describe('Songbird Chain', function () {
    it('getChainId', function () {
        (0, chai_1.expect)(src_1.Songbird.chainId).to.equal(19);
    });
    it('getChainName', function () {
        (0, chai_1.expect)(src_1.Songbird.chainName).to.eq('Songbird');
    });
    it('isTestChain', function () {
        (0, chai_1.expect)(src_1.Songbird.isTestChain).to.be["false"];
    });
    it('isLocalChain', function () {
        (0, chai_1.expect)(src_1.Songbird.isLocalChain).to.be["false"];
    });
    it('getExplorerAddressLink', function () {
        (0, chai_1.expect)(src_1.Songbird.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://songbird-explorer.flare.network/address/".concat(test_defaults_1.TEST_ADDRESS));
    });
    it('getExplorerTransactionLink', function () {
        (0, chai_1.expect)(src_1.Songbird.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://songbird-explorer.flare.network/tx/".concat(test_defaults_1.TEST_TX));
    });
});
//# sourceMappingURL=songbird.test.js.map