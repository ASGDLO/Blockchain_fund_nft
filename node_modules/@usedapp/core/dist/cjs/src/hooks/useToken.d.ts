import { Falsy } from '../model/types';
import { TokenInfo } from '../model/TokenInfo';
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
export declare function useToken(tokenAddress: string | Falsy): TokenInfo | undefined;
//# sourceMappingURL=useToken.d.ts.map