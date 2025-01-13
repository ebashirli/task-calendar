import { Droppable } from "./dnd";
import useCalendarDay from "../hooks/use-calendar-day";
import TaskCard from "./task-card";
import CalendarDayFooter from "./calendar-day-footer";
import {
  StyledCalendarDay,
  StyledCalendarDayHeader,
  StyledCalendarSpacer,
  StyledCalendarWrapper,
  StyledTaskList,
} from "./styles";

type Props = {
  day: string;
};

function CalendarDay({ day }: Props) {
  const {
    label,
    isActive,
    tasks,
    isCurrent,
    isToday,

    handleClick,
    handleClose,
  } = useCalendarDay(day);

  return (
    <StyledCalendarWrapper current={isCurrent} today={isToday}>
      <StyledCalendarSpacer>
        <Droppable id={`${day}`} day={day}>
          <StyledCalendarDay active={isActive} onClick={handleClick}>
            <StyledCalendarDayHeader>
              {label}
              {isActive && <span onClick={handleClose}>x</span>}
            </StyledCalendarDayHeader>
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
