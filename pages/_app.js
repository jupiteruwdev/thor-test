import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { UseWalletProvider } from 'use-wallet'

function MyApp({ Component, pageProps }) {
  return (
    <UseWalletProvider chainId={1}>
      <Component {...pageProps} />
    </UseWalletProvider>
  )
}

export default MyApp
