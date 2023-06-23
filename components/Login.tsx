import React from 'react'
import Head from 'next/head'
import { useMetamask} from '@thirdweb-dev/react'

import { ConnectWallet } from "@thirdweb-dev/react";




function Login() {
  const connectWithMetamask = useMetamask();
  

  return (
    <div className="bg-[#091b18] min-h-screen flex flex-col 
    items-center justify-center text-center">

        <div className="flex flex-col items-center mb-10">
            <img
            className="h-56 w-56 mb-10"
             src="/lottery_lg-01.png"
             alt="freepik.com"
            />
            <h1 className="text-6xl text-white font-bold">THE ANNT DRAW</h1>
            <h2 className="text-white">Get Started By Connecting to your Wallet</h2>
            <ConnectWallet className="connect"
              />
            
       
        </div>
          <Head>
            <title>ANNT Draw</title>
           <link rel="icon" href="favicon.png" />
          </Head>
      </div>
    
  );
  
};

export default Login;