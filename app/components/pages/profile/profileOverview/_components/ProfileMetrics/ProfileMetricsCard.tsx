import Card from "@/app/components/ui/Card";

interface IProfileMetricsCardProps {
  value: string | number;
  valueChange: number;
  changeType: "increase" | "decrease";
  subTitle: string;
}

const ProfileMetricsCard = ({
  changeType,
  subTitle,
  value,
  valueChange,
}: IProfileMetricsCardProps) => {
  return (
    <Card className="p-[20px] min-w-[140px] lg:min-w-[280px] 2xl:min-w-[400px]">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-[28px] font-bold">{value}</h1>
          <span
            className={`${changeType === "increase" && "text-primary-purple"}
          ${changeType === "decrease" && "text-red-500"}
          `}
          >
            {valueChange}
          </span>
        </div>
        <h2 className="text-[#89868D] text-xs lg:text-sm">{subTitle}</h2>
      </div>
    </Card>
  );
};

export default ProfileMetricsCard;
