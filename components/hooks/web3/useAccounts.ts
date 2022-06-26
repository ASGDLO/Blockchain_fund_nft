




import { CryptoHookFactory } from "@_types/hooks"
import { useEffect } from "react"
import useSWR from "swr"
import { useAccount } from "."

type UseAccountResponse = {
    connect: () => void
    isLoading : boolean;
    isInstalled : boolean;
}

type AccountHookFactory = CryptoHookFactory<string, UseAccountResponse>

export type UseAccountHook = ReturnType<AccountHookFactory>

export const hookFactory: AccountHookFactory = ({provider, ethereum, isLoading}) => () => {

    const {data, mutate, isValidating, ...swr} = useSWR(

        provider ? "web3/useAccounts" : null,  //if provider is not specified use default

        async () => { 
            
            const accounts = await provider!.listAccounts();
            const account = accounts[0];

            if (!account) {
                throw "Can not retreive accounts! please connect to your web3 wallet."
            }
            return account;
        }, {
            revalidateOnFocus: false
        }
    )

    useEffect(() => {
        ethereum?.on("accountsChanged", handleAccountsChanged);
        return () => {
            ethereum?.removeListener("accountsChanged", handleAccountsChanged);
        }
    })

    const handleAccountsChanged = (...args: unknown[]) => {   
        const accounts = args[0] as string[];
        if (accounts.length === 0) {
            console.error("please, connect to web3 wallet");
        } else if (accounts[0] !== data) {
            mutate(accounts[0]);
            // alert("account has changed");
            // console.log(accounts[0]);
        }
    }

    
    

    const connect = () => async () => {
        try {
            ethereum?.request({ method: "eth_requestAccounts"})
         } catch(e){
            console.error(e);

            }
        
    }

    return {
        ...swr,
        data,
        isValidating,
        isLoading: isLoading || isValidating,
        isInstalled: ethereum?.isMetaMask || false,
        
        mutate,
        connect
    };
}