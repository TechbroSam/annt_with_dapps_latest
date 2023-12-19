'use client';

import React from "react";
import Web3 from "web3";


import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

import { ethers } from "ethers";
import {
  StarIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  ArrowUturnDownIcon,
  TicketIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  useContract,
  useDisconnect,
  useContractRead,
  useContractWrite,
  useAddress,
} from "@thirdweb-dev/react";
import { currency } from "@/constants";
import toast from "react-hot-toast";



function AdminControls() {
  
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );


 // Create a Web3 instance
const web3 = new Web3();
  
  const [openModal, setOpenModal ] = useState(false);

  const [openModal2, setOpenModal2 ] = useState(false);
  
  const [newMaxTicketsPerAddress, setnewMaxTicketsPerAddress] = useState('');
  
  
  const [newTicketPriceInEther, setnewTicketPriceInEther] = useState<string>(''); 
  const [newTicketCommissionInEther, setnewTicketCommissionInEther] = useState<string>(''); 
  const [newMaxTickets, setnewMaxTickets] = useState<string>('');



  const [weiValue, setWeiValue] = useState("");
  const [weiValue2, setWeiValue2] = useState("");
  const [error, setError] = useState("");

 

 

  function onCloseModal() {
    setOpenModal(false);
    setnewMaxTicketsPerAddress('');
  }

