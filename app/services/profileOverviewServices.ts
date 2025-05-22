import {
  actionsData,
  profileMetrics,
  userCoursesData,
  userTagsData,
} from "../db/db";
import {
  IActionsData,
  IProfileMetrics,
  IUserCourseData,
  IUserTagsData,
} from "../mock/profile/profileOverviewData";
import { delay } from "../utils/delayRequest";

export const getUserProfileMetrics = async (
  userId: number
): Promise<IProfileMetrics[]> => {
  await delay();
  return profileMetrics.filter((m) => m.userId === userId);
};

export const getUserActions = async (
  userId: number
): Promise<IActionsData[]> => {
  await delay();
  return actionsData.filter((a) => a.userId === userId);
};

export const getUserCourses = async (
  userId: number
): Promise<IUserCourseData[]> => {
  await delay();
  return userCoursesData.filter((c) => c.userId === userId);
};

export const getUserTags = async (userId: number): Promise<IUserTagsData[]> => {
  await delay();
  return userTagsData.filter((t) => t.userId === userId);
};
