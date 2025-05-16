"use client";

import Card from "@/app/components/ui/Card";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tasks from "./Tasks";
import { ColumnType, Task } from "@/app/types/kanban";
import { useDroppable } from "@dnd-kit/core";
import Input from "@/app/components/ui/Input";
import { useEffect, useRef, useState } from "react";
import ColumnContextMenu from "./ColumnContextMenu";

interface TaskColumnProps {
  taskColumn: ColumnType;
  toggleAddTask: (columnId: string) => void;
  tasks: Task[];
  setColumns: React.Dispatch<React.SetStateAction<ColumnType[]>>;
  editingColumnId: string | null;
  setEditingColumnId: React.Dispatch<React.SetStateAction<string | null>>;
}

const TaskColumn = ({
  taskColumn,
  toggleAddTask,
  tasks,
  setColumns,
  editingColumnId,
  setEditingColumnId,
}: TaskColumnProps) => {
  const { setNodeRef } = useDroppable({
    id: taskColumn.id,
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(taskColumn.title);
  const [currentOpenedContextMenu, setCurrentOpenedContextMenu] = useState("");

  useEffect(() => {
    if (editingColumnId === taskColumn.id && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingColumnId, taskColumn.id]);

  const handleSave = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      setColumns((prev) => prev.filter((col) => col.id !== taskColumn.id));
    } else {
      setColumns((prev) =>
        prev.map((col) =>
          col.id === taskColumn.id
            ? {
                id: col.id || `column-${Date.now()}`,
                title: trimmed,
              }
            : col
        )
      );
    }
    setEditingColumnId(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSave();
    }
  };

  const handleDeleteColumn = () => {
    setColumns((prevColumns: ColumnType[]) => {
      return prevColumns.filter((column) => column.id !== taskColumn.id);
    });
  };

  const handleToggleContextMenu = () => {
    setCurrentOpenedContextMenu(
      currentOpenedContextMenu === "" ? taskColumn.id : ""
    );
  };

  return (
    <Card ref={setNodeRef} className="min-w-[357px] max-w-[357px] ">
      <div className="bg-light-gray flex items-center justify-between rounded-t-lg p-2 px-5 ">
        {editingColumnId === taskColumn.id ? (
          <div onMouseDown={(e) => e.stopPropagation()}>
            <Input
              ref={inputRef}
              name="newColumn"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={handleSave}
              onKeyDown={handleKeyDown}
            />
          </div>
        ) : (
          <h1
            onClick={() => {
              setEditingColumnId(taskColumn.id);
            }}
            className="cursor-pointer"
          >
            {taskColumn.title}
          </h1>
        )}
        <div className="relative">
          <div onClick={handleToggleContextMenu}>
            <MoreHorizIcon className="text-medium-gray cursor-pointer" />
          </div>
          {currentOpenedContextMenu === taskColumn.id && (
            <ColumnContextMenu handleDeleteColumn={handleDeleteColumn} />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Tasks
          columnId={taskColumn.id}
          toggleAddTask={toggleAddTask}
          tasks={tasks}
        />
      </div>
    </Card>
  );
};

export default TaskColumn;
