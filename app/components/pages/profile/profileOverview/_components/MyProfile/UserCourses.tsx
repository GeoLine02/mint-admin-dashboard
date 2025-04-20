import { userCoursesData } from "@/app/mock/profile/profileOverviewData";
import UserCourseCard from "./UserCourseCard";

const UserCourses = () => {
  return (
    <div>
      {userCoursesData.map((course) => (
        <UserCourseCard
          key={course.title}
          proggressValue={course.proggressValue}
          title={course.title}
        />
      ))}
    </div>
  );
};

export default UserCourses;
