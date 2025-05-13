"use client";

import Card from "@/app/components/ui/Card";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tasks from "./Tasks";
import { ColumnType, Task } from "@/app/types/kanban";
import { useDroppable } from "@dnd-kit/core";

interface TaskColumnProps {
  taskColumn: ColumnType;
  handleAddTask: () => void;
  tasks: Task[];
}

const TaskColumn = ({ taskColumn, handleAddTask, tasks }: TaskColumnProps) => {
  const { setNodeRef } = useDroppable({
    id: taskColumn.id,
  });

  return (
    <Card ref={setNodeRef} className="max-w-[357px] w-full ">
      <div className="bg-light-gray flex items-center justify-between rounded-t-lg p-2 px-5 ">
        <h1>{taskColumn.title}</h1>
        <MoreHorizIcon className="text-medium-gray cursor-pointer" />
      </div>
      <div className="flex flex-col gap-5">
        <Tasks handleAddTask={handleAddTask} tasks={tasks} />
      </div>
    </Card>
  );
};

export default TaskColumn;
