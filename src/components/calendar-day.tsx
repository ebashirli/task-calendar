import { styled } from "../../stitches.config";
import { Droppable } from "./dnd";
import useCalendarDay from "../hooks/use-calendar-day";
import TaskCard from "./task-card";
import CalendarDayFooter from "./calendar-day-footer";

const StyledCalendarWrapper = styled("td", {
  display: "inline-block",
  width: `${100 / 7}%`,
  position: "relative",
});

const StyledCalendarHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const StyledTaskList = styled("main", {
  flexGrow: 1,
  border: "1px solid #000",
  height: "60%",
  overflow: "scroll",
  display: "grid",
  gap: ".5rem",
});

const StyledCalendarSpacer = styled("div", {
  aspectRatio: "1 / 1",
  width: "100%",
});

const StyledCalendarDay = styled("div", {
  aspectRatio: "1 / 1",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gridTemplateRows: "1fr auto 1fr",
  cursor: "pointer",
  border: "1px solid black",
  padding: "8px",

  variants: {
    active: {
      true: {
        width: "272px",
        height: "350px",
        position: "absolute",
        zIndex: 1,
        background: "red",
        top: 0,
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});

type Props = {
  day: string;
};

function CalendarDay({ day }: Props) {
  const {
    label,
    isActive,
    tasks,

    handleClick,
    handleClose,
  } = useCalendarDay(day);

  return (
    <StyledCalendarWrapper>
      <StyledCalendarSpacer>
        <Droppable id={`${day}`} day={day}>
          <StyledCalendarDay active={isActive} onClick={handleClick}>
            <StyledCalendarHeader>
              {label}
              {isActive && <span onClick={handleClose}>x</span>}
            </StyledCalendarHeader>
            <StyledTaskList>
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </StyledTaskList>
            <CalendarDayFooter day={day} isActive={isActive} />
          </StyledCalendarDay>
        </Droppable>
      </StyledCalendarSpacer>
    </StyledCalendarWrapper>
  );
}

export default CalendarDay;
