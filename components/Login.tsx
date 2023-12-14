import React from "react";
import Head from "next/head";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import Image from "next/image";

function Login() {

  return (
    <div
      className="bg-[#091b18] min-h-screen flex flex-col 
    items-center justify-center text-center"
    >
      <div className="flex flex-col items-center mb-10">
        <Image
          className="h-56 w-56 mb-5"
          src="/lottery_lgnew.png"
          alt=""
          width="224"
          height="224"
        />
        <h1 className="text-6xl text-white font-bold">THE ANNT DRAW</h1>
        <h2 className="text-white">Get Started By Connecting to your Wallet</h2>
        <ThirdwebProvider
          activeChain="binance"
          clientId="3800ea8bf1b00dc00d5127c441c11b11"
          
          supportedWallets={[
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
          ]}
        >
          <ConnectWallet className="connect" modalSize="compact" />;
        </ThirdwebProvider>
      </div>
      <Head>
        <title>ANNT Draw | Stop, when the fun stops</title>
      </Head>
    </div>
  );
}

export default Login;
