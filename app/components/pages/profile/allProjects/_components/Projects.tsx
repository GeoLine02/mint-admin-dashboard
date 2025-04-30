import { projectsData } from "@/app/mock/profile/AllProjectsData";
import ProjectCard from "./ProjectCard";
import Card from "@/app/components/ui/Card";

const Projects = () => {
  return (
    <Card className="w-full">
      <div className="bg-[#E7E7F4] px-5 py-6 w-full">
        <h1 className="text-xl">Some of our awsome projects</h1>
      </div>
      <div className="flex flex-wrap gap-[40px] 2xl:gap-[71px] mt-[30px] p-5">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            dueDate={project.dueDate}
            participantCount={project.participantCount}
            projectImage={project.projectImage}
            projectMembers={project.projectMembers}
            projectName={project.projectName}
            projectSlogan={project.projectSlogan}
          />
        ))}
        <div className="max-w-[300px] h-[200px] w-full border border-light-gray shadow shadow-gray-100 flex items-center justify-center rounded-sm cursor-pointer">
          <h1>New Project</h1>
        </div>
      </div>
    </Card>
  );
};

export default Projects;
