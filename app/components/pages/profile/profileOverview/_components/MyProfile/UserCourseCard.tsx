import LinearProgressBar from "@/app/components/ui/LinearProgressBar";

interface UserCourseCardProps {
  title: string;
  proggressValue: number;
}

const UserCourseCard = ({ proggressValue, title }: UserCourseCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-medium">{title}</h1>
      <div className="flex items-center justify-between">
        <h1 className="text-primary-purple">{proggressValue}%</h1>
        <LinearProgressBar
          height={10}
          value={proggressValue}
          className={"w-[200px] rounded-full"}
          totalBarColor="#DECCFE"
          valueColor="#6e39cb"
        />
      </div>
    </div>
  );
};

export default UserCourseCard;
