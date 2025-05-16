"use client";

import { ColumnType, Task } from "@/app/types/kanban";
import TaskColumn from "./TaskColumn";
import Card from "@/app/components/ui/Card";
import AddIcon from "@mui/icons-material/Add";

interface TaskColumnsProps {
  taskColumns: ColumnType[];
  toggleAddTask: (columnId: string) => void;
  handleAddColumn: () => void;
  tasks: Task[];
  isAddingColumn: boolean;
  setIsAddingColumn: React.Dispatch<React.SetStateAction<boolean>>;
  setColumns: React.Dispatch<React.SetStateAction<ColumnType[]>>;
  setEditingColumnId: React.Dispatch<React.SetStateAction<string | null>>;
  editingColumnId: string | null;
}

const TaskColumns = ({
  taskColumns,
  toggleAddTask,
  handleAddColumn,
  tasks,
  isAddingColumn,
  setColumns,
  setEditingColumnId,
  editingColumnId,
}: TaskColumnsProps) => {
  return (
    <div className="flex gap-5 overflow-y-hidden   overflow-x-auto  max-w-full">
      {taskColumns.map((column) => (
        <TaskColumn
          setEditingColumnId={setEditingColumnId}
          editingColumnId={editingColumnId}
          setColumns={setColumns}
          tasks={tasks.filter((task) => task.status === column.id)}
          toggleAddTask={toggleAddTask}
          taskColumn={column}
          key={column.id}
        />
      ))}
      {!isAddingColumn && (
        <div onClick={handleAddColumn} className="min-w-[357px] w-full">
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
      )}
    </div>
  );
};

export default TaskColumns;
