export type ColumnType = {
  id: string;
  title: string;
};

export type Task = {
  id: string;
  title: string;
  taskDeadline: number;
  teamName: string;
  clipCount: number;
  commentCount: number;
  status: "TODO" | "IN_PROGRESS" | "DONE";
};

export interface ITaskColumn {
  id: number;
  listTitle: string;
  tasks: Task[];
}

export interface IMemberOption {
  value: string;
  label: string;
}

export interface INewTask {
  id: string;
  taskTitle: string;
  projectTitle: string;
  projectMembers: IMemberOption[];
  taskDescription: string;
  teamName: string;
  taskDeadline: number;
  status: string;
}
