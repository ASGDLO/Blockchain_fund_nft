import { createContext, FunctionComponent, useContext, useEffect, useState } from "react";
import { createDefaultState, Web3State } from "./utils";
import { ethers } from "ethers";


const Web3Context = createContext<Web3State>(createDefaultState());

interface BaseLayoutProps {
    color: string;
    children?: React.ReactNode;
  }

const Web3Provider: FunctionComponent<BaseLayoutProps> = ({children})  => {


    const [web3Api, setweb3Api] = useState<Web3State>(createDefaultState());

    useEffect(() => {
        function initWeb3() {

            const provider = new ethers.providers.Web3Provider(window.ethereum as any); 

            setweb3Api({
                ethereum: window.ethereum,
                provider,
                contract: null,
                isLoading: false
            })
        }
        initWeb3();
    }, [])

    return (
        <Web3Context.Provider value={web3Api}> 
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3() {
    return useContext(Web3Context);
}


export default Web3Provider;


