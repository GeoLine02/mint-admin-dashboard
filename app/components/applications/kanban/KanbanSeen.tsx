"use client";

import { useState } from "react";
import Card from "../../ui/Card";
import KanbanFilters from "./_components/KanbanFilters";
import KanbanHeader from "./_components/KanbanHeader";
import TaskColumns from "./_components/TaskColumns";
import { ColumnType, Task } from "@/app/types/kanban";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { COLUMNS, INITIAL_TASKS } from "@/app/mock/kanban/kanbanData";

const KanbanSeen = () => {
  const [columns, setColumns] = useState<ColumnType[]>(COLUMNS);

  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as Task["status"];

    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  };

  const handleaddTask = () => {};

  const handleAddColumn = () => {};

  return (
    <Card className="p-5 w-full">
      <KanbanHeader />
      <KanbanFilters />
      <DndContext onDragEnd={handleDragEnd}>
        <TaskColumns
          handleAddColumn={handleAddColumn}
          handleAddTask={handleaddTask}
          taskColumns={columns}
          tasks={tasks}
        />
      </DndContext>
    </Card>
  );
};

export default KanbanSeen;
