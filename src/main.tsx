import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Helmet } from "react-helmet";
import { getCssText } from "../stitches.config.ts";
import "./index.css";
import App from "./App.tsx";
import CalendarContextProvider from "./contexts/calendar-context/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Helmet>
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    </Helmet>
    <CalendarContextProvider>
      <App />
    </CalendarContextProvider>
  </StrictMode>
);
