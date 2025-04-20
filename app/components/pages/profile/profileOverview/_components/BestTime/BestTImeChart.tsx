"use client";

import { useEffect, useRef, useState } from "react";
import { BarChart } from "@mui/x-charts";
import Card from "@/app/components/ui/Card";
import HelpIcon from "@/app/components/shared/helpIcon";

const BestTimeChart = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 250 });

  const [dataTimeType, setDataTimeType] = useState<"days" | "hours">("days");

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        setDimensions({
          width,
          height: width < 600 ? 200 : 250,
        });
      }
    });

    const node = containerRef.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  // Labels
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = ["8AM", "10AM", "12PM", "2PM", "4PM", "6PM", "8PM"];

  // Data
  const daysData = [3400, 2900, 4100, 3700, 3200, 4800, 5100];
  const hoursData = [1200, 1800, 1500, 2300, 2700, 2200, 1900];

  const xLabels = dataTimeType === "days" ? days : hours;
  const chartData = dataTimeType === "days" ? daysData : hoursData;

  return (
    <Card className="p-6 w-full">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Best Time</h2>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setDataTimeType("days")}
            className={`px-3 py-1 text-sm rounded ${
              dataTimeType === "days"
                ? "bg-primary-purple text-white"
                : "bg-primary-purple opacity-70 text-white hover:bg-primary-purple duration-300 transition-all"
            }`}
          >
            Days
          </button>
          <button
            onClick={() => setDataTimeType("hours")}
            className={`px-3 py-1 text-sm rounded ${
              dataTimeType === "hours"
                ? "bg-primary-purple text-white"
                : "bg-primary-purple opacity-60 text-white hover:bg-primary-purple duration-300 transition-all"
            }`}
          >
            Hours
          </button>
          <HelpIcon />
        </div>
      </div>

      <div ref={containerRef} className="w-full">
        {dimensions.width > 0 && (
          <BarChart
            xAxis={[{ scaleType: "band", data: xLabels }]}
            series={[
              {
                data: chartData,
                color: "#6e39cb",
              },
            ]}
            width={dimensions.width}
            height={dimensions.height}
            margin={{ top: 20, bottom: 30, left: 20, right: 20 }}
            slotProps={{
              bar: {
                clipPath: "inset(0% round 9999px 9999px 0px 0px)", // round top corners only
                style: {
                  borderRadius: "100%", // fallback
                },
              },
            }}
          />
        )}
      </div>
    </Card>
  );
};

export default BestTimeChart;
