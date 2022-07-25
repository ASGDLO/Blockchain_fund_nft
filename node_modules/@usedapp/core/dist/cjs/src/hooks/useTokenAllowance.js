"use strict";
exports.__esModule = true;
exports.useTokenAllowance = void 0;
var ethers_1 = require("ethers");
var constants_1 = require("../constants");
var useCall_1 = require("./useCall");
/**
 * Returns allowance (tokens left to use by spender) for given token owner - spender relationship.
 * @param tokenAddress address of a token contract
 * @param ownerAddress address of an account to which tokens are linked
 * @param spenderAddress address of an account allowed to spend tokens
 * @param queryParams see {@link QueryParams}.
 * @returns an allowance which is `BigNumber`, or `undefined` if any address or token is `Falsy` or not connected.
 * @public
 * @example
 * const TOKEN_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'
 * const SPENDER_ADDRESS = '0xA193E42526F1FEA8C99AF609dcEabf30C1c29fAA'
 * const { account, chainId } = useEthers()
 * const allowance = useTokenAllowance(TOKEN_ADDRESS, account, SPENDER_ADDRESS)
 *
 * return (
 *   {allowance && <p>Remaining allowance: {formatUnits(allowance, 18)} tokens</p>}
 * )
 */
function useTokenAllowance(tokenAddress, ownerAddress, spenderAddress, queryParams) {
    var _a;
    if (queryParams === void 0) { queryParams = {}; }
    var allowance = ((_a = (0, useCall_1.useCall)(ownerAddress &&
        spenderAddress &&
        tokenAddress && {
        contract: new ethers_1.Contract(tokenAddress, constants_1.ERC20Interface),
        method: 'allowance',
        args: [ownerAddress, spenderAddress]
    }, queryParams)) !== null && _a !== void 0 ? _a : {}).value;
    return allowance === null || allowance === void 0 ? void 0 : allowance[0];
}
exports.useTokenAllowance = useTokenAllowance;
//# sourceMappingURL=useTokenAllowance.js.map