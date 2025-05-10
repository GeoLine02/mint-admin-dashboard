import { IPlanFeature } from "@/app/types/projects";
import PlanFeatureCard from "./PlanFeatureCard";

interface PlanFeaturesProps {
  features: IPlanFeature[];
}

const PlanFeatures = ({ features }: PlanFeaturesProps) => {
  return (
    <div className="space-y-5">
      {features.map((feature) => (
        <PlanFeatureCard
          key={feature.id}
          featureTitle={feature.featureTitle}
          isAvailable={feature.isAvailable}
        />
      ))}
    </div>
  );
};

export default PlanFeatures;
