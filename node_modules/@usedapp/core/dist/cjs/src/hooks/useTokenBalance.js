"use strict";
exports.__esModule = true;
exports.useTokenBalance = void 0;
var ethers_1 = require("ethers");
var constants_1 = require("../constants");
var useCall_1 = require("./useCall");
/**
 * Returns a balance of a given token for a given address.
 * @param tokenAddress address of a token contract.
 * @param address address of an account.
 * @param queryParams see {@link QueryParams}.
 * @public
 * @returns a balance which is `BigNumber`, or `undefined` if address or token is `Falsy` or not connected.
 * @example
 * const DAI_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'
 * const { account } = useEthers()
 * const daiBalance = useTokenBalance(DAI_ADDRESS, account)
 *
 * return (
 *   {daiBalance && <p>Dai balance: {formatUnits(daiBalance, 18)} DAI</p>}
 * )
 */
function useTokenBalance(tokenAddress, address, queryParams) {
    var _a;
    if (queryParams === void 0) { queryParams = {}; }
    var tokenBalance = ((_a = (0, useCall_1.useCall)(address &&
        tokenAddress && {
        contract: new ethers_1.Contract(tokenAddress, constants_1.ERC20Interface),
        method: 'balanceOf',
        args: [address]
    }, queryParams)) !== null && _a !== void 0 ? _a : {}).value;
    return tokenBalance === null || tokenBalance === void 0 ? void 0 : tokenBalance[0];
}
exports.useTokenBalance = useTokenBalance;
//# sourceMappingURL=useTokenBalance.js.map