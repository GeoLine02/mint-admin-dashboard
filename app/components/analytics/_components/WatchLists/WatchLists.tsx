"use client";

import { useEffect, useRef, useState } from "react";
import { LineChart } from "@mui/x-charts";
import Card from "@/app/components/ui/Card";

const WatchListsChart = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 240 });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        setDimensions({
          width,
          height: width < 600 ? 220 : 285,
        });
      }
    });

    const node = containerRef.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const xLabels = [
    "Mar 1",
    "Mar 2",
    "Mar 3",
    "Mar 4",
    "Mar 5",
    "Mar 6",
    "Mar 7",
    "Mar 8",
    "Mar 9",
    "Mar 10",
  ];

  const pData = [450, 600, 720, 680, 790, 840, 700, 850, 880, 920];
  const uData = [300, 400, 510, 450, 560, 600, 590, 620, 640, 700];

  return (
    <Card className="p-6 w-full max-h-[358px] !max-w-none">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">WatchLists</h2>
      </div>
      <div ref={containerRef} className="w-full">
        {dimensions.width > 0 && (
          <LineChart
            xAxis={[{ scaleType: "point", data: xLabels }]}
            series={[
              { data: pData, label: "Watch Time", color: "#7C3AED" },
              { data: uData, label: "Unique Viewers", color: "#22C55E" },
            ]}
            width={dimensions.width}
            height={dimensions.height}
            margin={{ top: 20, bottom: 50, left: 40, right: 20 }}
          />
        )}
      </div>
    </Card>
  );
};

export default WatchListsChart;
