import { format } from "date-fns";
import { useCalendarContext } from "../contexts/calendar-context";

const useCalendarDay = (day: string) => {
  const dateDate = new Date(day);
  const afterDay = new Date(day);
  afterDay.setDate(afterDay.getDate() + 1);
  const {
    selectedDate,
    setSelectedDate,
    filteredTasks: tasks,
    isFormOpen,
    currDate,
  } = useCalendarContext();
  const dayDate = new Date(day);
  console.log({ currDate, day });

  const isCurrent =
    dayDate.getMonth() === currDate?.getMonth() &&
    dayDate.getFullYear() === currDate?.getFullYear();
  const today = new Date();

  const isToday =
    dayDate.getMonth() === today?.getMonth() &&
    dayDate.getFullYear() === today?.getFullYear() &&
    dayDate.getDate() === today?.getDate();

  const isFirstOrLastDay = dateDate.getDate() === 1 || afterDay.getDate() === 1;
  const label = format(dateDate, isFirstOrLastDay ? "d MMM" : "d");
  const isActive = selectedDate === day;
  const handleClick = () => setSelectedDate(day);
  const handleClose = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    setSelectedDate(null);
  };

  return {
    isFormOpen,
    label,
    isActive,
    tasks: tasks.filter((task) => task.day === day),
    isCurrent,
    isToday,

    handleClick,
    handleClose,
  };
};

export default useCalendarDay;
