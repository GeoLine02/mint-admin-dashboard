import BasicBarChart from "@/app/components/ui/BasicBarChart";

interface ActiveUsersBarChartProps {
  chartData: number[];
}

const ActiveUsersBarChart = ({ chartData }: ActiveUsersBarChartProps) => {
  return (
    <div>
      <BasicBarChart data={chartData} width={625} height={237} />
    </div>
  );
};

export default ActiveUsersBarChart;
