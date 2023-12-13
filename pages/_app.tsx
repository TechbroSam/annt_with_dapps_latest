import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  ThirdwebProvider
} from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";
import "@/styles/main.css";
import "@/styles/style.css";


function MyApp({ Component, pageProps }: AppProps) {

  console.log("Connecting to Binance chain...");

  return (
    <ThirdwebProvider
     
      activeChain="binance"
    
    >
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
  );
}

export default MyApp;
