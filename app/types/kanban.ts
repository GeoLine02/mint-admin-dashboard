export interface ITask {
  id: number;
  taskTitle: string;
  taskDeadline: string;
  teamName: string;
  clipCount: number;
  commentCount: number;
}

export interface ITaskColumn {
  id: number;
  listTitle: string;
  tasks: ITask[];
}
