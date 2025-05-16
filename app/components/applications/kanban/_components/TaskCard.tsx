"use client";

import Card from "@/app/components/ui/Card";
import {
  WatchLater,
  People,
  AttachFile,
  Comment,
  Add,
} from "@mui/icons-material";
import TeamMemberIcon from "@/public/person2Icon.png";
import Image from "next/image";
import { useDraggable } from "@dnd-kit/core";

interface TaskCardProps {
  id: string;
  taskTitle: string;
  taskDeadline: number;
  teamName: string;
  clipCount: number;
  commentCount: number;
  // teamMembers: string[];
}

const TaskCard = ({
  id,
  taskTitle,
  taskDeadline,
  teamName,
  commentCount,
  clipCount,
}: TaskCardProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        opacity: transform ? 0.8 : 1,
      }
    : undefined;

  return (
    <Card
      DndListeners={listeners}
      DndAttributes={attributes}
      ref={setNodeRef}
      style={style}
      className="w-full p-3 cursor-grab space-y-5"
    >
      <section className="flex justify-between items-center">
        <div>
          <input type="text" hidden />
          <h1>{taskTitle}</h1>
        </div>
        <div className="flex items-center gap-3 text-medium-gray">
          <WatchLater />
          <span>{taskDeadline} Days</span>
        </div>
      </section>
      <section className="flex items-center gap-3">
        <People className="text-medium-gray" />
        <span>{teamName}</span>
      </section>
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3 text-medium-gray">
            <AttachFile />
            <span>{clipCount}</span>
          </div>
          <div className="flex items-center gap-3 text-medium-gray">
            <Comment />
            <span>{commentCount}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-1 box-content rounded-full bg-light-gray text-primary-purple">
            <Add />
          </div>
          <div className="flex items-center">
            <Image src={TeamMemberIcon} alt="team member icon" />
            <Image src={TeamMemberIcon} alt="team member icon" />
            <Image src={TeamMemberIcon} alt="team member icon" />
          </div>
        </div>
      </section>
    </Card>
  );
};

export default TaskCard;
