import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  changeBtnBgColor: string;
  changeBtnTextColor: string;
  subText: string;
}

const MetricCard = ({
  change,
  changeType,
  title,
  value,
  changeBtnBgColor,
  changeBtnTextColor,
  subText,
}: MetricCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <h1 className="text-lg 2xl:text-xl">{title}</h1>
        <div
          style={{
            background: changeBtnBgColor,
          }}
          className="flex items-center rounded-lg p-0.5 lg:p-1"
        >
          {changeType === "increase" && (
            <KeyboardArrowUpIcon sx={{ color: changeBtnTextColor }} />
          )}
          {changeType === "decrease" && (
            <KeyboardArrowDownIcon sx={{ color: changeBtnTextColor }} />
          )}
          <span
            style={{
              color: changeBtnTextColor,
            }}
            className="font-medium"
          >
            {change}
          </span>
        </div>
      </div>
      <h1 className="text-3xl text-primary-purple">{value}</h1>
      <p className="text-[#89868D]">{subText}</p>
    </div>
  );
};

export default MetricCard;
