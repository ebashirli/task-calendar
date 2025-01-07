import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

type TAppContext = {
  currYear: number;
  currMonth: number;
  currDate: Date | null;
  selectedIndex: number | null;

  handleSelectMonthYear: (place: 0 | 1 | -1) => void;
  handleSelectDate: (date?: Date) => void;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

type Props = {
  children: ReactNode;
};

const AppContext = createContext<TAppContext>({
  currYear: new Date().getFullYear(),
  currMonth: new Date().getMonth(),
  currDate: null,
  selectedIndex: null,
  handleSelectMonthYear: () => {},
  handleSelectDate: () => {},
  setSelectedIndex: () => {},
});

export default function AppContextProvider({ children }: Props) {
  const [selectedMonthYear, setSelectedMonthYear] = useState(new Date());
  const [currDate, setCurrDate] = useState<Date | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const currYear = selectedMonthYear.getFullYear();
  const currMonth = selectedMonthYear.getMonth();

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

        handleSelectMonthYear,
        handleSelectDate,
        setSelectedIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("out of context");
  return context;
};
