"use client";

import { useEffect, useRef, useState } from "react";
import { BarChart } from "@mui/x-charts";
import HelpIcon from "@/app/components/shared/helpIcon";

const AgeRangeChart = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [dataType, setDataType] = useState<"all" | "men" | "woomen">("all");

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

  const ageGroups = [
    "13-17",
    "18-24",
    "25-34",
    "35-44",
    "45-54",
    "55-64",
    "65-74+",
  ];
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];

  return (
    <div className="w-full p-6 bg-white rounded-xl shadow" ref={containerRef}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-md font-semibold text-gray-800">Age Range</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDataType("all")}
            className={`px-3 py-1 text-sm rounded ${
              dataType === "all"
                ? "bg-primary-purple text-white"
                : "bg-primary-purple opacity-60 text-white hover:bg-primary-purple duration-300 transition-all"
            }`}
          >
            All
          </button>
          <button
            className={`px-3 py-1 text-sm rounded ${
              dataType === "men"
                ? "bg-primary-purple text-white"
                : "bg-primary-purple opacity-60 text-white hover:bg-primary-purple duration-300 transition-all"
            }`}
          >
            Men
          </button>
          <button
            className={`px-3 py-1 text-sm rounded ${
              dataType === "woomen"
                ? "bg-primary-purple text-white"
                : "bg-primary-purple opacity-60 text-white hover:bg-primary-purple duration-300 transition-all"
            }`}
          >
            Woomen
          </button>
          <HelpIcon />
        </div>
      </div>

      <BarChart
        height={300}
        width={width}
        series={[
          {
            data: pData,
            label: "pv",
            id: "pvId",
            color: "#6E39CB", // purple for uv
          },
          {
            data: uData,
            label: "uv",
            id: "uvId",
            color: "#D3BBFE",
          },
        ]}
        xAxis={[{ data: ageGroups, scaleType: "band" }]}
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
        slotProps={{
          bar: {
            clipPath: "inset(0% round 9999px 9999px 0px 0px)", // round top corners only
            style: {
              borderRadius: "100%", // fallback
            },
          },
        }}
      />
    </div>
  );
};

export default AgeRangeChart;
