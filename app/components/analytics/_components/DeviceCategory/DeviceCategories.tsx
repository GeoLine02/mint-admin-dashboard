import Card from "@/app/components/ui/Card";
import DeviceCategoryCard from "./DeviceCategoryCard";
import { deviceUsageData } from "@/app/mock/analtyicsData";

const DeviceCategories = () => {
  return (
    <Card className="bg-white p-[30px] max-w-[400px] max-h-[380px] h-full w-full space-y-[30px] mb-0">
      <h1 className="text-xl font-medium">Device Category</h1>

      {deviceUsageData.map((category) => (
        <DeviceCategoryCard
          key={category.device}
          device={category.device}
          deviceIcon={category.deviceIcon}
          usagePercentage={category.usagePercentage}
        />
      ))}
    </Card>
  );
};

export default DeviceCategories;
