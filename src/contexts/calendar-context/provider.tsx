import { v4 as uuid } from "uuid";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { CalendarContext, Task } from "./context";

type Props = {
  children: ReactNode;
};

export default function CalendarContextProvider({ children }: Props) {
  const [selectedMonthYear, setSelectedMonthYear] = useState(new Date());
  const [currDate, setCurrDate] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const currYear = selectedMonthYear.getFullYear();
  const currMonth = selectedMonthYear.getMonth();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([...tasks]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSelectMonthYear = useCallback((place: 0 | 1 | -1) => {
    return setSelectedMonthYear((prev) => {
      if (!place) return new Date();
      const month = prev.getMonth() + place;
      const year = prev.getFullYear();
      return new Date(year, month);
    });
  }, []);

  const handleSelectDate = useCallback((date?: Date) => {
    setCurrDate((prev) => (!date || prev === date ? null : date));
  }, []);

  const handleOpenForm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setIsFormOpen(true);
  };

  useEffect(() => {
    console.log("helooooo");

    async function getWorldwidePublicHolidays() {
      const data = await fetch(
        "https://date.nager.at/api/v3/NextPublicHolidaysWorldwide"
      );
      const res = await data.json();
      const worldwidePublicHolidays = res?.map(
        ({ name, date }: { name: string; date: string }) => ({
          id: uuid(),
          day: date,
          title: name,
          noDrag: true,
        })
      );

      setTasks([...worldwidePublicHolidays]);
    }
    getWorldwidePublicHolidays();
  }, []);

  return (
    <CalendarContext.Provider
      value={{
        currYear,
        currMonth,
        currDate,
        selectedDate,
        tasks,
        filteredTasks,
        isFormOpen,
        selectedTask,

        handleSelectMonthYear,
        handleSelectDate,
        handleOpenForm,
        setSelectedDate,
        setTasks,
        setFilteredTasks,
        setIsFormOpen,
        setSelectedTask,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
