import { Contract } from 'ethers';
import { ERC20Interface } from '../constants';
import { useCall } from './useCall';
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
export function useTokenBalance(tokenAddress, address, queryParams = {}) {
    var _a;
    const { value: tokenBalance } = (_a = useCall(address &&
        tokenAddress && {
        contract: new Contract(tokenAddress, ERC20Interface),
        method: 'balanceOf',
        args: [address],
    }, queryParams)) !== null && _a !== void 0 ? _a : {};
    return tokenBalance === null || tokenBalance === void 0 ? void 0 : tokenBalance[0];
}
//# sourceMappingURL=useTokenBalance.js.map