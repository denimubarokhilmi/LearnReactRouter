import { createBrowserRouter } from "react-router";
import App from "../App";
import Dashboard from "../components/Dashboard";
import Settings from "../components/Setting";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        Component: Settings,
        path: "setting",
      },
    ],
  },
]);

export default router;
