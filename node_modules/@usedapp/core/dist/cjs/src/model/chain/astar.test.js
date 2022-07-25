"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var test_defaults_1 = require("./test-defaults");
var __1 = require("../..");
describe('Astar Chain', function () {
    it('getChainId', function () {
        (0, chai_1.expect)(__1.Astar.chainId).to.equal(592);
    });
    it('getChainName', function () {
        (0, chai_1.expect)(__1.Astar.chainName).to.eq('Astar');
    });
    it('isTestChain', function () {
        (0, chai_1.expect)(__1.Astar.isTestChain).to.be["false"];
    });
    it('isLocalChain', function () {
        (0, chai_1.expect)(__1.Astar.isLocalChain).to.be["false"];
    });
    it('getExplorerAddressLink', function () {
        (0, chai_1.expect)(__1.Astar.getExplorerAddressLink(test_defaults_1.TEST_ADDRESS)).to.eq("https://blockscout.com/astar/address/".concat(test_defaults_1.TEST_ADDRESS));
    });
    it('getExplorerTransactionLink', function () {
        (0, chai_1.expect)(__1.Astar.getExplorerTransactionLink(test_defaults_1.TEST_TX)).to.eq("https://blockscout.com/astar/tx/".concat(test_defaults_1.TEST_TX));
    });
});
//# sourceMappingURL=astar.test.js.map