import { useContext } from "react";
import { CalendarContext } from "./context";
import CalendarContextProvider from "./provider";

export default CalendarContextProvider;
export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) throw new Error("out of context");
  return context;
};
