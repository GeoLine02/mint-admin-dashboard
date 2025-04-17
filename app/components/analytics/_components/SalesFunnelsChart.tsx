"use client";

import { useEffect, useRef, useState } from "react";
import { LineChart } from "@mui/x-charts";
import Card from "../../ui/Card";

const SalesFunnelsChart = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 220 });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        setDimensions({
          width,
          height: width < 600 ? 220 : 250, // slight bump for desktop
        });
      }
    });

    const node = containerRef.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const xAxisData = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  ];
  const data = [
    48230, 17563, 29124, 54503, 36718, 11324, 22095, 59301, 8074, 44060, 32894,
    13427, 57810, 26475, 4998, 38890,
  ];

  return (
    <Card className="p-[30px] w-full !max-w-none">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-[20px] font-medium">Sales Funnel</h2>
      </div>
      <div ref={containerRef} className="w-full">
        {dimensions.width > 0 && (
          <LineChart
            xAxis={[{ data: xAxisData }]}
            series={[
              {
                data: data,
                area: true,
                showMark: false,
                color: "#7E22CE",
              },
            ]}
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
            width={dimensions.width}
            height={dimensions.height}
            margin={{ top: 20, bottom: 20, left: 50, right: 20 }}
          />
        )}
      </div>
    </Card>
  );
};

export default SalesFunnelsChart;