function onCloseModal2() {
  setOpenModal2(false);

  // Clear wei values when the modal is closed
  setWeiValue('');
  setWeiValue2('');
  setnewMaxTickets('');
  setnewTicketPriceInEther('');
  setnewTicketCommissionInEther('');
}
  
  const { data: totalCommission } = useContractRead(
    contract,
    "operatorTotalCommission"
  );

  const { mutateAsync: DrawWinnerTicket } = useContractWrite(
    contract,
    "DrawWinnerTicket"
  );

  const { mutateAsync: RefundAll } = useContractWrite(contract, "RefundAll");

  const { mutateAsync: setMaxTicketsPerAddress } = useContractWrite(
    contract,
    "setMaxTicketsPerAddress"
  );

  const { mutateAsync: updateLotteryParams } = useContractWrite(
    contract,
    "updateLotteryParams"
  );

  const { mutateAsync: restartDraw } = useContractWrite(
    contract,
    "restartDraw"
  );

  const { mutateAsync: WithdrawCommission } = useContractWrite(
    contract,
    "WithdrawCommission"
  );

  const drawWinner = async () => {
    const notification = toast.loading("Picking a Lucky Winner...");

    try {
      const data = await DrawWinnerTicket({});

      toast.success("A Winner has been selected!", {
        id: notification,
      });
      console.log("contract call success", data);
    } catch (err) {
      toast.error("whoops something went wrong!", {
        id: notification,
      });

      console.error("contract call failure", err);
    }
  };

  const onWithdrawCommission = async () => {
    const notification = toast.loading("Withdrawing commission...");

    try {
      const data = await WithdrawCommission({});

      toast.success("Your Commission has been withdrawn successfully!", {
        id: notification,
      });
      console.log("contract call success", data);
    } catch (err) {
      toast.error("whoops something went wrong!", {
        id: notification,
      });

      console.error("contract call failure", err);
    }
  };

  const onRestartDraw = async () => {
    const notification = toast.loading("Restarting draw...");

    try {
      const data = await restartDraw({});

      toast.success("Draw restarted successfully!", {
        id: notification,
      });
      console.log("contract call success", data);
    } catch (err) {
      toast.error("whoops something went wrong!", {
        id: notification,
      });

      console.error("contract call failure", err);
    }
  };

  const onRefundAll = async () => {
    const notification = toast.loading("Refunding all...");

    try {
      const data = await RefundAll({});

      toast.success("All refunded successfully!", {
        id: notification,
      });
      console.log("contract call success", data);
    } catch (err) {
      toast.error("whoops something went wrong!", {
        id: notification,
      });

      console.error("contract call failure", err);
    }
  };

  

  const onsetMaxTicketsPerAddress = async () => {
    const notification = toast.loading("Setting max ticket...");

    try {
      const data = await setMaxTicketsPerAddress({
        args: [newMaxTicketsPerAddress],
      });

      toast.success("Max ticket set successfully!", {
        id: notification,
      });
      console.log("contract call success", data);
    } catch (err) {
      toast.error("whoops something went wrong!", {
        id: notification,
      });

      console.error("contract call failure", err);
    }
  };


    const updateConvertedValues = () => {
    try {
      const priceInWei = web3.utils.toWei(newTicketPriceInEther, "ether");
      const commissionInWei = web3.utils.toWei(newTicketCommissionInEther, "ether");

      setWeiValue(priceInWei);
      setWeiValue2(commissionInWei);

        setError(""); // Clear any previous error
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      throw error; // Re-throw the error to prevent proceeding with the contract execution
    }
  };



  const onupdateLotteryParams = async () => {
    const notification = toast.loading("Updating lottery...");

    try {
      // Ensure converted values are updated before calling the contract function
      updateConvertedValues();

      const data = await updateLotteryParams({
        args: [
          weiValue, // Use the converted values directly
          newMaxTickets,
          weiValue2,
        ],
      });

      toast.success("Lottery updated successfully!", {
        id: notification,
      });
      console.log("contract call success", data);
    } catch (err) {
      toast.error("Whoops, something went wrong!", {
        id: notification,
      });

      console.error("Contract call failure", err);
    }
  };

  return (
      <>
      
<div
      className="text-white text-center px-5 py-3 rounded-md 
    border-emerald-300/20 border flex flex-col items-center justify-center"
    >
      <h2 className="font-bold">Admin Controls</h2>
      <p className="mb-5">
        Total Commission to be withdrawn:{" "}
        {totalCommission &&
          ethers.utils.formatEther(totalCommission?.toString())}{" "}
        {currency}
      </p>

      <div
        className="flex flex-col space-y-2 md:flex-row 
      md:space-y-0"
      >
        <button onClick={drawWinner} className="admin-button">
          <StarIcon className="h-6 mx-auto mb-2" />
          Draw Winner
        </button>
        <button onClick={onWithdrawCommission} className="admin-button">
          <CurrencyDollarIcon className="h-6 mx-auto mb-2" />
          Withdraw Commission
        </button>
        <button onClick={onRestartDraw} className="admin-button">
          <ArrowPathIcon className="h-6 mx-auto mb-2" />
          Restart Draw
        </button>
        <button onClick={onRefundAll} className="admin-button">
          <ArrowUturnDownIcon className="h-6 mx-auto mb-2" />
          Refund All
        </button>
        <button onClick={() => setOpenModal(true)}
        className="admin-button" type="button">
          <TicketIcon className="block h-6 mx-auto mb-2" />
          Max Ticket
        </button>
        <button onClick={() => setOpenModal2(true)} className="admin-button">
          <TrashIcon className="h-6 mx-auto mb-2" />
          Change Lottery
        </button>
      </div> 

      <Modal show={openModal} size="md" position="center" dismissible onClose={onCloseModal} popup className="!p-5 ">
         <Modal.Header />
        <div className="text-lg px-5 font-semibold pb-2 text-gray-700">Set Max Tickets Per Address</div>
        <div className="flex justify-center items-center"><hr className="h-1 w-full border-slate-300"/></div>
        <Modal.Body className="px-5 pt-3">
          <div className="flex flex-col">
            <div  className="mb-5">
              <div className="mb-2 block">
                <Label htmlFor="number" value="New Max Tickets Per Address" className="text-gray-700" />
              </div>
              <TextInput
                id="newMaxTicketsPerAddress"
                placeholder="uint256"
                value={newMaxTicketsPerAddress}
                onChange={(event) => setnewMaxTicketsPerAddress(event.target.value)}
                required
                
              />
            </div>
            <div className="flex justify-end text-center mb-8">
    <button onClick={onsetMaxTicketsPerAddress} className="text-sm font-medium  dark:text-gray-300 drop-shadow-md hover:bg-green-900/80
    justify-self-end rounded-full border border-green-950 px-8 py-1 bg-green-900 text-slate-100 tracking-widest">
                Execute
            </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={openModal2} size="md" position="center" dismissible onClose={onCloseModal2} popup className="!p-5 ">
         <Modal.Header />
        <div className="text-lg px-5 font-semibold pb-2 text-gray-700">Set Lottery Params</div>
        <div className="flex justify-center items-center"><hr className="h-1 w-full border-slate-300"/></div>
        <Modal.Body className="px-5 pt-3">
          <div className="flex flex-col">
            <div  className="mb-5">
              <div className="mb-2 block">
                <Label htmlFor="number" value="New Ticket Price In Ether" className="text-gray-700" />
              </div>
              <TextInput
                id="newTicketPriceInEther"
                placeholder="uint256"
                value={weiValue || newTicketPriceInEther} // Display converted value if available, otherwise display the original value
                onChange={(event) => setnewTicketPriceInEther(event.target.value)}
                required 
              />
                
  {/* Display error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
             <div  className="mb-5">
              <div className="mb-2 block">
                <Label htmlFor="number" value="New Max Tickets Per Address" className="text-gray-700" />
              </div>
              <TextInput
                id="newMaxTickets"
                placeholder="uint256"
                value={newMaxTickets}
                onChange={(event) => setnewMaxTickets(event.target.value)}
                required
                
              />
            </div>
             <div  className="mb-5">
              <div className="mb-2 block">
                <Label htmlFor="number" value="New Ticket Commission In Ether" className="text-gray-700" />
              </div>
              <TextInput
                id="newTicketCommissionInEther"
                placeholder="uint256"
                value={weiValue2 || newTicketCommissionInEther} // Display converted value if available, otherwise display the original value
                onChange={(event) => setnewTicketCommissionInEther(event.target.value)}
                required
              />

                {/* Display error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

            </div>
            <div className="flex justify-between text-center mb-8">
    <button onClick={updateConvertedValues} className="text-sm font-medium  dark:text-gray-300 drop-shadow-md hover:bg-green-900/80
    justify-self-end rounded-full border border-green-950 px-8 py-1 bg-green-900 text-slate-100 tracking-widest">
                Convert to wei
            </button>
              <button onClick={onupdateLotteryParams} className="text-sm font-medium  dark:text-gray-300 drop-shadow-md hover:bg-green-900/80
    justify-self-end rounded-full border border-green-950 px-8 py-1 bg-green-900 text-slate-100 tracking-widest">
                Execute
            </button>
            </div>
        
          </div>
        </Modal.Body>
      </Modal>

   </div>

    </>
    
    
  );
}

export default AdminControls;
