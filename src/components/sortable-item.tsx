import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ReactNode } from "react";

type Props = {
  id: string;
  day: string;
  children: ReactNode;
};

export function SortableItem({ id, day, children }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id, data: { day, type: "task" }, disabled: !id });

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
