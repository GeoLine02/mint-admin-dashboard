"use client";
import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";

const EarningThisMonth = () => {
  return (
    <Card className="p-[30px] flex flex-col items-center justify-center gap-4">
      <h2 className=" lg:text-xl">Your earning this month</h2>
      <h1 className="text-[40px] lg:text-[64px] font-bold text-primary-purple">
        735.2$
      </h1>
      <p>Update your payout method in settings</p>
      <Button
        background="white"
        border="solid"
        rounded="medium"
        textColor="darkPurple"
        title="Withdraw All Earnings"
        type="button"
        className="p-[10px]"
        onClick={() => {}}
      />
    </Card>
  );
};

export default EarningThisMonth;
