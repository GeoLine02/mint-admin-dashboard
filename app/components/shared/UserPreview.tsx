import Image, { StaticImageData } from "next/image";

interface UserPReviewProps {
  image: StaticImageData;
  name: string;
  email: string;
}

const UserPreview = ({ email, image, name }: UserPReviewProps) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={image} alt="user image" />
      <div>
        <h1>{name}</h1>
        <span>{email}</span>
      </div>
    </div>
  );
};

export default UserPreview;
