import { useDraggable } from "@dnd-kit/core";
import { ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
};
function Draggable({ id, children }: Props) {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id,
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
