"use client";

import { pricingData } from "@/app/mock/pricing/pricingData";
import { useState } from "react";
import Pricings from "./_components/Pricings";

const PricingSeen = () => {
  const [pricings, setPricings] = useState(pricingData);

  return (
    <div>
      <Pricings setPricings={setPricings} pricings={pricings} />
    </div>
  );
};

export default PricingSeen;
