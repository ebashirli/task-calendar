import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates, arrayMove } from "@dnd-kit/sortable";
import { ReactNode } from "react";
import { useAppContext } from "../calendar-context";

type Props = {
  children: ReactNode;
};

function DndContextProvider({ children }: Props) {
  const { setTasks } = useAppContext();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      {children}
    </DndContext>
  );

  function handleDragEnd({ active, over }: DragEndEvent) {
    if (!over) return;
    const activeId = active.id as string;
    const activeDay = active.data.current?.day;

    const overId = over?.id as string;
    const overDay = over.data.current?.day;

    console.log(
      { activeId, activeDay, overId, overDay },
      activeDay === Number(overId)
    );

    if (active.id !== over.id) {
      if (activeDay === Number(overId) || activeDay === Number(overDay)) {
        setTasks((tasks) => {
          const taskIds = tasks.map(({ id }) => id);
          const oldIndex = taskIds.indexOf(activeId);
          const newIndex = taskIds.indexOf(overId);

          return arrayMove(tasks, oldIndex, newIndex);
        });
      } else {
        setTasks((tasks) => {
          const task = tasks.find(({ id }) => id === activeId);
          if (!task) return tasks;
          const newTasks = tasks.filter((task) => task.id !== activeId);
          const date = overDay || Number(overId);
          return [...newTasks, { ...task, date }];
        });
      }
    }
  }
}

export default DndContextProvider;
