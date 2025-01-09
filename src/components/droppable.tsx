import { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

type Props = {
  id: string;
  children: ReactNode;
  date?: string;
};

function Droppable({ id, date, children }: Props) {
  const { setNodeRef } = useDroppable({ id, data: { current: { date } } });
  return (
    <div
      style={{
        width: "100%",

        ...(date && {
          border: "1px solid #000",
          height: "100%",
          flexGrow: 1,
        }),
      }}
      ref={setNodeRef}
    >
      {children}
    </div>
  );
}

export default Droppable;
