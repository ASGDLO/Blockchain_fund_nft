import { Falsy } from '../model/types';
import { BigNumber } from 'ethers';
import { QueryParams } from '../constants/type/QueryParams';
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
export declare function useEtherBalance(address: string | Falsy, queryParams?: QueryParams): BigNumber | undefined;
//# sourceMappingURL=useEtherBalance.d.ts.map