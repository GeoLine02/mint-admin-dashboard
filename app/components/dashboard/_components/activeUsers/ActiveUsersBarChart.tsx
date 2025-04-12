"use client";

import BasicBarChart from "@/app/components/ui/BasicBarChart";
import { useTheme, useMediaQuery } from "@mui/material";
interface ActiveUsersBarChartProps {
  chartData: number[];
}

const ActiveUsersBarChart = ({ chartData }: ActiveUsersBarChartProps) => {
  // Inside your component
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.down("xl"));

  const chartWidth = isLaptop ? 625 : 1000;
  const chartHeight = isLaptop ? 237 : 450;
  return (
    <div className="overflow-x-auto w-full">
      <div className={`min-w-[${chartWidth}px]`}>
        <BasicBarChart
          data={chartData}
          width={chartWidth}
          height={chartHeight}
        />
      </div>
    </div>
  );
};

export default ActiveUsersBarChart;
