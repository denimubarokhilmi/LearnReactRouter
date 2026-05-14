import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AboutFeature from "./components/Feature/About/AboutComp.jsx";
import ProductComp from "./components/Feature/Products/ProductComp.jsx";
import ProductHigher from "./components/Feature/Products/ProductHigher.jsx";
import DataLayout from "./components/Feature/Products/DataLayout.jsx";
import PageNotFound from "./layouts/NotFound.jsx";
import ProductSideBar from "./components/Feature/Products/ProductSideBar.jsx";
import Navbar from "./layouts/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

// import router from "./router/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <PageNotFound></PageNotFound> */}

    <BrowserRouter>
      <Routes>
        <Route Component={Navbar}>
          <Route path="/" index Component={App}></Route>
          <Route path="about" Component={AboutFeature}></Route>
        </Route>
        // nested routing
        <Route path="/product" Component={DataLayout}>
          <Route index Component={ProductComp}></Route>
          <Route path="higher" Component={ProductHigher}></Route>
          <Route path="sidebar" Component={ProductSideBar}></Route>
        </Route>
        // end nested routing
        <Route path="/*" Component={PageNotFound}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
