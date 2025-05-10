import Card from "@/app/components/ui/Card";
import Image from "next/image";
import UserIamge from "@/public/member4Image.png";
import Upload from "@/app/components/ui/Upload";
import withFormik from "@/app/HOC/WithFormik";
import { IPersonalInformation } from "@/app/types/account";

interface UserPhotoUplaodProps {
  userPhoto: File | null;
  setPersonalInfo: React.Dispatch<React.SetStateAction<IPersonalInformation>>;
}

const UserPhotoUplaod = ({
  userPhoto,
  setPersonalInfo,
}: UserPhotoUplaodProps) => {
  const FormikUplaod = withFormik(Upload);

  const previewUrl = userPhoto && URL.createObjectURL(userPhoto);

  const handleDeletePhoto = () => {
    setPersonalInfo((prev) => ({
      ...prev,
      image: null,
    }));
  };

  return (
    <Card className="space-y-3 w-full">
      <div className="px-6 py-4 border-b border-b-medium-gray">
        <h1 className="text-lg">Your Photo</h1>
      </div>
      <div className="flex gap-3 px-6">
        {userPhoto ? (
          <Image
            className="rounded-full"
            width={50}
            height={50}
            src={previewUrl as string}
            alt="user Image"
          />
        ) : (
          <Image
            width={50}
            height={50}
            className="rounded-full"
            src={UserIamge}
            alt="user Image"
          />
        )}
        <div>
          <h2>Edit your photo</h2>
          <div>
            <button
              type="submit"
              onClick={handleDeletePhoto}
              className="text-sm text-white bg-primary-purple px-2 py-1 rounded-md cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <FormikUplaod name="image" />
      </div>
    </Card>
  );
};

export default UserPhotoUplaod;
