import { styled } from "@stitches/react";
import Draggable from "./draggable";
import { SortableItem } from "./sortable-item";
import { Task } from "../contexts/calendar-context/context";
import TaskForm from "./task-form";
import { useCalendarContext } from "../contexts/calendar-context";

const StyledTaskCard = styled("div", {
  "&:hover": {
    backgroundColor: "#005bb5", // Darker shade on hover
    transform: "scale(1.05)", // Slightly increase size on hover
  },
  position: "relative",
});

const StyledCardContent = styled("div", {
  border: "1px solid #000",
});

type Props = {
  task: Task;
};

function TaskCard({ task }: Props) {
  const { selectedTask, setSelectedTask } = useCalendarContext();

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    setSelectedTask(task);
  }

  return (
    <StyledTaskCard onClick={handleClick}>
      {task.id === selectedTask?.id && <TaskForm task={task} />}
      <Draggable task={task}>
        <SortableItem task={task}>
          <StyledCardContent>{task.title}</StyledCardContent>
        </SortableItem>
      </Draggable>
    </StyledTaskCard>
  );
}

export default TaskCard;
