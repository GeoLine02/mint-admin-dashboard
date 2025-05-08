import Card from "@/app/components/ui/Card";
import { IConnectedDevice } from "@/app/types/security";
import clsx from "clsx";

interface DeviceContextMenuProps {
  isMenuOpen: boolean;
  device: IConnectedDevice;
  setConnectedDevices: React.Dispatch<React.SetStateAction<IConnectedDevice[]>>;
}

const DeviceContextMenu = ({
  isMenuOpen,
  device,
  setConnectedDevices,
}: DeviceContextMenuProps) => {
  const handleDisconnect = () => {
    setConnectedDevices((prevDevices) =>
      prevDevices.map((d) =>
        d.id === device.id ? { ...d, connected: false } : d
      )
    );
  };

  const handleConnect = () => {
    setConnectedDevices((prevDevices) =>
      prevDevices.map((d) =>
        d.id === device.id ? { ...d, connected: true } : d
      )
    );
  };

  const handleRemove = () => {
    setConnectedDevices((prevDevices) =>
      prevDevices.filter((dev) => dev.id !== device.id)
    );
  };

  return (
    <Card
      className={clsx(
        "menu-transition flex flex-col",
        isMenuOpen ? "menu-open" : "menu-closed"
      )}
    >
      {device.connected ? (
        <button
          onClick={handleDisconnect}
          className="p-2 cursor-pointer hover:bg-primary-purple hover:text-white"
        >
          Disconnect
        </button>
      ) : (
        <button
          onClick={handleConnect}
          className="p-2 cursor-pointer hover:bg-primary-purple hover:text-white"
        >
          Connect
        </button>
      )}
      <button
        onClick={handleRemove}
        className="p-2 hover:bg-primary-purple cursor-pointer hover:text-white"
      >
        Remove
      </button>
    </Card>
  );
};

export default DeviceContextMenu;
