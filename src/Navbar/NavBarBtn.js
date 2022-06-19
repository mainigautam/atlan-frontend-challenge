import React from "react";

const NavBarBtn = ({ iconName, btnLabel, dropDown, onClick, run }) => {
  return (
    <div
      className="nav-btn-ctrl"
      onClick={(e) => {
        !run ? onClick() : e.preventDefault();
      }}
      style={{ opacity: run ? 0.4 : 1 }}
    >
      <div className="nav-btn-icons">
        <i className={`fa fa-${iconName}`}></i>
      </div>
      <div className="nav-btn-labels">{btnLabel}</div>
      <div className="nav-btn-icons">
        <i
          className={`fa fa-chevron-down`}
          style={{ display: dropDown ? "block" : "none" }}
        ></i>
      </div>
    </div>
  );
};

export default NavBarBtn;
