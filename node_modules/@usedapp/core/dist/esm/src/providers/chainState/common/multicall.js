import { Contract } from 'ethers';
import { encodeAggregate, decodeAggregate } from '../../../abi/multicall';
const ABI = [
    'function aggregate(tuple(address target, bytes callData)[] calls) view returns (uint256 blockNumber, bytes[] returnData)',
];
/**
 * @public
 */
export const multicall1Factory = (fastEncoding) => (fastEncoding ? fastEncodingMulticall : multicall);
/**
 * @public
 */
export async function multicall(provider, address, blockNumber, requests) {
    if (requests.length === 0) {
        return {};
    }
    const contract = new Contract(address, ABI, provider);
    const [, results] = await contract.aggregate(requests.map(({ address, data }) => [address, data]), { blockTag: blockNumber });
    return decodeResult(results, requests);
}
/**
 * @public
 */
export async function fastEncodingMulticall(provider, address, blockNumber, requests) {
    if (requests.length === 0) {
        return {};
    }
    const response = await provider.call({
        to: address,
        data: encodeAggregate(requests.map(({ address, data }) => [address, data])),
    }, blockNumber);
    const [, results] = decodeAggregate(response);
    return decodeResult(results, requests);
}
function decodeResult(results, requests) {
    var _a;
    const state = {};
    for (let i = 0; i < requests.length; i++) {
        const { address, data } = requests[i];
        const result = results[i];
        const stateForAddress = (_a = state[address]) !== null && _a !== void 0 ? _a : {};
        stateForAddress[data] = { value: result, success: true };
        state[address] = stateForAddress;
    }
    return state;
}
//# sourceMappingURL=multicall.js.map