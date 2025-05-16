"use client";

import React, { CSSProperties, useId } from "react";
import { DraggableAttributes } from "@dnd-kit/core";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  DndAttributes?: DraggableAttributes;
  DndListeners?: React.HTMLAttributes<HTMLElement>;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, style, DndAttributes, DndListeners }, ref) => {
    const id = useId();

    return (
      <div
        ref={ref}
        style={style}
        {...DndListeners}
        {...DndAttributes}
        aria-describedby={id}
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
