"use client";

import { useSearchParams } from "next/navigation";
import TransactionComp from "./_components/TransactionComp";
import type { NextPage } from "next";
import { Hash } from "viem";
import { isZeroAddress } from "~~/utils/scaffold-eth/common";

const TransactionPage: NextPage = () => {
  const searchParams = useSearchParams();
  const txHash = searchParams.get("tx");

  if (!txHash || isZeroAddress(txHash)) return null;

  return <TransactionComp txHash={txHash as Hash} />;
};

export default TransactionPage;
