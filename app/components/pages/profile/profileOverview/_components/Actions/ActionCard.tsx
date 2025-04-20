interface ActionCardProps {
  actionName: string;
  actionValue: number;
}

const ActionCard = ({ actionName, actionValue }: ActionCardProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1>{actionName}</h1>
      <h1 className="text-primary-purple">{actionValue}</h1>
    </div>
  );
};

export default ActionCard;
