import { MultiCallABI } from '../constants';
import { useMulticallAddress } from './useMulticallAddress';
import { useCall } from './useCall';
import { Contract } from 'ethers';
/**
 * Returns ether balance of a given account.
 * @param address address of an account
 * @returns a balance of the account which is BigNumber or `undefined` if not connected to network or address is a falsy value
 * @public
 *
 * @example
 * const { account } = useEthers()
 * const etherBalance = useEtherBalance(account)
 *
 * return (
 *   {etherBalance && <p>Ether balance: {formatEther(etherBalance)} ETH </p>}
 * )
 */
export function useEtherBalance(address, queryParams = {}) {
    var _a;
    const multicallAddress = useMulticallAddress(queryParams);
    const { value: value } = (_a = useCall(multicallAddress &&
        address && {
        contract: new Contract(multicallAddress, MultiCallABI),
        method: 'getEthBalance',
        args: [address],
    }, queryParams)) !== null && _a !== void 0 ? _a : {};
    return value === null || value === void 0 ? void 0 : value[0];
}
//# sourceMappingURL=useEtherBalance.js.map