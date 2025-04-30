import Image, { StaticImageData } from "next/image";
interface ProjectOwnerPreview {
  image: StaticImageData;
  name: string;
  ownerEmail: string;
}
const ProjectOwnerPreview = ({
  image,
  name,
  ownerEmail,
}: ProjectOwnerPreview) => {
  return (
    <div className="flex items-center gap-3">
      <Image className="w-[40px]" src={image} alt={name} />
      <div className="space-y-1">
        <h1>{name}</h1>
        <span>{ownerEmail}</span>
      </div>
    </div>
  );
};

export default ProjectOwnerPreview;
