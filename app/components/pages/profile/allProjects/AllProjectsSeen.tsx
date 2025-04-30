"use client";

import Card from "@/app/components/ui/Card";
import ProjectsHeader from "./_components/ProjectsHeader";
import Projects from "./_components/Projects";
import { useState } from "react";

export type SectionsType = "app" | "messages" | "settings";

const AllProjectsSeen = () => {
  const [activeSection, setActiveSetction] = useState<SectionsType>("app");

  return (
    <div>
      <Card className="p-[30px] w-full space-y-5 mb-5">
        <ProjectsHeader
          activeSection={activeSection}
          setActiveSetction={setActiveSetction}
        />
        {activeSection === "app" && <Projects />}
      </Card>
    </div>
  );
};

export default AllProjectsSeen;
