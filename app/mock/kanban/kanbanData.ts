import { ColumnType, IMemberOption, Task } from "@/app/types/kanban";
import { v4 as uuid } from "uuid";

export const COLUMNS: ColumnType[] = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

export const INITIAL_TASKS: Task[] = [
  {
    id: uuid(),
    title: "Webdev",
    taskDeadline: 12,
    teamName: "Cisco Team",
    clipCount: 7,
    commentCount: 8,
    status: "TODO",
  },
  {
    id: uuid(),
    title: "Create a new theme",
    taskDeadline: 9,
    teamName: "Gento Team",
    clipCount: 3,
    commentCount: 5,
    status: "TODO",
  },
  {
    id: uuid(),
    title: "Improve Social Banners",
    taskDeadline: 17,
    teamName: "Developing Team",
    clipCount: 5,
    commentCount: 9,
    status: "TODO",
  },
  {
    id: uuid(),
    title: "Cloud computing",
    taskDeadline: 31,
    teamName: "Gento Team",
    clipCount: 2,
    commentCount: 0,
    status: "IN_PROGRESS",
  },
  {
    id: uuid(),
    title: "Update subscription",
    taskDeadline: 15,
    teamName: "Developing Team",
    clipCount: 5,
    commentCount: 4,
    status: "IN_PROGRESS",
  },
  {
    id: uuid(),
    title: "Poster design",
    taskDeadline: 5,
    teamName: "Design Team",
    clipCount: 10,
    commentCount: 4,
    status: "IN_PROGRESS",
  },
];

export const projectMemberOptions: IMemberOption[] = [
  {
    value: "tsuladzenika04@gmail.com",
    label: "Nika Tsuladze",
  },
];
