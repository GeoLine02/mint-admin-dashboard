import { BarChart } from "@mui/x-charts/BarChart";

const ImpressionChart = () => {
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu"], // X-axis labels
    datasets: [
      {
        data: [15, 5, 25, 20], // Y-axis values
      },
    ],
  };

  return (
    <BarChart
      series={chartData.datasets}
      xAxis={[{ scaleType: "band", data: chartData.labels }]} // X-axis configuration
      yAxis={[{ scaleType: "linear" }]} // Y-axis configuration
      height={250}
      width={290}
    />
  );
};

export default ImpressionChart;
