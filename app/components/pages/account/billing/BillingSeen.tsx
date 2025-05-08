import BillingHeader from "./_components/BillingHeader";
import BillingPlan from "./_components/BillingPlan";
import PaymentMethod from "./_components/PaymentMethod";

const BillingSeen = () => {
  return (
    <div className="space-y-5">
      <BillingHeader />
      <div className="flex gap-5">
        <BillingPlan />
        <PaymentMethod />
      </div>
    </div>
  );
};

export default BillingSeen;
