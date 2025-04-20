import { profileMetrics } from "@/app/mock/profile/profileOverviewData";
import ProfileMetricsCard from "./ProfileMetricsCard";

const ProfileMetrics = () => {
  return (
    <div className="flex items-center gap-5">
      {profileMetrics.map((metricData) => (
        <ProfileMetricsCard
          key={metricData.subTitle}
          value={metricData.value}
          subTitle={metricData.subTitle}
          changeType={metricData.changeType}
          valueChange={metricData.valueChange}
        />
      ))}
    </div>
  );
};

export default ProfileMetrics;
