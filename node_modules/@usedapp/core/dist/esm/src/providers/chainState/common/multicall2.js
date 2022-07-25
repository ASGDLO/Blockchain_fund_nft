import { Contract } from 'ethers';
import { decodeTryAggregate, encodeTryAggregate } from '../../../abi/multicall2';
const ABI = [
    'function tryAggregate(bool requireSuccess, tuple(address target, bytes callData)[] calls) public view returns (tuple(bool success, bytes returnData)[])',
];
/**
 * @public
 */
export const multicall2Factory = (fastEncoding) => (fastEncoding ? fastEncodingMulticall2 : multicall2);
/**
 * @public
 */
export async function multicall2(provider, address, blockNumber, requests) {
    if (requests.length === 0) {
        return {};
    }
    const contract = new Contract(address, ABI, provider);
    const results = await contract.tryAggregate(false, requests.map(({ address, data }) => [address, data]), { blockTag: blockNumber });
    return decodeResult(results, requests);
}
/**
 * @public
 */
export async function fastEncodingMulticall2(provider, address, blockNumber, requests) {
    if (requests.length === 0) {
        return {};
    }
    const response = await provider.call({
        to: address,
        data: encodeTryAggregate(false, requests.map(({ address, data }) => [address, data])),
    }, blockNumber);
    const [results] = decodeTryAggregate(response);
    return decodeResult(results, requests);
}
function decodeResult(results, requests) {
    var _a;
    const state = {};
    for (let i = 0; i < requests.length; i++) {
        const { address, data } = requests[i];
        const [success, value] = results[i];
        const stateForAddress = (_a = state[address]) !== null && _a !== void 0 ? _a : {};
        stateForAddress[data] = { success, value };
        state[address] = stateForAddress;
    }
    return state;
}
//# sourceMappingURL=multicall2.js.map