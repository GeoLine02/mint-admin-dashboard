import MemberIcon from "@/public/person3Icon.png";
import Image from "next/image";

const KanbanHeader = () => {
  return (
    <div className="flex justify-between border-b border-medium-gray pb-9">
      <div className="space-y-1">
        <h1 className="text-xl">Overview</h1>
        <p className="text-medium-gray text-sm">
          Edit or modify all card as you want
        </p>
      </div>
      <div>
        <h1 className="text-xl">Team Members:</h1>
        <div className="flex items-center">
          <Image
            className="w-11 aspect-square rounded-full"
            src={MemberIcon}
            alt="member image"
          />
          <Image
            className="w-11 aspect-square rounded-full"
            src={MemberIcon}
            alt="member image"
          />
          <Image
            className="w-11 aspect-square rounded-full"
            src={MemberIcon}
            alt="member image"
          />
          <Image
            className="w-11 aspect-square rounded-full"
            src={MemberIcon}
            alt="member image"
          />
          <Image
            className="w-11 aspect-square rounded-full"
            src={MemberIcon}
            alt="member image"
          />
        </div>
      </div>
    </div>
  );
};

export default KanbanHeader;
