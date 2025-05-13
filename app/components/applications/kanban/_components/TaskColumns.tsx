"use client";

import { ColumnType, Task } from "@/app/types/kanban";
import TaskColumn from "./TaskColumn";
import Card from "@/app/components/ui/Card";
import AddIcon from "@mui/icons-material/Add";

interface TaskColumnsProps {
  taskColumns: ColumnType[];
  handleAddTask: () => void;
  handleAddColumn: () => void;
  tasks: Task[];
}

const TaskColumns = ({
  taskColumns,
  handleAddTask,
  handleAddColumn,
  tasks,
}: TaskColumnsProps) => {
  return (
    <div className="flex gap-5 overflow-y-auto overflow-x-hidden max-w-full">
      {taskColumns.map((column) => (
        <TaskColumn
          tasks={tasks.filter((task) => task.status === column.id)}
          handleAddTask={handleAddTask}
          taskColumn={column}
          key={column.id}
        />
      ))}
      <div onClick={handleAddColumn} className="w-full">
        <Card className="flex justify-center items-center border-2 border-dashed min-h-full w-full max-w-[357px] cursor-pointer">
          <AddIcon
            className="text-medium-gray"
            sx={{
              width: "50px",
              height: "50px",
            }}
          />
        </Card>
      </div>
    </div>
  );
};

export default TaskColumns;
