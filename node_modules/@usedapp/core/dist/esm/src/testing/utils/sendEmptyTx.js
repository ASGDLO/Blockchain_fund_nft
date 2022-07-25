import { constants } from 'ethers';
export async function sendEmptyTx(wallet) {
    return wallet.sendTransaction({ to: constants.AddressZero });
}
//# sourceMappingURL=sendEmptyTx.js.map