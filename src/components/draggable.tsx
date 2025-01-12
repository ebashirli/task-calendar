import { useDraggable } from "@dnd-kit/core";
import { ReactNode } from "react";

type Props = {
  id: string;
  day: string;
  children: ReactNode;
};
function Draggable({ id, day, children }: Props) {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id,
    data: { day },
    disabled: !id,
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

export default Draggable;
