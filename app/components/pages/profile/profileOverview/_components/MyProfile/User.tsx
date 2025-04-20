import Image from "next/image";
import UserImage from "@/public/userImage.png";
const User = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Image src={UserImage} alt="user image" />
      <h1 className="text-xl font-medium">Nika Wuladze</h1>
    </div>
  );
};

export default User;
