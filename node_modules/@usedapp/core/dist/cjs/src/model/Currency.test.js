"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var ethers_1 = require("ethers");
var __1 = require("..");
var AddressZero = ethers_1.constants.AddressZero;
describe('Currency', function () {
    it('can be constructed', function () {
        var zuckBucks = new __1.Currency('Zuck Bucks', 'ZB', 2, {
            suffix: 'ZB'
        });
        var formatted = zuckBucks.format('1234');
        (0, chai_1.expect)(formatted).to.equal('12.34ZB');
    });
    it('FiatCurrency', function () {
        var dollar = new __1.FiatCurrency('United States Dollar', 'USD', 2, {
            prefix: '$',
            suffix: ' USD'
        });
        var formatted = dollar.format('1234');
        (0, chai_1.expect)(formatted).to.equal('$12.34 USD');
    });
    it('NativeCurrency', function () {
        var ether = new __1.NativeCurrency('Ether', 'ETH', __1.Mainnet.chainId);
        var formatted = ether.format('123'.concat('0'.repeat(18)));
        (0, chai_1.expect)(formatted).to.equal('123 ETH');
    });
    it('Token', function () {
        var token = new __1.Token('Fake Dai', 'FDI', __1.Mainnet.chainId, AddressZero);
        var formatted = token.format('123'.concat('0'.repeat(18)));
        (0, chai_1.expect)(formatted).to.equal('123 FDI');
    });
});
//# sourceMappingURL=Currency.test.js.map