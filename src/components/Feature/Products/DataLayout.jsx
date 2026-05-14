import { Outlet, NavLink } from "react-router";
import "./style.css";
export default function DataLayout() {
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ width: "200px", background: "#eee", height: "100vh" }}>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: "/",
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/product">Profil User</NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: "/product/higher",
              }}
            >
              Higher Product
            </NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: "/product/sidebar" }}>
              Product Side bar
            </NavLink>
          </li>
        </ul>
      </nav>

      <main style={{ padding: "20px", flex: 1 }}>
        <h1>Panel Dashboard</h1>
        <hr />
        <Outlet />
      </main>
    </div>
  );
}
