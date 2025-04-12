import Card from "@/app/components/ui/Card";
import React from "react";
import ImpressionChart from "./ImpressionChart";

const Impressions = () => {
  return (
    <Card className="p-[30px] 3xl:w-full">
      <h1 className="text-xl">Impression</h1>
      <ImpressionChart />
    </Card>
  );
};

export default Impressions;
