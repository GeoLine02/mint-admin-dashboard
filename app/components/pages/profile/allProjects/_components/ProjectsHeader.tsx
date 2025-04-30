"use client";
import Button from "@/app/components/ui/Button";
import ProjectOwnerPreview from "./ProjectOwnerPreview";
import projectOwnerImage from "@/public/projectOwner.png";
import { SectionsType } from "../AllProjectsSeen";

interface ProjectsHeaderProps {
  setActiveSetction: React.Dispatch<React.SetStateAction<SectionsType>>;
  activeSection: SectionsType;
}

const ProjectsHeader = ({
  setActiveSetction,
  activeSection,
}: ProjectsHeaderProps) => {
  const selectActiveSection = (section: SectionsType) => {
    setActiveSetction(section);
  };

  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:items-center justify-between">
      <ProjectOwnerPreview
        image={projectOwnerImage}
        name="Sayo Kravits"
        ownerEmail="Public Relations"
      />
      <div className="flex gap-3 items-center">
        <Button
          className={`${
            activeSection === "app" && "!bg-primary-purple !text-white"
          } flex items-center justify-center border px-11 py-2`}
          background="white"
          border="solid"
          textColor="darkPurple"
          title="App"
          type="button"
          onClick={() => selectActiveSection("app")}
          rounded="medium"
        />
        <Button
          className={`${
            activeSection === "messages" && "!bg-primary-purple !text-white"
          } flex items-center justify-center border px-11 py-2`}
          background="white"
          border="solid"
          textColor="darkPurple"
          title="Messages"
          type="button"
          onClick={() => selectActiveSection("messages")}
          rounded="medium"
        />
        <Button
          className={`${
            activeSection === "settings" && "!bg-primary-purple !text-white"
          } flex items-center justify-center border px-11 py-2`}
          background="white"
          border="solid"
          textColor="darkPurple"
          title="Settings"
          type="button"
          onClick={() => selectActiveSection("settings")}
          rounded="medium"
        />
      </div>
    </div>
  );
};

export default ProjectsHeader;
