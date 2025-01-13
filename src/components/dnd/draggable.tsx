import { useDraggable } from "@dnd-kit/core";
import { ReactNode } from "react";
import { Task } from "../../contexts/calendar-context/context";

type Props = {
  task: Task;
  children: ReactNode;
};

export function Draggable({ task, children }: Props) {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id: task.id,
    data: { day: task.day },
    disabled: task.noDrag,
  });
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;
  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
      {children}
    </div>
  );
}
