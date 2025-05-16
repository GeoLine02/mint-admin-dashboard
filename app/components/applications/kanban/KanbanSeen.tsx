"use client";

import { useState } from "react";
import Card from "../../ui/Card";
import KanbanFilters from "./_components/KanbanFilters";
import KanbanHeader from "./_components/KanbanHeader";
import TaskColumns from "./_components/TaskColumns";
import { ColumnType, IMemberOption, INewTask, Task } from "@/app/types/kanban";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  COLUMNS,
  INITIAL_TASKS,
  projectMemberOptions,
} from "@/app/mock/kanban/kanbanData";
import Modal from "../../ui/Modal";
import TaskModal from "./_components/TaskModal";

const KanbanSeen = () => {
  const [columns, setColumns] = useState<ColumnType[]>(COLUMNS);
  const [memberOptions] = useState<IMemberOption[]>(projectMemberOptions);
  const [taskInfo, setTaskInfo] = useState<INewTask>({
    projectMembers: memberOptions,
    projectTitle: "",
    taskDescription: "",
    taskTitle: "",
    id: "",
    status: "",
    taskDeadline: 0,
    teamName: "",
  });
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState<boolean>(false);
  const [activeColumn, setActiveColumn] = useState<string>("");
  const [isAddingColumn, setIsAddingColumn] = useState<boolean>(false);
  const [editingColumnId, setEditingColumnId] = useState<string | null>(null);
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

  const toggleAddTask = (columnId: string) => {
    setActiveColumn(columnId);
    setIsNewTaskModalOpen(!isNewTaskModalOpen);
  };

  const handleAddColumn = () => {
    const newColumnId = `new-column-${Date.now()}`;
    setColumns((prevColumns: ColumnType[]) => [
      ...prevColumns,
      {
        id: newColumnId,
        title: "",
      },
    ]);
    setEditingColumnId(newColumnId);
  };

  return (
    <Card className="p-5 max-w-[1610px] w-full mx-auto">
      <KanbanHeader />
      <KanbanFilters />
      <DndContext onDragEnd={handleDragEnd}>
        <TaskColumns
          editingColumnId={editingColumnId}
          setEditingColumnId={setEditingColumnId}
          setColumns={setColumns}
          isAddingColumn={isAddingColumn}
          setIsAddingColumn={setIsAddingColumn}
          handleAddColumn={handleAddColumn}
          toggleAddTask={toggleAddTask}
          taskColumns={columns}
          tasks={tasks}
        />
      </DndContext>
      {isNewTaskModalOpen && (
        <Modal isOpen={isNewTaskModalOpen} onClose={() => toggleAddTask("")}>
          <TaskModal
            setIsNewTaskModalOpen={setIsNewTaskModalOpen}
            tasks={tasks}
            activeColumn={activeColumn}
            setTasks={setTasks}
            memberOptions={memberOptions}
            setTaskInfo={setTaskInfo}
            taskInfo={taskInfo}
          />
        </Modal>
      )}
    </Card>
  );
};

export default KanbanSeen;
