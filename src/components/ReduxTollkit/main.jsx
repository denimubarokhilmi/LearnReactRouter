import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppReduxToolkit from "./AppReduxToolkit";
import { Provider } from "react-redux";
import { storeWithToolkit } from "./store";

createRoot(document.getElementById("AppReduxToolkit")).render(
  <StrictMode>
    <Provider store={storeWithToolkit}>
      <AppReduxToolkit></AppReduxToolkit>
    </Provider>
  </StrictMode>,
);
