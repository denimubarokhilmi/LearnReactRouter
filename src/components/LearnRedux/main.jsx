import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import AppLearnRedux from "./AppRedux";
import { Provider } from "react-redux";
import { store } from "./redux/Counter/store";

createRoot(document.getElementById("AppRedux")).render(
  <StrictMode>
    <Provider store={store}>
      <AppLearnRedux></AppLearnRedux>
    </Provider>
  </StrictMode>,
);
