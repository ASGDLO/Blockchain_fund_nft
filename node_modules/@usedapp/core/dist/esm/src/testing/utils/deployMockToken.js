import { BigNumber, utils } from 'ethers';
import { deployContract } from 'ethereum-waffle';
import { ERC20Mock } from '../../constants';
export const MOCK_TOKEN_INITIAL_BALANCE = utils.parseEther('10');
export const SECOND_TEST_CHAIN_ID = 31337;
export const SECOND_MOCK_TOKEN_INITIAL_BALANCE = BigNumber.from(2000);
export async function deployMockToken(deployer, initialBalance) {
    const args = ['MOCKToken', 'MOCK', deployer.address, initialBalance !== null && initialBalance !== void 0 ? initialBalance : MOCK_TOKEN_INITIAL_BALANCE];
    return await deployContract(deployer, ERC20Mock, args);
}
//# sourceMappingURL=deployMockToken.js.map