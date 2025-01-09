import { useContext } from "react";
import { AppContext } from "./context";
import AppContextProvider from "./provider";

export default AppContextProvider;
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("out of context");
  return context;
};
