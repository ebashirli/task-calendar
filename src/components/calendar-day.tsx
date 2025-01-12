import { format } from "date-fns";
import { styled } from "../../stitches.config";
import { useAppContext } from "../contexts/calendar-context";
import { useState } from "react";
import TaskForm from "./task-form";
import { SortableItem } from "./sortable-item";
import Droppable from "./droppable";
import Draggable from "./draggable";

const StyledCalendarWrapper = styled("td", {
  display: "inline-block",
  width: `${100 / 7}%`,
  position: "relative",
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
  day: number;
};

function CalendarDay({ day }: Props) {
  const dateDate = new Date(day);
  const afterDay = new Date(day);
  afterDay.setDate(afterDay.getDate() + 1);
  const { selectedDate, setSelectedDate, tasks } = useAppContext();
  const [isFormActive, setIsFormActive] = useState(false);

  const isFirstOrLastDay = dateDate.getDate() === 1 || afterDay.getDate() === 1;
  const label = format(dateDate, isFirstOrLastDay ? "d MMM" : "d");
  const isActive = selectedDate === day;
  const handleClick = () => setSelectedDate(day);

  return (
    <StyledCalendarWrapper>
      <StyledCalendarSpacer>
        <Droppable id={`${day}`} day={day}>
          <StyledCalendarDay active={isActive} onClick={handleClick}>
            <header
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {label}
              {isActive && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDate(null);
                  }}
                >
                  x
                </span>
              )}
            </header>
            <main style={{ flexGrow: 1 }}>
              {tasks
                .filter((task) => task.date === day)
                .map(({ id, title }) => {
                  return (
                    <Draggable key={id} id={id} day={day}>
                      <SortableItem id={id} day={day}>
                        <li style={{ border: "1px solid #000" }}>{title}</li>
                      </SortableItem>
                    </Draggable>
                  );
                })}
            </main>
            {isActive && (
              <footer style={{ display: "flex", justifyContent: "center" }}>
                {isFormActive && (
                  <TaskForm date={day} setIsFormActive={setIsFormActive} />
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFormActive(true);
                  }}
                >
                  Add a task
                </button>
              </footer>
            )}
          </StyledCalendarDay>
        </Droppable>
      </StyledCalendarSpacer>
    </StyledCalendarWrapper>
  );
}

export default CalendarDay;
