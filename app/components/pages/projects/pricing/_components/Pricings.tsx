import { IPlanPricing } from "@/app/types/projects";
import PricingCard from "./PricingCard";

interface PricingProps {
  pricings: IPlanPricing[];
  setPricings: React.Dispatch<React.SetStateAction<IPlanPricing[]>>;
}

const Pricings = ({ pricings, setPricings }: PricingProps) => {
  return (
    <div className="flex gap-6">
      {pricings.map((pricing) => (
        <PricingCard
          id={pricing.id}
          setPricings={setPricings}
          key={pricing.planTitle}
          PlanPrice={pricing.PlanPrice as number}
          isCurrentPlan={pricing.isCurrentPlan}
          planButtonTitle={pricing.planButtonTitle}
          planDuration={pricing.planDuration}
          planFeatures={pricing.planFeatures}
          planTitle={pricing.planTitle}
        />
      ))}
    </div>
  );
};

export default Pricings;
