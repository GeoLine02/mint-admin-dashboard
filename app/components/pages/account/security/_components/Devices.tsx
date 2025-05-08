import Button from "@/app/components/ui/Button";
import DeviceCard from "./DeviceCard";
import Card from "@/app/components/ui/Card";
import { IConnectedDevice } from "@/app/types/security";
import { useState } from "react";

interface DevicesProps {
  setConnectedDevices: React.Dispatch<React.SetStateAction<IConnectedDevice[]>>;
  connectedDevices: IConnectedDevice[];
}

const Devices = ({ connectedDevices, setConnectedDevices }: DevicesProps) => {
  const handleDisconnetAllDevies = () => {
    setConnectedDevices((prev) =>
      prev.map((device: IConnectedDevice) => ({
        ...device,
        connected: false,
      }))
    );
  };
  const [menuOpenDeviceId, setMenuOpenDeviceId] = useState<number | null>(null);

  const handleToggleMenu = (deviceId: number) => {
    setMenuOpenDeviceId((prevId) => (prevId === deviceId ? null : deviceId));
  };

  return (
    <Card className="space-y-5 p-5 w-full xl:max-w-[30%]">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Devices</h1>
        <p className="text-medium-gray">
          The Last Pass password generator creates random passwords based on
          parameters set by you.
        </p>
        <Button
          className="flex items-center justify-center max-w-[200px] p-2"
          background="primaryPurple"
          border="none"
          textColor="white"
          title="Sign out from all devices"
          type="button"
          rounded="medium"
          onClick={handleDisconnetAllDevies}
        />
      </div>
      <div className="space-y-5">
        {connectedDevices.map((device) => (
          <DeviceCard
            menuOpenDeviceId={menuOpenDeviceId}
            handleToggleMenu={handleToggleMenu}
            key={device.id}
            device={device}
            setConnectedDevices={setConnectedDevices}
          />
        ))}
      </div>
    </Card>
  );
};

export default Devices;
