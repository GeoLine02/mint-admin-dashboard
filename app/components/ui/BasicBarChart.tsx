import { BarChart } from "@mui/x-charts/BarChart";

interface BasicBarChartDataProps {
  data: number[];
  width: number;
  height: number;
}

const BasicBarChart = ({ data, height, width }: BasicBarChartDataProps) => {
  return (
    <div>
      <BarChart
        series={[
          {
            data: data,
            color: "white",
          },
        ]}
        height={height}
        width={width}
        xAxis={[
          {
            data: Array.from({ length: data.length }, (_, i) => i), // hide labels
            scaleType: "band",
            tickFontSize: 1,
          },
        ]}
        margin={{ top: 10, bottom: 10, left: 40, right: 10 }}
        sx={{
          background: "linear-gradient(to right, #C2A1FD, #9154FD)", // Apply linear gradient background
          borderRadius: "8px", // Optional: Add border radius for rounded corners
          padding: "10px 15px",
        }}
      />
    </div>
  );
};

export default BasicBarChart;
