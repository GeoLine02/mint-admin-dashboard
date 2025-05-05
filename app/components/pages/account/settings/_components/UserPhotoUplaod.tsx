import Card from "@/app/components/ui/Card";
import Image from "next/image";
import UserIamge from "@/public/member4Image.png";
import Upload from "@/app/components/ui/Upload";
const UserPhotoUplaod = () => {
  return (
    <Card className="space-y-3 w-full ">
      <div className="px-6 py-4 border-b border-b-medium-gray">
        <h1 className="text-lg">Your Photo</h1>
      </div>
      <div className="flex gap-3 px-6">
        <Image className="w-7 aspect-square" src={UserIamge} alt="user Image" />
        <div>
          <h2>Edit your photo</h2>
          <div className="space-x-2">
            <span className="text-sm text-medium-gray">Delete</span>
            <span className="text-sm text-primary-purple">Update</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <Upload />
      </div>
    </Card>
  );
};

export default UserPhotoUplaod;
