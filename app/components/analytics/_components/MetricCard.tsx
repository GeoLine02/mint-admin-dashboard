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
      {/* Top section with title and change badge */}
      <div className="flex flex-col xl:flex-row xl:items-center gap-4">
        <h2 className="text-base lg:text-lg 2xl:text-xl font-semibold max-w-[100px]">
          {title}
        </h2>

        <div
          style={{
            background: changeBtnBgColor,
          }}
          className="flex items-center rounded-lg px-2 py-1 w-fit"
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
            className="font-medium text-sm lg:text-base"
          >
            {change}
          </span>
        </div>
      </div>

      {/* Main value */}
      <div className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-primary-purple">
        {value}
      </div>

      {/* Subtitle */}
      <p className="text-sm lg:text-base text-[#89868D]">{subText}</p>
    </div>
  );
};

export default MetricCard;
