import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";

import { Toaster } from "react-hot-toast";
import "@/styles/main.css";
import "@/styles/style.css";


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThirdwebProvider
     
      activeChain="binance"

       supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect({
          projectId: "YOUR_PROJECT_ID",
        }),
      ]}
      clientId="3800ea8bf1b00dc00d5127c441c11b11"
      
    
    >
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
  );
}

export default MyApp;
