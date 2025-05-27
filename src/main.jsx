import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./contexts/AppContext.jsx";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <App quebrando-aplicacao /\/\/\/\ />
    </AppProvider>
  </StrictMode>
);
