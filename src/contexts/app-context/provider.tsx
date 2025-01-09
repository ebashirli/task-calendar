import { ReactNode, useCallback, useState } from "react";
import { AppContext, Task } from "./context";

type Props = {
  children: ReactNode;
};

export default function AppContextProvider({ children }: Props) {
  const [selectedMonthYear, setSelectedMonthYear] = useState(new Date());
  const [currDate, setCurrDate] = useState<Date | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const currYear = selectedMonthYear.getFullYear();
  const currMonth = selectedMonthYear.getMonth();
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Task 01", date: "01-01-2025" },
    { id: "2", title: "Task 02", date: "01-02-2025" },
    { id: "3", title: "Task 03", date: "01-03-2025" },
    { id: "4", title: "Task 04", date: "01-04-2025" },
    { id: "5", title: "Task 05", date: "01-05-2025" },
    { id: "6", title: "Task 06", date: "01-06-2025" },
  ]);

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
    <AppContext.Provider
      value={{
        currYear,
        currMonth,
        currDate,
        selectedIndex,
        tasks,

        handleSelectMonthYear,
        handleSelectDate,
        setSelectedIndex,
        setTasks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
