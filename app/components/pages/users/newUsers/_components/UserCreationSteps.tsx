import Card from "@/app/components/ui/Card";
import { IUserCreationSteps, UserCreationStepType } from "@/app/types/user";
import StepCircle from "./StepCircle";

interface UserCreationStepsProps {
  currentSetep: UserCreationStepType;
  steps: IUserCreationSteps[];
}

const UserCreationSteps = ({ currentSetep, steps }: UserCreationStepsProps) => {
  return (
    <Card className="p-6 w-full flex items-center justify-between">
      {steps.map((step) => (
        <StepCircle
          stepTitle={step.title}
          key={step.accessorKey}
          isCurrentStep={currentSetep === step.accessorKey}
        />
      ))}
    </Card>
  );
};

export default UserCreationSteps;
