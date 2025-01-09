import { closestCorners, DndContext, DragEndEvent } from "@dnd-kit/core";
import { styled } from "../../stitches.config";
import { useDates } from "../hooks/use-dates";
import Date from "./date";
import { useAppContext } from "../contexts/app-context";
import { Task } from "../contexts/app-context/context";
import { arrayMove } from "@dnd-kit/sortable";

const StyledDates = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "0.5rem",
  height: "calc(100vh-100px)",
  overflowY: "scroll",
});

function Dates() {
  const { dateDetails } = useDates();
  const { tasks, setTasks } = useAppContext();

  function handleDragEnd({ active, over }: DragEndEvent) {
    console.log({ active, over });

    if (!over) return;
    const taskId = active.id as string;
    const newDate = over.id as Task["date"];
    const curentDate = over.data.current?.date;

    if (curentDate) {
      if (active.id === over.id) return;
      const overId = over.id as string;
      return setTasks((tasks) => {
        const ids = tasks.map(({ id }) => id);
        const oldIndex = ids.indexOf(taskId);
        const newIndex = ids.indexOf(overId);

        return arrayMove(tasks, oldIndex, newIndex);
      });
    }

    // setTasks((tasks) =>
    //   tasks.map((task) =>
    //     task.id === taskId ? { ...task, date: newDate } : task
    //   )
    // );
  }

  return (
    <StyledDates>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        {dateDetails.map((dateDetail, i) => (
          <Date
            key={dateDetail.id}
            index={i}
            dateDetail={dateDetail}
            tasks={tasks.filter(({ date }) => date === dateDetail.id)}
          />
        ))}
      </DndContext>
    </StyledDates>
  );
}

export default Dates;
