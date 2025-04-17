import { metricsData } from "@/app/mock/analtyicsData";
import MetricCard from "../MetricCard";
import Card from "@/app/components/ui/Card";

const Withdraw = () => {
  return (
    <Card className="flex items-center justify-between p-[30px] w-full">
      {metricsData.map((metric) => (
        <div key={metric.title}>
          <MetricCard
            change={metric.change}
            changeBtnBgColor={metric.changeBtnBgColor}
            changeBtnTextColor={metric.changeBtnTextColor}
            changeType={metric.changeType}
            title={metric.title}
            value={metric.value}
            subText={metric.subText}
          />
          <div className="border-r border-light-gray px-3 border-dashed h-full"></div>
        </div>
      ))}
    </Card>
  );
};

export default Withdraw;
