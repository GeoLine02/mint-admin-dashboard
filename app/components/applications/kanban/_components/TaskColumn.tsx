import Card from "@/app/components/ui/Card";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tasks from "./Tasks";
import { ITaskColumn } from "@/app/types/kanban";
import { useDroppable } from "@dnd-kit/core";

interface TaskColumnProps {
  taskColumn: ITaskColumn;
  handleAddTask: () => void;
}

const TaskColumn = ({ taskColumn, handleAddTask }: TaskColumnProps) => {
  const { setNodeRef } = useDroppable({
    id: taskColumn.id,
  });

  return (
    <Card className="max-w-[357px] w-full">
      <div className="bg-light-gray flex items-center justify-between rounded-t-lg p-2 ">
        <h1>{taskColumn.listTitle}</h1>
        <MoreHorizIcon className="text-medium-gray cursor-pointer" />
      </div>
      <div className="flex flex-col gap-5">
        <Tasks ref={setNodeRef} tasks={taskColumn.tasks} />
      </div>
    </Card>
  );
};

export default TaskColumn;
