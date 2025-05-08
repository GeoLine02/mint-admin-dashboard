import React from "react";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import DeviceContextMenu from "./DeviceContextMenu";
import { IConnectedDevice } from "@/app/types/security";
import useOutsideClick from "@/app/hooks/useOutsideClick";

interface DeviceCardProps {
  device: IConnectedDevice;
  setConnectedDevices: React.Dispatch<React.SetStateAction<IConnectedDevice[]>>;
  handleToggleMenu: (deviceId: number) => void;
  menuOpenDeviceId: number | null;
}

const DeviceCard = ({
  device,
  setConnectedDevices,
  handleToggleMenu,
  menuOpenDeviceId,
}: DeviceCardProps) => {
  const isMenuOpen = menuOpenDeviceId === device.id;

  const ref = useOutsideClick(() => {
    if (isMenuOpen) handleToggleMenu(-1); // closes the menu
  });

  return (
    <div className="flex items-center justify-between relative">
      <div>
        <div className="flex gap-6">
          <h1 className="text-xl">{device.deviceName}</h1>
          {device.connected ? (
            <span className="p-1 px-2 bg-green-500 text-white rounded-md">
              Connected
            </span>
          ) : (
            <span className="p-1 px-2 bg-red-500 text-white rounded-md">
              Disconnected
            </span>
          )}
        </div>
        <p className="text-sm text-medium-gray">
          {device.location} at {device.time}
        </p>
      </div>
      <div className="relative" ref={ref}>
        <div onClick={() => handleToggleMenu(device.id)}>
          <MoreVertRoundedIcon className="cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute top-9 right-0 z-50">
            <DeviceContextMenu
              setConnectedDevices={setConnectedDevices}
              device={device}
              isMenuOpen={isMenuOpen}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceCard;
