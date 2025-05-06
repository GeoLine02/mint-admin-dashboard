"use client";

import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import Image from "next/image";
import VisaIcon from "@/public/Visa.svg";

const PaymentMethod = () => {
  return (
    <Card className="p-5 space-y-5 w-full">
      <div>
        <h1 className="text-2xl font-bold">Payment method</h1>
        <p className="text-sm text-medium-gray">
          Change how you pay for your plan.
        </p>
      </div>
      <Card className="p-5 flex justify-between items-center w-full">
        <div className="flex gap-3">
          <Image src={VisaIcon} alt="visa icon" />
          <div>
            <h1>Visa ending in 6789</h1>
            <span className="text-sm text-medium-gray">Expiry 01/2026</span>
          </div>
        </div>
        <Button
          className="px-6 py-2"
          background="primaryPurple"
          border="none"
          textColor="white"
          title="Edit"
          type="button"
          rounded="medium"
          onClick={() => {}}
        />
      </Card>
    </Card>
  );
};

export default PaymentMethod;
