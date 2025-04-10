import {
  ChartContainer,
  lineElementClasses,
  LinePlot,
  markElementClasses,
  MarkPlot,
} from "@mui/x-charts";

interface BasicLineChartProps {
  data: number[];
  width: number;
  height: number;
  margin?: { top: number; bottom: number; left: number; right: number };
  xLabels?: string[] | number[];
  yLabels?: string[] | number[];
  hideAxes?: {
    x?: boolean;
    y?: boolean;
  }; // New prop to control axis visibility
}

const BasicLineChart = ({
  data,
  height,
  width,
  margin = { top: 20, bottom: 20, left: 20, right: 20 }, // Default margin
  hideAxes = {},
  xLabels = ["Page A", "Page B", "Page C"], // Default xLabels
  yLabels = [10, 20, 30], // Default yLabels
}: BasicLineChartProps) => {
  return (
    <div>
      <ChartContainer
        width={width}
        height={height}
        margin={margin}
        series={[{ type: "line", data: data }]}
        xAxis={
          hideAxes.x
            ? undefined // Don't render xAxis if hideAxes.x is true
            : [{ scaleType: "point", data: xLabels }]
        }
        yAxis={
          hideAxes.y
            ? undefined // Don't render yAxis if hideAxes.y is true
            : [{ scaleType: "linear", data: yLabels }] // Default yAxis configuration
        }
        sx={{
          [`& .${lineElementClasses.root}`]: {
            stroke: "#6E39CB",
            strokeWidth: 2,
          },
          [`& .${markElementClasses.root}`]: {
            stroke: "#6E39CB",
            scale: "0.6",
            fill: "#fff",
            strokeWidth: 2,
          },
        }}
      >
        <LinePlot />
        <MarkPlot />
      </ChartContainer>
    </div>
  );
};

export default BasicLineChart;
