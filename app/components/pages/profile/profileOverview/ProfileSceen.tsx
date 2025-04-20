import Actions from "./_components/Actions/Actions";
import AgeRangeChart from "./_components/AgeRange/AgeRangeChart";
import BestTimeChart from "./_components/BestTime/BestTImeChart";
import FollowersChart from "./_components/Followers/FollowersChart";
import GenderChart from "./_components/Gender/GenderChart";
import InteractionChart from "./_components/Interaction/InteractionChart";
import MyProfile from "./_components/MyProfile/MyProfile";
import ProfileMetrics from "./_components/ProfileMetrics/ProfileMetrics";

const ProfileScreen = () => {
  return (
    <div className="flex flex-col 2xl:flex-row gap-5 w-full pb-6 h-full">
      <div className="flex-1 flex flex-col gap-5">
        <ProfileMetrics />

        <div className="flex flex-col lg:flex-row gap-5 w-full">
          <div className="flex-1">
            <FollowersChart />
          </div>
          <div className="lg:w-[300px] w-full">
            <Actions />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 w-full">
          <InteractionChart />
          <BestTimeChart />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 w-full">
          <GenderChart />
          <AgeRangeChart />
        </div>
      </div>

      <div className="2xl:w-[350px] w-full h-full">
        <MyProfile />
      </div>
    </div>
  );
};

export default ProfileScreen;
