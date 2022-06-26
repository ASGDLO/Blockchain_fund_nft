




import { Web3Dependencies } from "@_types/hooks";
import { hookFactory as createAccountHook, hookFactory, UseAccountHook } from "@hooks/web3/useAccounts";


export type Web3Hooks = {
    useAccount: UseAccountHook;

}

export type SetupHook = {
    (d: Web3Dependencies): Web3Hooks
}


export const setupHooks: SetupHook = (deps) => {
    return {
        useAccount: createAccountHook(deps)
    }

}