import { format } from "date-fns";
import { useAppContext } from "../contexts/calendar-context";

const useCalendarDay = (day: number) => {
  const dateDate = new Date(day);
  const afterDay = new Date(day);
  afterDay.setDate(afterDay.getDate() + 1);
  const { selectedDate, setSelectedDate, tasks, isFormOpen } = useAppContext();

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

    handleClick,
    handleClose,
  };
};

export default useCalendarDay;
