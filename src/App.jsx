import { Outlet } from "react-router";
function App() {
  return (
    <div className="app">
      <div>
        <h1>Home Component</h1>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
