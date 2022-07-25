import { BigNumber } from 'ethers';
import { QueryParams } from '../constants/type/QueryParams';
import { Falsy } from '../model/types';
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
export declare function useTokenBalance(tokenAddress: string | Falsy, address: string | Falsy, queryParams?: QueryParams): BigNumber | undefined;
//# sourceMappingURL=useTokenBalance.d.ts.map