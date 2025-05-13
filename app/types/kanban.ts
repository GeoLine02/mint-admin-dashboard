export type ColumnType = {
  id: "TODO" | "IN_PROGRESS" | "DONE";
  title: string;
};

export type Task = {
  id: string;
  title: string;
  taskDeadline: string;
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
