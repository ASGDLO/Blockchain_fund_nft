import { expect } from 'chai';
import { Wallet } from 'ethers';
import { useBlockMeta } from '..';
import { renderDAppHook, renderWeb3Hook, sleep, setupTestingConfig } from '../testing';
describe('useBlockMeta', () => {
    let network1;
    let config;
    const receiver = Wallet.createRandom().address;
    beforeEach(async () => {
        ;
        ({ config, network1 } = await setupTestingConfig());
        await network1.wallets[0].sendTransaction({ to: receiver, value: 100 });
    });
    it('retrieves block timestamp and difficulty', async () => {
        const { result, waitForCurrent } = await renderWeb3Hook(useBlockMeta);
        await waitForCurrent((val) => (val === null || val === void 0 ? void 0 : val.timestamp) !== undefined && (val === null || val === void 0 ? void 0 : val.difficulty) !== undefined);
        expect(result.error).to.be.undefined;
        expect(result.current.timestamp).to.be.a('date');
        expect(result.current.difficulty).to.not.be.undefined;
    });
    it('updates the block timestamp when a transaction gets mined', async () => {
        const { result, mineBlock, waitForCurrent } = await renderWeb3Hook(useBlockMeta);
        await waitForCurrent((val) => val.timestamp !== undefined && val.difficulty !== undefined);
        expect(result.error).to.be.undefined;
        const firstTimestamp = result.current.timestamp;
        await sleep(1000);
        await mineBlock();
        await waitForCurrent((val) => { var _a; return ((_a = val.timestamp) === null || _a === void 0 ? void 0 : _a.getTime()) !== (firstTimestamp === null || firstTimestamp === void 0 ? void 0 : firstTimestamp.getTime()); });
        expect(result.current.timestamp).to.be.greaterThan(firstTimestamp);
    });
    it('updates the block timestamp when a transaction gets mined qith dappHook', async () => {
        const { result, waitForCurrent } = await renderDAppHook(useBlockMeta, { config });
        await waitForCurrent((val) => val.timestamp !== undefined && val.difficulty !== undefined);
        expect(result.error).to.be.undefined;
        const firstTimestamp = result.current.timestamp;
        await sleep(1000);
        await network1.wallets[0].sendTransaction({ to: receiver, value: 100 });
        await sleep(1000);
        await waitForCurrent((val) => { var _a; return ((_a = val.timestamp) === null || _a === void 0 ? void 0 : _a.getTime()) !== (firstTimestamp === null || firstTimestamp === void 0 ? void 0 : firstTimestamp.getTime()); });
        expect(result.current.timestamp).to.be.greaterThan(firstTimestamp);
    });
});
//# sourceMappingURL=useBlockMeta.test.js.map