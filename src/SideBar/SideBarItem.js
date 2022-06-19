import React, { useState } from "react";
const SideBarItem = ({ iconName, itemLabel, dropDown, data }) => {
  const [expanded, setExpanded] = useState(true);
  const toggleExpand = () => {
    expanded ? setExpanded(false) : setExpanded(true);
  };
  return (
    <>
      <div
        className="side-item"
        onClick={() => {
          toggleExpand();
        }}
      >
        <div className="side-item-icon">
          <i className={`fa fa-${iconName}`}></i>
        </div>
        <div className="side-item-label">{itemLabel}</div>
        <div className="side-item-dd">
          <i
            className={`fa fa-chevron-${expanded ? "down" : "left"}`}
            style={{ display: dropDown ? "block" : "none" }}
          ></i>
        </div>
      </div>
      <div
        className="side-item-drop"
        style={{ display: expanded ? "flex" : "none" }}
      >
        {data.map((column, index) => {
          return (
            <div className="side-item-drop-bar" key={index}>
              <i className="fa fa-table-columns"></i>
              <div className="drop-name">{column.name}</div>
              <div className="drop-dt">({column.datatype})</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SideBarItem;
