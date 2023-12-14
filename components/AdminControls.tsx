import React from "react";
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

  let newMaxTicketsPerAddress: number;

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

  let newTicketPriceInEther: number;
  let newMaxTickets: number;
  let newTicketCommissionInEther: number;

  const onupdateLotteryParams = async () => {
    const notification = toast.loading("Updating lottery...");

    try {
      const data = await updateLotteryParams({
        args: [
          newTicketPriceInEther,
          newMaxTickets,
          newTicketCommissionInEther,
        ],
      });

      toast.success("Lottery updated successfully!", {
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

  return (
    <div
      className="text-white text-center px-5 py-3 rounded-md 
    border-emerald-300/20 border"
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
        <button onClick={onsetMaxTicketsPerAddress} className="admin-button">
          <TicketIcon className="h-6 mx-auto mb-2" />
          Max Ticket
        </button>
        <button onClick={onupdateLotteryParams} className="admin-button">
          <TrashIcon className="h-6 mx-auto mb-2" />
          Change Lottery
        </button>
      </div>
    </div>
  );
}

export default AdminControls;
