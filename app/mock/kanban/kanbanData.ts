import { ITaskColumn } from "@/app/types/kanban";

export const TaskColumnsData: ITaskColumn[] = [
  {
    id: 1,
    listTitle: "To Do task",
    tasks: [
      {
        id: 1,
        taskTitle: "Webdev",
        taskDeadline: "12 Days",
        teamName: "Cisco Team",
        clipCount: 7,
        commentCount: 8,
      },
      {
        id: 2,
        taskTitle: "Create a new theme",
        clipCount: 3,
        commentCount: 5,
        taskDeadline: "9 Days",
        teamName: "Gento Team",
      },
      {
        id: 3,
        clipCount: 5,
        commentCount: 9,
        taskDeadline: "17 Days",
        taskTitle: "Improve Social Banners",
        teamName: "Developing Team",
      },
    ],
  },
  {
    id: 2,
    listTitle: "In Progress",
    tasks: [
      {
        id: 4,
        clipCount: 2,
        commentCount: 0,
        taskDeadline: "31 Days",
        taskTitle: "Cloud computing",
        teamName: "Gento Team",
      },
      {
        id: 5,
        clipCount: 5,
        commentCount: 4,
        taskDeadline: "15 Days",
        taskTitle: "Update subscription",
        teamName: "Developing Team",
      },
      {
        id: 6,
        clipCount: 10,
        commentCount: 4,
        taskDeadline: "5 Days",
        taskTitle: "Poster design",
        teamName: "design Team",
      },
    ],
  },
];
