import React from "react";
import SideBarItem from "./SideBarItem";
import { database } from "../MockDB/MockDB";
import "./SideBar.css";
const SideBar = ({ sideBar }) => {
  return (
    <div
      className="side-container"
      style={{ display: sideBar ? "flex" : "none" }}
    >
      <div className="side-item">Tables Inspector</div>
      {database.map((db, index) => {
        return (
          <SideBarItem
            key={index}
            iconName={"database"}
            itemLabel={db.table_name}
            dropDown={true}
            data={db.data}
          />
        );
      })}
    </div>
  );
};

export default SideBar;
