import { useDraggable } from "@dnd-kit/core";

type Props = {
  id: string;
  title: string;
};
function TaskCard({ id, title }: Props) {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({ id });
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;
  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
      <p>{title}</p>
    </div>
  );
}

export default TaskCard;
