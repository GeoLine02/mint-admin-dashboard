import { projectsData } from "../db/db";
import { IProjectithId } from "../types/globalTypes";
import { delay } from "../utils/delayRequest";

// GET all projects for a user
export const getUserProjects = async (
  userId: number
): Promise<IProjectithId[]> => {
  await delay();
  return projectsData.filter((p) => p.userId === userId);
};

// GET project by ID
export const getProjectById = async (
  projectId: number
): Promise<IProjectithId | null> => {
  await delay();
  return projectsData.find((p) => p.id === projectId) ?? null;
};

// MOCK CREATE project
export const createProject = async (
  project: IProjectithId
): Promise<IProjectithId> => {
  await delay();
  projectsData.push(project); // in-memory mutation only
  return project;
};

// MOCK UPDATE project
export const updateProject = async (
  projectId: number,
  updatedData: Partial<IProjectithId>
): Promise<IProjectithId | null> => {
  await delay();
  const index = projectsData.findIndex((p) => p.id === projectId);
  if (index === -1) return null;
  projectsData[index] = { ...projectsData[index], ...updatedData };
  return projectsData[index];
};

// MOCK DELETE project
export const deleteProject = async (projectId: number): Promise<boolean> => {
  await delay();
  const index = projectsData.findIndex((p) => p.id === projectId);
  if (index === -1) return false;
  projectsData.splice(index, 1);
  return true;
};
