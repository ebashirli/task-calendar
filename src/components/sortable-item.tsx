import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ReactNode } from "react";
import { Task } from "../contexts/calendar-context/context";

type Props = {
  task: Task;
  children: ReactNode;
};

export function SortableItem({ task, children }: Props) {
  const { attributes, listeners, transform, transition, setNodeRef } =
    useSortable({
      id: task.id,
      data: { day: task.day },
      disabled: task.noDrag,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}
