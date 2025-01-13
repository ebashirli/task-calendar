import { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

type Props = {
  id: string;
  children: ReactNode;
  day: string;
};

export function Droppable({ id, day, children }: Props) {
  const { setNodeRef } = useDroppable({ id, data: { day } });
  return (
    <div style={{ width: "100%" }} ref={setNodeRef}>
      {children}
    </div>
  );
}
