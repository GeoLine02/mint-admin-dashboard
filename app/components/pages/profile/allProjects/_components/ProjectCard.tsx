import Image, { StaticImageData } from "next/image";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

interface ProjectCardProps {
  projectImage: StaticImageData;
  projectName: string;
  projectMembers: string[];
  projectSlogan: string;
  dueDate: string;
  participantCount: number;
}

const ProjectCard = ({
  dueDate,
  projectImage,
  projectMembers,
  projectName,
  projectSlogan,
  participantCount,
}: ProjectCardProps) => {
  return (
    <div className="shadow shadow-gray-200 p-5 border-gray-100 max-w-[300px] flex flex-col gap-5">
      <div className="flex  justify-between items-center">
        <div className="flex gap-3">
          <Image src={projectImage} alt={projectName} />
          <div>
            <h1 className="text-xl">{projectName}</h1>
            <div className="flex items-center ">
              {projectMembers.map((member) => (
                <h1 className="cursor-pointer" key={member}>
                  {member}
                </h1>
              ))}
            </div>
          </div>
        </div>
        <MoreVertRoundedIcon
          sx={{
            color: "#89868D",
            cursor: "pointer",
          }}
        />
      </div>
      <p className="text-[#89868D] text-sm">{projectSlogan}</p>
      <div>
        <hr className="border-light-gray border" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="tex-lg">{participantCount}</h1>
          <span className="text-[#89868D]">Participants</span>
        </div>
        <div>
          <h1 className="text-lg">{dueDate}</h1>
          <span className="text-[#89868D]">Due date</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
