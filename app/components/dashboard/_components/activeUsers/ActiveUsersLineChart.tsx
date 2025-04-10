import BasicLineChart from "@/app/components/ui/BasicLineChart";

interface ActiveUsersLineChartProps {
  chartData: number[];
  margin: { top: number; bottom: number; left: number; right: number };
}

const ActiveUsersLineChart = ({
  chartData,
  margin,
}: ActiveUsersLineChartProps) => {
  const xLabels = ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F"];

  return (
    <div>
      <BasicLineChart
        xLabels={xLabels}
        margin={margin}
        data={chartData}
        height={101}
        width={147}
        hideAxes={{ y: true }}
      />
    </div>
  );
};

export default ActiveUsersLineChart;
