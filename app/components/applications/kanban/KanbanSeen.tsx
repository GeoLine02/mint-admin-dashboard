"use client";

import { useState } from "react";
import Card from "../../ui/Card";
import KanbanFilters from "./_components/KanbanFilters";
import KanbanHeader from "./_components/KanbanHeader";
import TaskColumns from "./_components/TaskColumns";
import { ITask, ITaskColumn } from "@/app/types/kanban";
import { TaskColumnsData } from "@/app/mock/kanban/kanbanData";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

const KanbanSeen = () => {
  const [taskColumns, setTaskColumns] =
    useState<ITaskColumn[]>(TaskColumnsData);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const activeId = active.id as number;
    const overId = over.id as number;

    setTaskColumns((prevColumns) => {
      let activeColumnIndex = -1;
      let overColumnIndex = -1;
      let activeTaskIndex = -1;
      let overTaskIndex = -1;
      let activeTask: ITask | null = null;

      // Find source and target positions
      const columnsCopy = prevColumns.map((column, colIndex) => {
        const taskIndex = column.tasks.findIndex((t) => t.id === activeId);
        if (taskIndex !== -1) {
          activeColumnIndex = colIndex;
          activeTaskIndex = taskIndex;
          activeTask = column.tasks[taskIndex];
        }

        const overIndex = column.tasks.findIndex((t) => t.id === overId);
        if (overIndex !== -1) {
          overColumnIndex = colIndex;
          overTaskIndex = overIndex;
        }

        return { ...column, tasks: [...column.tasks] };
      });

      if (!activeTask) return prevColumns;

      // Remove the task from its original column
      columnsCopy[activeColumnIndex].tasks.splice(activeTaskIndex, 1);

      // Insert into new column at the position of the target task
      columnsCopy[overColumnIndex].tasks.splice(overTaskIndex, 0, activeTask);

      return columnsCopy;
    });
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
          setTaskColumns={setTaskColumns}
          taskColumns={taskColumns}
        />
      </DndContext>
    </Card>
  );
};

export default KanbanSeen;
