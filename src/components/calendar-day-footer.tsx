import { styled } from "../../stitches.config";
import { useCalendarContext as useCalendarContext } from "../contexts/calendar-context";
import TaskForm from "./task-form";

const StyledCalendarDayFooter = styled("footer", {
  display: "flex",
  justifyContent: "center",
});

type Props = {
  isActive: boolean;
  day: string;
};

function CalendarDayFooter({ isActive, day }: Props) {
  const { isFormOpen, handleOpenForm } = useCalendarContext();
  return (
    isActive && (
      <StyledCalendarDayFooter>
        {isFormOpen && day && <TaskForm day={day} />}
        <button onClick={handleOpenForm}>Add a task</button>
      </StyledCalendarDayFooter>
    )
  );
}

export default CalendarDayFooter;
