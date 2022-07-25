"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var chainExplorerLink_1 = require("./chainExplorerLink");
describe('Chain explorer links', function () {
    it('getAddressLink'),
        function () {
            (0, chai_1.expect)((0, chainExplorerLink_1.getAddressLink)('https://optimistic.etherscan.io')('0x0000000000000000000000000000000000000000')).to.eq('https://optimistic.etherscan.io/address/0x0000000000000000000000000000000000000000');
        };
    it('getTransactionLink'),
        function () {
            (0, chai_1.expect)((0, chainExplorerLink_1.getTransactionLink)('https://optimistic.etherscan.io')('0xf0299d575e284a0457baba6107bbdbdfffffffffffffffff0000000000000000')).to.eq('https://optimistic.etherscan.io/tx/0xf0299d575e284a0457baba6107bbdbdfffffffffffffffff0000000000000000');
        };
});
//# sourceMappingURL=chainExplorerLink.test.js.map