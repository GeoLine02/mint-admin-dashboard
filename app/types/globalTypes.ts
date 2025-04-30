import { StaticImageData } from "next/image";

export interface IProject {
  projectImage: StaticImageData;
  projectName: string;
  projectMembers: string[];
  projectSlogan: string;
  dueDate: string;
  participantCount: number;
}

export interface IProjectithId extends IProject {
  id: number;
}
