"use client";

import { useState } from "react";
import PaymentForm from "./_components/PaymentForm";
import { IBillingInformation } from "@/app/types/account";

const InvoiceSeen = () => {
  const [billingInfo, setBillingInfo] = useState<IBillingInformation>({
    billingAddress: "",
    cardHolderName: "",
    city: "",
    paymnetMethod: "visa",
    zipCode: "",
  });

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <PaymentForm setBillingInfo={setBillingInfo} billingInfo={billingInfo} />
    </div>
  );
};

export default InvoiceSeen;
