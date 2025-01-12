import { styled } from "@stitches/react";
import Draggable from "./draggable";
import { SortableItem } from "./sortable-item";
import { Task } from "../contexts/calendar-context/context";

const StyledTaskCard = styled("div", {
  "&:hover": {
    backgroundColor: "#005bb5", // Darker shade on hover
    transform: "scale(1.05)", // Slightly increase size on hover
  },
});

type Props = {
  task: Task;
};

function TaskCard({ task: { id, day, title } }: Props) {
  return (
    <StyledTaskCard>
      <Draggable id={id} day={day}>
        <SortableItem id={id} day={day}>
          <li style={{ border: "1px solid #000" }}>{title}</li>
        </SortableItem>
      </Draggable>
    </StyledTaskCard>
  );
}

export default TaskCard;
