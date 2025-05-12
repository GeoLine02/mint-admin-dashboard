"use client"; // if you're in a client component

import React, { CSSProperties } from "react";
import { DraggableAttributes } from "@dnd-kit/core";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  DndAttributes?: DraggableAttributes;
  DndListeners?: React.HTMLAttributes<HTMLElement>; // this includes onPointerDown, etc.
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, style, DndAttributes, DndListeners }, ref) => {
    return (
      <div
        ref={ref}
        style={style}
        {...DndListeners}
        {...DndAttributes}
        className={`bg-white border border-light-gray rounded-xl w-fit shadow ${
          className || ""
        }`}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
