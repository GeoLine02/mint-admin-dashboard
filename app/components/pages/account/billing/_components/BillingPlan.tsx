import Card from "@/app/components/ui/Card";

const BillingPlan = () => {
  return (
    <Card className="p-5 flex flex-col justify-between w-full">
      <div className="flex justify-between">
        <div>
          <div>
            <h1 className="text-2xl font-bold">Basic plan</h1>
            <p className="text-sm text-medium-gray">
              Our most popular plan for small teams.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            $20 <span className="text-sm text-medium-gray">per month</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-end">
        {/* TODO dropdown */}
        <button className="text-primary-purple">Upgrade plan</button>
      </div>
    </Card>
  );
};

export default BillingPlan;
