import { createContext } from "react";

export type Task = {
  id: string;
  day: string;
  title: string;
  noDrag?: boolean;
};

type TCalendarContext = {
  currYear: number;
  currMonth: number;
  currDate: Date | null;
  selectedDate: string | null;
  tasks: Task[];
  filteredTasks: Task[];
  isFormOpen: boolean;
  selectedTask: Task | null;

  handleSelectMonthYear: (place: 0 | 1 | -1) => void;
  handleSelectDate: (date?: Date) => void;
  handleOpenForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  setSelectedDate: React.Dispatch<React.SetStateAction<string | null>>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setFilteredTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>;
};

export const CalendarContext = createContext<TCalendarContext>({
  currYear: new Date().getFullYear(),
  currMonth: new Date().getMonth(),
  currDate: null,
  selectedDate: null,
  tasks: [],
  filteredTasks: [],
  isFormOpen: false,
  selectedTask: null,

  handleSelectMonthYear: () => {},
  handleSelectDate: () => {},
  handleOpenForm: () => {},
  setSelectedDate: () => {},
  setTasks: () => {},
  setFilteredTasks: () => {},
  setIsFormOpen: () => {},
  setSelectedTask: () => {},
});
