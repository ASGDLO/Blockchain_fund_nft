import { MockProvider } from '@ethereum-waffle/provider';
import { constants } from 'ethers';
import { expect } from 'chai';
import { BigNumber } from 'ethers';
import { getAddress } from 'ethers/lib/utils';
import { ERC20MockInterface } from '../constants';
import { deployMockToken, MOCK_TOKEN_INITIAL_BALANCE, renderWeb3Hook, SECOND_MOCK_TOKEN_INITIAL_BALANCE, SECOND_TEST_CHAIN_ID, } from '../testing';
import { useLogs } from './useLogs';
import { useSendTransaction } from './useSendTransaction';
const AddressZero = constants.AddressZero;
describe('useLogs', () => {
    const mockProvider = new MockProvider();
    const secondMockProvider = new MockProvider({ ganacheOptions: { _chainIdRpc: SECOND_TEST_CHAIN_ID } });
    const [deployer, receiver] = mockProvider.getWallets();
    const [secondDeployer] = secondMockProvider.getWallets();
    let token;
    let secondToken;
    beforeEach(async () => {
        token = await deployMockToken(deployer);
        secondToken = await deployMockToken(secondDeployer, SECOND_MOCK_TOKEN_INITIAL_BALANCE);
    });
    async function sendToken(signer, to, amount) {
        const { result, waitForCurrent, waitForNextUpdate } = await renderWeb3Hook(() => useSendTransaction({
            signer,
        }), { mockProvider });
        await waitForNextUpdate();
        const txData = ERC20MockInterface.encodeFunctionData('transfer(address,uint)', [to, amount]);
        const tx = {
            to: token.address,
            value: BigNumber.from(0),
            data: txData,
            gasPrice: 0,
        };
        await result.current.sendTransaction(tx);
        await waitForCurrent((val) => val.state !== undefined);
        expect(result.current.state.status).to.eq('Success');
        return result.current.state;
    }
    it('Can get only the recent token transfer log', async () => {
        var _a, _b, _c, _d;
        const blockNumber = await mockProvider.getBlockNumber();
        const from = deployer;
        const to = receiver;
        const fromAddress = from.address;
        const toAddress = to.address;
        const amount = BigNumber.from(1);
        await sendToken(from, toAddress, amount);
        const { result, waitForCurrent } = await renderWeb3Hook(() => useLogs({
            contract: token,
            event: 'Transfer',
            args: [],
        }, {
            fromBlock: blockNumber + 1,
            toBlock: blockNumber + 2,
        }), { mockProvider });
        await waitForCurrent((val) => val !== undefined);
        expect(result.error).to.be.undefined;
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.value).to.not.be.undefined;
        expect((_b = result.current) === null || _b === void 0 ? void 0 : _b.error).to.be.undefined;
        expect((_d = (_c = result.current) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.length).to.equal(1, 'Number of logs');
        const log = result.current.value[0];
        expect(getAddress(log.data['from'])).to.equal(getAddress(fromAddress), 'From');
        expect(getAddress(log.data['to'])).to.equal(getAddress(toAddress), 'To');
        expect(log.data['value']).to.equal(amount, 'Amount');
    });
    it('Can get all token transfer logs using the default log query parameters', async () => {
        var _a, _b, _c, _d;
        const from = deployer;
        const to = receiver;
        const fromAddress = from.address;
        const toAddress = to.address;
        const amount = BigNumber.from(1);
        await sendToken(from, toAddress, amount);
        const { result, waitForCurrent } = await renderWeb3Hook(() => useLogs({
            contract: token,
            event: 'Transfer',
            args: [],
        }), { mockProvider });
        await waitForCurrent((val) => val !== undefined);
        expect(result.error).to.be.undefined;
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.value).to.not.be.undefined;
        expect((_b = result.current) === null || _b === void 0 ? void 0 : _b.error).to.be.undefined;
        expect((_d = (_c = result.current) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.length).to.equal(2, 'Number of logs');
        // Mint transfer event
        const log1 = result.current.value[0];
        expect(getAddress(log1.data['from'])).to.equal(getAddress(AddressZero), 'From');
        expect(getAddress(log1.data['to'])).to.equal(getAddress(deployer.address), 'To');
        expect(log1.data['value']).to.equal(MOCK_TOKEN_INITIAL_BALANCE, 'Amount');
        // Recent transfer transaction log
        const log = result.current.value[1];
        expect(getAddress(log.data['from'])).to.equal(getAddress(fromAddress), 'From');
        expect(getAddress(log.data['to'])).to.equal(getAddress(toAddress), 'To');
        expect(log.data['value']).to.equal(amount, 'Amount');
    });
    it('Can get the mint transfer log', async () => {
        var _a, _b, _c, _d;
        const { result, waitForCurrent } = await renderWeb3Hook(() => useLogs({
            contract: token,
            event: 'Transfer',
            args: [],
        }, {
            fromBlock: 0,
            toBlock: 'latest',
        }), { mockProvider });
        await waitForCurrent((val) => val !== undefined);
        expect(result.error).to.be.undefined;
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.value).to.not.be.undefined;
        expect((_b = result.current) === null || _b === void 0 ? void 0 : _b.error).to.be.undefined;
        expect((_d = (_c = result.current) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.length).to.equal(1, 'Number of logs');
        const log = result.current.value[0];
        expect(getAddress(log.data['from'])).to.equal(getAddress(AddressZero), 'From');
        expect(getAddress(log.data['to'])).to.equal(getAddress(deployer.address), 'To');
        expect(log.data['value']).to.equal(MOCK_TOKEN_INITIAL_BALANCE, 'Amount');
    });
    it('Can get the mint transfer log on the alternative chain', async () => {
        var _a, _b, _c, _d;
        const { result, waitForCurrent } = await renderWeb3Hook(() => useLogs({
            contract: secondToken,
            event: 'Transfer',
            args: [],
        }, {
            fromBlock: 0,
            toBlock: 'latest',
        }), {
            mockProvider: secondMockProvider,
        });
        await waitForCurrent((val) => val !== undefined);
        expect(result.error).to.be.undefined;
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.value).to.not.be.undefined;
        expect((_b = result.current) === null || _b === void 0 ? void 0 : _b.error).to.be.undefined;
        expect((_d = (_c = result.current) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.length).to.equal(1, 'Number of logs');
        const log = result.current.value[0];
        expect(getAddress(log.data['from'])).to.equal(getAddress(AddressZero), 'From');
        expect(getAddress(log.data['to'])).to.equal(getAddress(secondDeployer.address), 'To');
        expect(log.data['value']).to.equal(SECOND_MOCK_TOKEN_INITIAL_BALANCE, 'Amount');
    });
    it('Works if there are no logs', async () => {
        var _a, _b, _c, _d;
        const { result, waitForCurrent } = await renderWeb3Hook(() => useLogs({
            contract: secondToken,
            event: 'Transfer',
            args: [],
        }, {
            fromBlock: 0,
            toBlock: 'latest',
        }), { mockProvider });
        await waitForCurrent((val) => val !== undefined);
        expect(result.error).to.be.undefined;
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.value).to.not.be.undefined;
        expect((_b = result.current) === null || _b === void 0 ? void 0 : _b.error).to.be.undefined;
        expect((_d = (_c = result.current) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.length).to.equal(0, 'Number of logs');
    });
    it('Can query mint transfer logs by sender', async () => {
        var _a, _b, _c, _d;
        // Send to emit another Transfer token that our filter should filter out
        await sendToken(deployer, receiver.address, BigNumber.from(1));
        const { result, waitForCurrent } = await renderWeb3Hook(() => useLogs({
            contract: token,
            event: 'Transfer',
            args: [AddressZero],
        }, {
            fromBlock: 0,
            toBlock: 'latest',
        }), { mockProvider });
        await waitForCurrent((val) => val !== undefined);
        expect(result.error).to.be.undefined;
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.value).to.not.be.undefined;
        expect((_b = result.current) === null || _b === void 0 ? void 0 : _b.error).to.be.undefined;
        expect((_d = (_c = result.current) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.length).to.equal(1, 'Number of logs');
        const log = result.current.value[0];
        expect(getAddress(log.data['from'])).to.equal(getAddress(AddressZero), 'From');
        expect(getAddress(log.data['to'])).to.equal(getAddress(deployer.address), 'To');
        expect(log.data['value']).to.equal(MOCK_TOKEN_INITIAL_BALANCE, 'Amount');
    });
    it('Can query mint transfer logs by receiver', async () => {
        var _a, _b, _c, _d;
        // Send to emit another Transfer token that our filter should filter out
        await sendToken(deployer, receiver.address, BigNumber.from(1));
        const { result, waitForCurrent } = await renderWeb3Hook(() => useLogs({
            contract: token,
            event: 'Transfer',
            args: [null, deployer.address],
        }, {
            fromBlock: 0,
            toBlock: 'latest',
        }), { mockProvider });
        await waitForCurrent((val) => val !== undefined);
        expect(result.error).to.be.undefined;
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.value).to.not.be.undefined;
        expect((_b = result.current) === null || _b === void 0 ? void 0 : _b.error).to.be.undefined;
        expect((_d = (_c = result.current) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.length).to.equal(1, 'Number of logs');
        const log = result.current.value[0];
        expect(getAddress(log.data['from'])).to.equal(getAddress(AddressZero), 'From');
        expect(getAddress(log.data['to'])).to.equal(getAddress(deployer.address), 'To');
        expect(log.data['value']).to.equal(MOCK_TOKEN_INITIAL_BALANCE, 'Amount');
    });
    it('We get an error when we query by un-indexed values', async () => {
        var _a, _b;
        // Send to emit another Transfer token that our filter should filter out
        await sendToken(deployer, receiver.address, BigNumber.from(1));
        const { result, waitForCurrent } = await renderWeb3Hook(() => useLogs({
            contract: token,
            event: 'Transfer',
            args: [null, null, MOCK_TOKEN_INITIAL_BALANCE],
        }, {
            fromBlock: 0,
            toBlock: 'latest',
        }), { mockProvider });
        await waitForCurrent((val) => val !== undefined);
        expect(result.error).to.be.undefined;
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.value).to.be.undefined;
        expect((_b = result.current) === null || _b === void 0 ? void 0 : _b.error).to.not.be.undefined;
    });
    it('Can query by block hash', async () => {
        var _a, _b, _c, _d;
        // Send to emit another Transfer token that our filter should filter out
        const { receipt } = await sendToken(deployer, receiver.address, BigNumber.from(1));
        const { result, waitForCurrent } = await renderWeb3Hook(() => useLogs({
            contract: token,
            event: 'Transfer',
            args: [],
        }, {
            blockHash: receipt === null || receipt === void 0 ? void 0 : receipt.blockHash,
        }), { mockProvider });
        await waitForCurrent((val) => val !== undefined);
        expect(result.error).to.be.undefined;
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.value).to.not.be.undefined;
        expect((_b = result.current) === null || _b === void 0 ? void 0 : _b.error).to.be.undefined;
        expect((_d = (_c = result.current) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.length).to.equal(1, 'Number of logs');
        const log = result.current.value[0];
        expect(getAddress(log.data['from'])).to.equal(getAddress(deployer.address), 'From');
        expect(getAddress(log.data['to'])).to.equal(getAddress(receiver.address), 'To');
        expect(log.data['value']).to.equal(BigNumber.from(1), 'Amount');
        expect(log.blockHash).to.equal(receipt === null || receipt === void 0 ? void 0 : receipt.blockHash, 'Block hash');
        expect(log.blockNumber).to.equal(receipt === null || receipt === void 0 ? void 0 : receipt.blockNumber, 'Block number');
        expect(log.transactionHash).to.equal(receipt === null || receipt === void 0 ? void 0 : receipt.transactionHash, 'Transaction hash');
        expect(log.transactionIndex).to.equal(receipt === null || receipt === void 0 ? void 0 : receipt.transactionIndex, 'Transaction index');
    });
});
//# sourceMappingURL=useLogs.test.js.map