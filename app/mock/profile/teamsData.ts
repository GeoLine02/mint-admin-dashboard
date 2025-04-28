import { StaticImageData } from "next/image";
import Member1Image from "@/public/member1Image.png";
import Member2Image from "@/public/member2Image.png";
import Member3Image from "@/public/member3Image.png";
import Member4Image from "@/public/member4Image.png";
import Member5Image from "@/public/member5Image.png";

export interface ITeamMember {
  id: number;
  memberName: string;
  memberEmail: string;
  memberRole: string;
  memberImage: StaticImageData;
  checked: boolean;
}

export const teamMembersData: ITeamMember[] = [
  {
    id: 1,
    memberName: "Oliver Rhye",
    memberEmail: "Oliva@gmail.com",
    memberRole: "Admin",
    memberImage: Member1Image,
    checked: false,
  },
  {
    id: 2,
    memberName: "Phoenix Baker",
    memberEmail: "Phoenix@gmail.com",
    memberRole: "Admin",
    memberImage: Member2Image,
    checked: false,
  },
  {
    id: 3,
    memberName: "Lana Steiner",
    memberEmail: "Lana@gmail.com",
    memberRole: "Admin",
    memberImage: Member3Image,
    checked: false,
  },
  {
    id: 4,
    memberName: "Demi Wikinson",
    memberEmail: "Demi@gmail.com",
    memberRole: "Admin",
    memberImage: Member4Image,
    checked: false,
  },
  {
    id: 5,
    memberName: "Candice Wu",
    memberEmail: "Candice@gmail.com",
    memberRole: "Admin",
    memberImage: Member5Image,
    checked: false,
  },
];
