"use client";

import { useEffect, useRef, useState } from "react";
import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts";
import Card from "@/app/components/ui/Card";
import HelpIcon from "@/app/components/shared/helpIcon";

const InteractionChart = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 220 });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        setDimensions({
          width,
          height: width < 600 ? 220 : 250,
        });
      }
    });

    const node = containerRef.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const xAxisData = ["25.02", "26.02", "27.02", "28.02", "29.02"];
  const messages = [50, 100, 150, 80, 120];
  const reactions = [40, 90, 130, 70, 110];
  const shares = [30, 60, 100, 50, 90];

  return (
    <Card className="p-4 w-full max-w-[700px]">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-base font-semibold">Interaction</h2>
        <HelpIcon />
      </div>
      <div ref={containerRef} className="w-full">
        {dimensions.width > 0 && (
          <LineChart
            xAxis={[{ scaleType: "point", data: xAxisData }]}
            yAxis={[{}]} // just leave it empty or customize other supported props
            series={[
              {
                id: "messages",
                label: "Messages",
                data: messages,
                color: "#8b5cf6",
              },
              {
                id: "reactions",
                label: "Reactions",
                data: reactions,
                color: "#22c55e",
              },
              { id: "shares", label: "Shares", data: shares, color: "#ec4899" },
            ]}
            width={dimensions.width}
            height={dimensions.height}
            margin={{ top: 20, bottom: 20, left: 40, right: 20 }} // adjust here
            sx={{
              [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
                strokeWidth: 1.5,
              },
              ".MuiLineElement-series-messages": {
                strokeDasharray: "4 4",
              },
              ".MuiLineElement-series-reactions": {
                strokeDasharray: "2 6",
              },
              ".MuiLineElement-series-shares": {
                strokeDasharray: "6 2",
              },
              [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]:
                {
                  fill: "#fff",
                },
              [`& .${markElementClasses.highlighted}`]: {
                stroke: "none",
              },
            }}
          />
        )}
      </div>
    </Card>
  );
};

export default InteractionChart;
