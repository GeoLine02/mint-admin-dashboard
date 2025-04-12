"use client";

import Card from "@/app/components/ui/Card";
import { useTheme, useMediaQuery } from "@mui/material";
import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts";

const SalesByAge = () => {
  const yLabels = [
    "10 to 15",
    "15 to 20",
    "20 to 25",
    "25 to 30",
    "30 to 35",
    "35 to 40",
    "40 to 45",
    "45 to 50",
    "50 to 55",
    "55 to 60",
    "60 to 65",
  ]; // Adjusted to match data length

  const xLabels = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300];

  const data = [10, 25, 20, 35, 18, 40, 20, 24, 15, 30, 10];

  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.down("xl")); // lg = 1200px

  const width = isLaptop ? 780 : 1100;
  const height = isLaptop ? 350 : 400;

  return (
    <Card className="space-y-[30px] p-[30px] w-full">
      <h1 className="text-xl text-primary-gray">Sales by age</h1>
      <div className="overflow-x-auto w-full">
        <div className={`min-w-[${width}px]`}>
          <LineChart
            width={width}
            height={height}
            series={[{ type: "line", data: data }]}
            xAxis={[
              {
                scaleType: "point",
                data: xLabels,
                labelStyle: { fontSize: "12px" }, // Adjust label size
              },
            ]}
            yAxis={[
              {
                scaleType: "linear",
                labelStyle: { fontSize: "12px" }, // Adjust label size
                data: yLabels,
              },
            ]}
            sx={{
              [`& .${lineElementClasses.root}`]: {
                stroke: "#6E39CB", // Line color
                strokeWidth: 2, // Line width
              },
              [`& .${markElementClasses.root}`]: {
                stroke: "#6E39CB", // Mark border color
                fill: "#6E39CB", // Mark fill color
                scale: "0.6",
                strokeWidth: 2, // Mark border width
              },
            }}
          />
        </div>
      </div>
    </Card>
  );
};

export default SalesByAge;
