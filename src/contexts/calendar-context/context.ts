import { createContext } from "react";

export type Task = {
  id: string;
  date: number;
  title: string;
  time?: string;
};

type TCalendarContext = {
  currYear: number;
  currMonth: number;
  currDate: Date | null;
  selectedDate: number | null;
  tasks: Task[];

  handleSelectMonthYear: (place: 0 | 1 | -1) => void;
  handleSelectDate: (date?: Date) => void;
  setSelectedDate: React.Dispatch<React.SetStateAction<number | null>>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const CalendarContext = createContext<TCalendarContext>({
  currYear: new Date().getFullYear(),
  currMonth: new Date().getMonth(),
  currDate: null,
  selectedDate: null,
  tasks: [],

  handleSelectMonthYear: () => {},
  handleSelectDate: () => {},
  setSelectedDate: () => {},
  setTasks: () => {},
});
