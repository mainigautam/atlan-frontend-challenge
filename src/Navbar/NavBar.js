import React from "react";
import NavBarBtn from "./NavBarBtn";
import "./NavBar.css";
const NavBar = ({ toggleSideBar, setRun, run }) => {
  return (
    <div className="nav-container">
      <div
        className="nav-btn-ham"
        onClick={() => {
          toggleSideBar();
        }}
      >
        <i className="fa fa-bars"></i>
      </div>
      <div className="nav-controls">
        <NavBarBtn
          iconName="folder-open"
          btnLabel="Import"
          iconColor="white"
          onClick={() => document.getElementById("importFile").click()}
        />
        <input type="file" accept=".sql" hidden id="importFile" />
        <NavBarBtn iconName="upload" btnLabel="Export" iconColor="white" />
        <NavBarBtn
          iconName="play"
          btnLabel="Execute"
          iconColor="#2ecc71"
          onClick={() => {
            setRun(true);
          }}
          run={run}
        />
      </div>
    </div>
  );
};

export default NavBar;
