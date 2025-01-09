import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Helmet } from "react-helmet";
import { getCssText } from "../stitches.config.ts";
import "./index.css";
import App from "./App.tsx";
import AppContextProvider from "./contexts/app-context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Helmet>
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    </Helmet>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
);
