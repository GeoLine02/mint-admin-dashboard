import { actionsData } from "@/app/mock/profile/profileOverviewData";
import ActionCard from "./ActionCard";
import Card from "@/app/components/ui/Card";
import HelpIcon from "@/app/components/shared/helpIcon";

const Actions = () => {
  return (
    <Card className="p-[30px] w-full space-y-[20px] max-w-none 2xl:max-w-[300px]">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium">Actions</h1>
        <HelpIcon />
      </div>
      {actionsData.map((action) => (
        <ActionCard
          key={action.actionName}
          actionName={action.actionName}
          actionValue={action.actionValue}
        />
      ))}
    </Card>
  );
};

export default Actions;
