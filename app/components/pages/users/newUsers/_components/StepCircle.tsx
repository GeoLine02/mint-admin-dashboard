// import { UserCreationStepType } from "@/app/types/user";
import classNames from "classnames";

interface StepCircleProps {
  isCurrentStep: boolean;
  stepTitle: string;
}

const StepCircle = ({ isCurrentStep, stepTitle }: StepCircleProps) => {
  const currentStepClass = classNames("div", {
    "bg-primary-purple w-9": isCurrentStep,
    "w-5 bg-active-purple": !isCurrentStep,
  });

  return (
    <div className="flex items-center justify-center gap-1">
      <div
        className={`aspect-square rounded-full transition-all duration-200 ${currentStepClass}`}
      ></div>
      <h1 className="text-[#89868D]">{stepTitle}</h1>
    </div>
  );
};

export default StepCircle;
