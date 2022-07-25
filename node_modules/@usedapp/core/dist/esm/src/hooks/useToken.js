import { ERC20Interface } from '../constants';
import { useCalls } from './useCall';
import { Contract } from 'ethers';
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
export function useToken(tokenAddress) {
    var _a, _b;
    const partialCall = tokenAddress && {
        contract: new Contract(tokenAddress, ERC20Interface),
        address: tokenAddress,
        args: [],
    };
    const args = ['name', 'symbol', 'decimals', 'totalSupply'].map((method) => partialCall && Object.assign(Object.assign({}, partialCall), { method }));
    const [name, symbol, decimals, totalSupply] = useCalls(args);
    if (!name && !symbol && !decimals && !totalSupply) {
        return undefined;
    }
    return {
        name: (_a = name === null || name === void 0 ? void 0 : name.value[0]) !== null && _a !== void 0 ? _a : '',
        symbol: (_b = symbol === null || symbol === void 0 ? void 0 : symbol.value[0]) !== null && _b !== void 0 ? _b : '',
        decimals: decimals === null || decimals === void 0 ? void 0 : decimals.value[0],
        totalSupply: totalSupply === null || totalSupply === void 0 ? void 0 : totalSupply.value[0],
    };
}
//# sourceMappingURL=useToken.js.map