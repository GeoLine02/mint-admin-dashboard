"use client";

import { styled } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

interface LinearProgressBarProps {
  value: number;
  totalBarColor: string;
  valueColor: string;
  className: string;
  height?: number;
}

const LinearProgressBar = ({
  totalBarColor,
  value,
  valueColor,
  className,
  height,
}: LinearProgressBarProps) => {
  const StyledLinearProgressBar = styled(LinearProgress)({
    [`&.${linearProgressClasses.determinate}`]: {
      backgroundColor: totalBarColor, // Total bar color
      borderRadius: "15px",
    },
    [`&.${linearProgressClasses.determinate} > .${linearProgressClasses.bar1Determinate}`]:
      {
        backgroundColor: valueColor, // Used part color
      },
  });

  return (
    <div className={`${className}`}>
      <StyledLinearProgressBar
        style={{
          height: `${height}px`,
        }}
        variant="determinate"
        value={value}
      />
    </div>
  );
};

export default LinearProgressBar;
