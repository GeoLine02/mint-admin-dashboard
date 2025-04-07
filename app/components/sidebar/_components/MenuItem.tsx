import React from "react";

import { SvgIconComponent } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface RouteProps {
  title: string;
  Icon: SvgIconComponent;
  isActive: boolean;
}

const SideBarMenuItem = ({ Icon, title, isActive }: RouteProps) => {
  return (
    <div className="flex items-center gap-2 w-full">
      {isActive && (
        <div className="bg-primary-purple w-1.5 h-11 rounded-tr-sm rounded-br-sm"></div>
      )}
      <div className="flex items-center justify-between bg-active-purple gap-2 p-2 rounded-md cursor-pointer w-full">
        <div className="flex items-center gap-2">
          <Icon sx={{ color: isActive ? "#6E39CB" : "#3A3541" }} />
          <span
            className={`${isActive ? "text-primary-purple" : "text-[#3A3541]"}`}
          >
            {title}
          </span>
        </div>
        <KeyboardArrowUpIcon sx={{ color: isActive ? "#6E39CB" : "#3A3541" }} />
      </div>
    </div>
  );
};

export default SideBarMenuItem;
