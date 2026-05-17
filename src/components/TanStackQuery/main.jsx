import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppTanStack from "./AppTanStack";

createRoot(document.getElementById("TanStack")).render(
  <StrictMode>
    <AppTanStack></AppTanStack>
  </StrictMode>,
);
