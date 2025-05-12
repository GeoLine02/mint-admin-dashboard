import { ITask } from "@/app/types/kanban";
import React, { forwardRef } from "react";
import TaskCard from "./TaskCard";
import Card from "@/app/components/ui/Card";
import AddIcon from "@mui/icons-material/Add";

interface TasksProps {
  tasks: ITask[];
}

const Tasks = forwardRef<HTMLDivElement, TasksProps>(({ tasks }, ref) => {
  return (
    <div className="p-5 space-y-5" ref={ref}>
      <Card className="flex items-center justify-center border-dashed border-2 w-full h-[50px] cursor-pointer">
        <AddIcon className="text-medium-gray" />
      </Card>

      {tasks.map((task) => (
        <TaskCard
          id={task.id}
          key={task.id}
          commentCount={task.commentCount}
          clipCount={task.clipCount}
          taskDeadline={task.taskDeadline}
          taskTitle={task.taskTitle}
          teamName={task.teamName}
        />
      ))}
    </div>
  );
});

Tasks.displayName = "Tasks";

export default Tasks;
