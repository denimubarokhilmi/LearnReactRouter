import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppZustand from "./AppZustand";

createRoot(document.getElementById("zustand")).render(
  <StrictMode>
    <AppZustand></AppZustand>
  </StrictMode>,
);
