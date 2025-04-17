import Image, { StaticImageData } from "next/image";

interface DeviceCategoryCardProps {
  deviceIcon: StaticImageData;
  device: string;
  usagePercentage: number;
}

const DeviceCategoryCard = ({
  deviceIcon,
  device,
  usagePercentage,
}: DeviceCategoryCardProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <Image src={deviceIcon} alt={device} />
        <h1>{device}</h1>
      </div>
      <span>{usagePercentage}%</span>
    </div>
  );
};

export default DeviceCategoryCard;
