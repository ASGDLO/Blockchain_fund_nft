"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var test_defaults_1 = require("./test-defaults");
var src_1 = require("../../../src");
describe('Andromeda Chain', function () {
    it('getChainId', function () {
        (0, chai_1.expect)(src_1.Andromeda.chainId).to.equal(1088);
        (0, chai_1.expect)(src_1.Stardust.chainId).to.equal(588);
    });
    it('getChainName', function () {
        (0, chai_1.expect)(src_1.Andromeda.chainName).to.eq('Andromeda');
        (0, chai_1.expect)(src_1.Stardust.chainName).to.eq('Stardust');
    });
    it('isTestChain', function () {
        (0, chai_1.expect)(src_1.Andromeda.isTestChain).to.be["false"];
        (0, chai_1.expect)(src_1.Stardust.isTestChain).to.be["true"];
    });
    it('isLocalChain', function () {
        (0, chai_1.expect)(src_1.Andromeda.isLocalChain).to.be["false"];
        (0, chai_1.expect)(src_1.Stardust.isLocalChain).to.be["false"];
    });
    it('getExplorerAddressLink', function () {
        (0, chai_1.expect)(src_1.Andromeda.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://andromeda-explorer.metis.io/address/".concat(test_defaults_1.TEST_ADDRESS));
        (0, chai_1.expect)(src_1.Stardust.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://stardust-explorer.metis.io/address/".concat(test_defaults_1.TEST_ADDRESS));
    });
    it('getExplorerTransactionLink', function () {
        (0, chai_1.expect)(src_1.Andromeda.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://andromeda-explorer.metis.io/tx/".concat(test_defaults_1.TEST_TX));
        (0, chai_1.expect)(src_1.Stardust.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://stardust-explorer.metis.io/tx/".concat(test_defaults_1.TEST_TX));
    });
});
//# sourceMappingURL=metis.test.js.map