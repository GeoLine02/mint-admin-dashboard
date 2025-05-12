import { ITaskColumn } from "@/app/types/kanban";
import TaskColumn from "./TaskColumn";
import Card from "@/app/components/ui/Card";
import AddIcon from "@mui/icons-material/Add";

interface TaskColumnsProps {
  taskColumns: ITaskColumn[];
  setTaskColumns: React.Dispatch<React.SetStateAction<ITaskColumn[]>>;
  handleAddTask: () => void;
  handleAddColumn: () => void;
}

const TaskColumns = ({
  taskColumns,
  handleAddTask,
  setTaskColumns,
  handleAddColumn,
}: TaskColumnsProps) => {
  return (
    <div className="flex gap-5 overflow-y-auto overflow-x-hidden max-w-full">
      {taskColumns.map((column) => (
        <TaskColumn
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
