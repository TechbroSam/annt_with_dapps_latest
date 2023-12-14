import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
  localWallet,
  trustWallet,
  zerionWallet,
  rainbowWallet,
  phantomWallet,
  en,
} from "@thirdweb-dev/react";

import { Toaster } from "react-hot-toast";
import "@/styles/main.css";
import "@/styles/style.css";


const activeChain = "binance";


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThirdwebProvider
     
      activeChain="binance"
locale={en()}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        safeWallet({
          personalWallets: [
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
            localWallet(),
            trustWallet(),
            zerionWallet(),
            rainbowWallet(),
            phantomWallet(),
          ],
        }),
        localWallet(),
        trustWallet(),
        zerionWallet(),
        rainbowWallet(),
        phantomWallet(),
      ]}
       clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    >
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
  );
}

export default MyApp;
