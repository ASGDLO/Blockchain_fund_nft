



import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Web3Provider from '@providers/web3'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Web3Provider color={''}>
      <Component {...pageProps} />
      </Web3Provider>
    </>
  )
  
}

export default MyApp
