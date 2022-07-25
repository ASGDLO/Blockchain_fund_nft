"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.useToken = void 0;
var constants_1 = require("../constants");
var useCall_1 = require("./useCall");
var ethers_1 = require("ethers");
/**
 * Returns name, symbol, decimals and token supply of a given token.
 * @param tokenAddress address of a token contract.
 * @returns a token info object (see {@link TokenInfo}) or `undefined` if all four methods don't exist on a token.
 * @public
 * @example
 * const DAI_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'
 * const daiInfo = useToken(DAI_ADDRESS)
 *
 * return daiInfo ? (
 *   <>
 *     <p>Dai name: {daiInfo?.name}</p>
 *     <p>Dai symbol: {daiInfo?.symbol}</p>
 *     <p>Dai decimals: {daiInfo?.decimals}</p>
 *     <p>Dai totalSupply: {daiInfo?.totalSupply ? formatUnits(daiInfo?.totalSupply, daiInfo?.decimals) : ''}</p>
 *   </>
 * ) : null
 */
function useToken(tokenAddress) {
    var _a, _b;
    var partialCall = tokenAddress && {
        contract: new ethers_1.Contract(tokenAddress, constants_1.ERC20Interface),
        address: tokenAddress,
        args: []
    };
    var args = ['name', 'symbol', 'decimals', 'totalSupply'].map(function (method) { return partialCall && __assign(__assign({}, partialCall), { method: method }); });
    var _c = (0, useCall_1.useCalls)(args), name = _c[0], symbol = _c[1], decimals = _c[2], totalSupply = _c[3];
    if (!name && !symbol && !decimals && !totalSupply) {
        return undefined;
    }
    return {
        name: (_a = name === null || name === void 0 ? void 0 : name.value[0]) !== null && _a !== void 0 ? _a : '',
        symbol: (_b = symbol === null || symbol === void 0 ? void 0 : symbol.value[0]) !== null && _b !== void 0 ? _b : '',
        decimals: decimals === null || decimals === void 0 ? void 0 : decimals.value[0],
        totalSupply: totalSupply === null || totalSupply === void 0 ? void 0 : totalSupply.value[0]
    };
}
exports.useToken = useToken;
//# sourceMappingURL=useToken.js.map