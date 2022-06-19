import { useState } from "react";
import NavBar from "./Navbar/NavBar";
import SideBar from "./SideBar/SideBar";
import FunctionBinder from "./Editor/FunctionBinder";
import QueryBar from "./QueryBar/QueryBar";
import "./App.css";

function App() {
  const [sideBar, setSideBar] = useState(true);
  const toggleSideBar = () => {
    sideBar ? setSideBar(false) : setSideBar(true);
  };
  const [run, setRun] = useState(false); //Mock Query Execution
  return (
    <>
      <NavBar toggleSideBar={toggleSideBar} setRun={setRun} run={run} />
      <SideBar sideBar={sideBar} />
      <FunctionBinder run={run} setRun={setRun} />
      <QueryBar/>
    </>
  );
}

export default App;
