import { ReactNode, useCallback, useState } from "react";
import { CalendarContext, Task } from "./context";

type Props = {
  children: ReactNode;
};

export default function CalendarContextProvider({ children }: Props) {
  const [selectedMonthYear, setSelectedMonthYear] = useState(new Date());
  const [currDate, setCurrDate] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const currYear = selectedMonthYear.getFullYear();
  const currMonth = selectedMonthYear.getMonth();
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSelectMonthYear = useCallback((place: 0 | 1 | -1) => {
    setSelectedMonthYear((prev) => {
      const month = prev.getMonth() + place;
      const year = prev.getFullYear();
      return new Date(year, month);
    });
  }, []);

  const handleSelectDate = useCallback((date?: Date) => {
    setCurrDate((prev) => {
      return !date || prev === date ? null : date;
    });
  }, []);

  return (
    <CalendarContext.Provider
      value={{
        currYear,
        currMonth,
        currDate,
        selectedDate,
        tasks,

        handleSelectMonthYear,
        handleSelectDate,
        setSelectedDate,
        setTasks,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
