import { createContext } from "react";

export type Task = {
  id: string;
  day: string;
  title: string;
};

type TCalendarContext = {
  currYear: number;
  currMonth: number;
  currDate: Date | null;
  selectedDate: string | null;
  tasks: Task[];
  isFormOpen: boolean;

  handleSelectMonthYear: (place: 0 | 1 | -1) => void;
  handleSelectDate: (date?: Date) => void;
  setSelectedDate: React.Dispatch<React.SetStateAction<string | null>>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const CalendarContext = createContext<TCalendarContext>({
  currYear: new Date().getFullYear(),
  currMonth: new Date().getMonth(),
  currDate: null,
  selectedDate: null,
  tasks: [],
  isFormOpen: false,

  handleSelectMonthYear: () => {},
  handleSelectDate: () => {},
  setSelectedDate: () => {},
  setTasks: () => {},
  setIsFormOpen: () => {},
  handleOpenForm: () => {},
});
