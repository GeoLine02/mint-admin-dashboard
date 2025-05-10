"use client";

import { useState } from "react";
import NewProjectForm from "./_components/NewProjectForm";
import { INewProjectValues } from "@/app/types/projects";

const NewProjectSeen = () => {
  const [newProjectValues, setNewProjectValues] = useState<INewProjectValues>({
    endDate: "",
    image: null,
    projectName: "",
    projectTags: "",
    projectTitle: "",
    repositoryLink: "",
    startDate: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-center">
      <NewProjectForm
        setIsSuccess={setIsSuccess}
        newProjectValues={newProjectValues}
        setNewProjectValues={setNewProjectValues}
      />
    </div>
  );
};

export default NewProjectSeen;
