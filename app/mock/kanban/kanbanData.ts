import { ColumnType, Task } from "@/app/types/kanban";

export const COLUMNS: ColumnType[] = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

export const INITIAL_TASKS: Task[] = [
  {
    id: "1",
    title: "Webdev",
    taskDeadline: "12 Days",
    teamName: "Cisco Team",
    clipCount: 7,
    commentCount: 8,
    status: "TODO",
  },
  {
    id: "2",
    title: "Create a new theme",
    taskDeadline: "9 Days",
    teamName: "Gento Team",
    clipCount: 3,
    commentCount: 5,
    status: "TODO",
  },
  {
    id: "3",
    title: "Improve Social Banners",
    taskDeadline: "17 Days",
    teamName: "Developing Team",
    clipCount: 5,
    commentCount: 9,
    status: "TODO",
  },
  {
    id: "4",
    title: "Cloud computing",
    taskDeadline: "31 Days",
    teamName: "Gento Team",
    clipCount: 2,
    commentCount: 0,
    status: "IN_PROGRESS",
  },
  {
    id: "5",
    title: "Update subscription",
    taskDeadline: "15 Days",
    teamName: "Developing Team",
    clipCount: 5,
    commentCount: 4,
    status: "IN_PROGRESS",
  },
  {
    id: "6",
    title: "Poster design",
    taskDeadline: "5 Days",
    teamName: "Design Team",
    clipCount: 10,
    commentCount: 4,
    status: "IN_PROGRESS",
  },
];
