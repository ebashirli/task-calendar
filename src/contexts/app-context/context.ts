import { createContext } from "react";

export type Task = {
  id: string;
  date: string;
  title: string;
  time?: string;
};

type TAppContext = {
  currYear: number;
  currMonth: number;
  currDate: Date | null;
  selectedIndex: number | null;
  tasks: Task[];

  handleSelectMonthYear: (place: 0 | 1 | -1) => void;
  handleSelectDate: (date?: Date) => void;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const AppContext = createContext<TAppContext>({
  currYear: new Date().getFullYear(),
  currMonth: new Date().getMonth(),
  currDate: null,
  selectedIndex: null,
  tasks: [],

  handleSelectMonthYear: () => {},
  handleSelectDate: () => {},
  setSelectedIndex: () => {},
  setTasks: () => {},
});
