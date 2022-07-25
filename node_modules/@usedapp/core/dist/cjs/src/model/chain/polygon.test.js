"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var test_defaults_1 = require("./test-defaults");
var src_1 = require("../../../src");
describe('Polygon Chain', function () {
    it('getChainId', function () {
        (0, chai_1.expect)(src_1.Polygon.chainId).to.equal(137);
        (0, chai_1.expect)(src_1.Mumbai.chainId).to.equal(80001);
    });
    it('getChainName', function () {
        (0, chai_1.expect)(src_1.Polygon.chainName).to.eq('Polygon');
        (0, chai_1.expect)(src_1.Mumbai.chainName).to.eq('Mumbai');
    });
    it('isTestChain', function () {
        (0, chai_1.expect)(src_1.Polygon.isTestChain).to.be["false"];
        (0, chai_1.expect)(src_1.Mumbai.isTestChain).to.be["true"];
    });
    it('isLocalChain', function () {
        (0, chai_1.expect)(src_1.Polygon.isLocalChain).to.be["false"];
        (0, chai_1.expect)(src_1.Mumbai.isLocalChain).to.be["false"];
    });
    it('getExplorerAddressLink', function () {
        (0, chai_1.expect)(src_1.Polygon.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://polygonscan.com/address/".concat(test_defaults_1.TEST_ADDRESS));
        (0, chai_1.expect)(src_1.Mumbai.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://mumbai.polygonscan.com/address/".concat(test_defaults_1.TEST_ADDRESS));
    });
    it('getExplorerTransactionLink', function () {
        (0, chai_1.expect)(src_1.Polygon.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://polygonscan.com/tx/".concat(test_defaults_1.TEST_TX));
        (0, chai_1.expect)(src_1.Mumbai.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://mumbai.polygonscan.com/tx/".concat(test_defaults_1.TEST_TX));
    });
});
//# sourceMappingURL=polygon.test.js.map