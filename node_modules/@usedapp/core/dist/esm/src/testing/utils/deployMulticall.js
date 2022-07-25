import { deployContract } from 'ethereum-waffle';
import { MultiCall, MultiCall2 } from '../../constants';
export const deployMulticall = async (provider, chainId) => {
    return deployMulticallBase(MultiCall, provider, chainId);
};
export const deployMulticall2 = async (provider, chainId) => {
    return deployMulticallBase(MultiCall2, provider, chainId);
};
const deployMulticallBase = async (contract, provider, chainId) => {
    const multicall = await deployContract((await provider.getWallets())[0], {
        bytecode: contract.bytecode,
        abi: contract.abi,
    });
    const multicallAddresses = { [chainId]: multicall.address };
    return multicallAddresses;
};
//# sourceMappingURL=deployMulticall.js.map