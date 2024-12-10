import HeaderBox from "@/components/HeaderBox";
import PaymentTransferForm from "@/components/PaymentTransferForm";
import { getAccounts } from "@/lib/__actions/bank.actions";
import { getLoggedInUser } from "@/lib/__actions/user.actions";
import React from "react";

const PaymentTransfer = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  if (!accounts) return;

  const accountsData = accounts?.data;

  return (
    <section className='payment-transfer'>
      <HeaderBox
        title='Payment Transfer'
        subText='Please provide any specific details or notes related to the payment transfer'
      />
      <section className='size-full pt-5'>
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  );
};

export default PaymentTransfer;
