import SettingsIcon from "@/app/components/shared/SettingsIcon";
import HashTagCard from "./HashTagCard";
import { userTagsData } from "@/app/mock/profile/profileOverviewData";

const HashTagSets = () => {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium">Hashtag sets</h1>
          <SettingsIcon />
        </div>
      </section>
      <section className="space-y-10">
        {userTagsData.map((activity) => (
          <HashTagCard
            key={activity.title}
            title={activity.title}
            tags={activity.tags}
          />
        ))}
      </section>
    </div>
  );
};

export default HashTagSets;
