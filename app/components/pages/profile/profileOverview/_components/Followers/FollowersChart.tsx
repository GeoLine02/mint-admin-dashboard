"use client";

import { useEffect, useRef, useState } from "react";
import { LineChart } from "@mui/x-charts";
import Card from "@/app/components/ui/Card";
import CircleIcon from "@mui/icons-material/Circle";

const FollowersChart = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        setWidth(width);
      }
    });

    const node = containerRef.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const xAxisData = ["25.02", "26.02", "27.02", "28.02", "29.02"];
  const incomeData = [400000, 380000, 500000, 460000, 490000];
  const outcomeData = [200000, 320000, 420000, 390000, 450000];

  return (
    <Card className="p-6 w-full">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-md font-semibold text-gray-800">Followers</h2>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <CircleIcon sx={{ color: "#F93131", width: "15px" }} />
            <span className="text-[#F93131]">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <CircleIcon sx={{ color: "#6E39CB", width: "15px" }} />
            <span className="text-primary-purple">Outcome</span>
          </div>
        </div>
      </div>

      {/* Responsive wrapper */}
      <div ref={containerRef} className="w-full h-[220px]">
        {width > 0 && (
          <LineChart
            xAxis={[{ scaleType: "point", data: xAxisData }]}
            series={[{ data: incomeData }, { data: outcomeData }]}
            width={width}
            height={220}
            sx={{
              ".MuiChartsAxis-tickLabel": {
                fontFamily: "Lato, sans-serif",
                fontSize: 12,
              },
              ".MuiChartsLegend-root": {
                fontFamily: "Lato, sans-serif",
                fontSize: 13,
              },
              ".MuiChartsTooltip-root": {
                fontFamily: "Lato, sans-serif",
                fontSize: 12,
              },
            }}
            grid={{ horizontal: true }}
            margin={{ top: 20, bottom: 30, left: 60, right: 20 }}
          />
        )}
      </div>
    </Card>
  );
};

export default FollowersChart;
