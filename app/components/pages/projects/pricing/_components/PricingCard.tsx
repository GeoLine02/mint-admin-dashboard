import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import PlanFeatures from "./PlanFeatures";
import { IPlanFeature, IPlanPricing } from "@/app/types/projects";
import classNames from "classnames";

interface PricingCardProps {
  id: number;
  planTitle: string;
  PlanPrice: number;
  planDuration: string;
  isCurrentPlan: boolean;
  planFeatures: IPlanFeature[];
  planButtonTitle: string;
  setPricings: React.Dispatch<React.SetStateAction<IPlanPricing[]>>;
}

const PricingCard = ({
  id,
  isCurrentPlan,
  planDuration,
  planFeatures,
  planTitle,
  PlanPrice,
  planButtonTitle,
  setPricings,
}: PricingCardProps) => {
  const handleChoosePlan = () => {
    setPricings((prevPaln) => {
      return prevPaln.map((plan) =>
        plan.id === id
          ? { ...plan, isCurrentPlan: true }
          : { ...plan, isCurrentPlan: false }
      );
    });
  };

  const buttonTitle = isCurrentPlan ? "Current plan" : planButtonTitle;

  const currentPricingButtonClasses = classNames("btn", {
    "!border !bg-white !border-medium-gray !text-medium-gray": isCurrentPlan,
  });

  const planCurrency = typeof PlanPrice === "number" ? "$" : null;

  return (
    <Card className="p-6 max-w-[600px] w-full space-y-5">
      <div>
        <h1 className="text-2xl font-bold">
          {PlanPrice}
          {planCurrency}/{planTitle}
        </h1>
        <span className="text-sm text-medium-gray">{planDuration}</span>
      </div>

      <Button
        background="primaryPurple"
        border="solid"
        textColor="white"
        title={buttonTitle}
        type="button"
        className={`w-full p-1 !border flex items-center justify-center border-primary-purple rounded-lg ${currentPricingButtonClasses}`}
        rounded="medium"
        onClick={handleChoosePlan}
      />

      <PlanFeatures features={planFeatures} />
    </Card>
  );
};

export default PricingCard;
