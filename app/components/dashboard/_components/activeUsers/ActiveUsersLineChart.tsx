"use client";

import BasicLineChart from "@/app/components/ui/BasicLineChart";
import { useMediaQuery, useTheme } from "@mui/material";

interface ActiveUsersLineChartProps {
  chartData: number[];
  margin: { top: number; bottom: number; left: number; right: number };
}

const ActiveUsersLineChart = ({
  chartData,
  margin,
}: ActiveUsersLineChartProps) => {
  const xLabels = ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F"];

  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.down("lg")); // lg = 1200px

  const width = isLaptop ? 101 : 180;
  const height = isLaptop ? 147 : 160;

  return (
    <div>
      <BasicLineChart
        xLabels={xLabels}
        margin={margin}
        data={chartData}
        height={height}
        width={width}
        hideAxes={{ y: true }}
      />
    </div>
  );
};

export default ActiveUsersLineChart;
