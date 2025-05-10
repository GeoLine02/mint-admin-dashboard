import Input from "@/app/components/ui/Input";
import React from "react";

interface PlanFeatureCardProps {
  isAvailable: boolean;
  featureTitle: string;
}

const PlanFeatureCard = ({
  featureTitle,
  isAvailable,
}: PlanFeatureCardProps) => {
  return (
    <div className="flex items-center gap-2">
      <Input
        className="!text-primary-purple"
        name={featureTitle}
        type="checkbox"
        checked={isAvailable}
      />
      <p className="text-medium-gray">{featureTitle}</p>
    </div>
  );
};

export default PlanFeatureCard;
