import Card from "@/app/components/ui/Card";
import { Gauge } from "@mui/x-charts";

import CircleIcon from "@mui/icons-material/Circle";
import HelpIcon from "@/app/components/shared/helpIcon";

const GenderChart = () => {
  const menPercentage = 60;
  const woomenPercentage = 100 - menPercentage;

  return (
    <Card className="p-[30px] w-full  flex flex-col items-center gap-5">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-medium">Gender</h1>
        <HelpIcon />
      </div>

      <Gauge
        width={244}
        height={128}
        value={menPercentage}
        startAngle={-90}
        endAngle={90}
        sx={{
          "& .MuiGauge-valueArc": {
            fill: "#6E39CB", // Occupied part
          },
          "& .MuiGauge-referenceArc": {
            fill: "#D3BBFE", // Empty part
          },
        }}
      />

      <div className="flex justify-between items-center w-full">
        <div className="flex gap-2 items-center">
          <CircleIcon
            sx={{
              color: "#6E39CB",
            }}
          />
          <div>
            <h1>{menPercentage}%</h1>
            <span className="text-sm text-[#89868D]">Men</span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <CircleIcon
            sx={{
              color: "#D3BBFE",
            }}
          />
          <div>
            <h1>{woomenPercentage}%</h1>
            <span className="text-sm text-[#89868D]">Woomen</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GenderChart;
