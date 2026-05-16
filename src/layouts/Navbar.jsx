import { NavLink, Outlet, useNavigate, Navigate } from "react-router";
export default function Navbar() {
  // const cookiess = document.cookie;
  // const splits = cookiess.split("=");
  // if (splits[2] == undefined) {
  //   return <Navigate to={{ pathname: "/product" }}></Navigate>;
  // }

  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <NavLink to={{ pathname: "/" }}>Home</NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: "/about" }}>About</NavLink>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet></Outlet>
      </main>
      <h2>this is footer</h2>
    </div>
  );
}
