"use client";

import React, { forwardRef } from "react";
import TaskCard from "./TaskCard";
import Card from "@/app/components/ui/Card";
import AddIcon from "@mui/icons-material/Add";

import { Task } from "@/app/types/kanban";

interface TasksProps {
  tasks: Task[];
  handleAddTask: () => void;
}

const Tasks = forwardRef<HTMLDivElement, TasksProps>(
  ({ tasks, handleAddTask }, ref) => {
    return (
      <div className="p-5 space-y-5">
        <div onClick={handleAddTask} className="w-full">
          <Card className="flex items-center justify-center border-dashed border-2 w-full h-[50px] cursor-pointer">
            <AddIcon className="text-medium-gray" />
          </Card>
        </div>
        <div className="space-y-5" ref={ref}>
          {tasks.map((task) => (
            <TaskCard
              id={task.id}
              key={task.id}
              commentCount={task.commentCount}
              clipCount={task.clipCount}
              taskDeadline={task.taskDeadline}
              taskTitle={task.title}
              teamName={task.teamName}
            />
          ))}
        </div>
      </div>
    );
  }
);

Tasks.displayName = "Tasks";

export default Tasks;
