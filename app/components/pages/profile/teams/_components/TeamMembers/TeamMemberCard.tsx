import Input from "@/app/components/ui/Input";
import Image, { StaticImageData } from "next/image";

interface TeamMemberCardProps {
  id: number;
  checked: boolean;
  memberName: string;
  memberEmail: string;
  memberImage: StaticImageData;
  handleCheck: (memberId: number) => void;
}

const TeamMemberCard = ({
  id,
  checked,
  memberEmail,
  memberName,
  memberImage,
  handleCheck,
}: TeamMemberCardProps) => {
  return (
    <div className="flex items-center gap-3">
      <Input
        onChange={() => handleCheck(id)}
        type="checkbox"
        name={`${memberName}_${id}`}
        checked={checked}
      />
      <div className="flex items-center gap-3">
        <Image
          alt={memberName}
          src={memberImage}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <h1 className="font-medium text-gray-900">{memberName}</h1>
          <p className="text-sm text-gray-500">{memberEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
