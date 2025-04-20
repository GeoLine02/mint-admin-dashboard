import Card from "@/app/components/ui/Card";
import PeopleIcon from "@mui/icons-material/People";
import User from "./User";
import UserCourses from "./UserCourses";
import HashTagSets from "./HashTagSets";
import SettingsIcon from "@/app/components/shared/SettingsIcon";

const MyProfile = () => {
  return (
    <Card className="p-[30px] !w-full space-y-10 h-full">
      <section className="flex justify-between items-center">
        <h1 className="text-xl font-medium">My profile</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="text-[#89868D] hover:text-primary-purple hover:bg-active-purple p-[5px] rounded-[10px] w-9 aspect-square text-center transition-all duration-300 cursor-pointer">
              <PeopleIcon />
            </div>
            <div className="text-[#89868D] hover:text-primary-purple hover:bg-active-purple p-[5px] rounded-[10px] w-9 aspect-square text-center transition-all duration-300 cursor-pointer">
              <SettingsIcon />
            </div>
          </div>
        </div>
      </section>

      <User />

      <UserCourses />

      <HashTagSets />
    </Card>
  );
};

export default MyProfile;
