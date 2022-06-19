import React from "react";
const Query = ({ itemLabel, copy, index }) => {
  const copyFunc = (cpy_id) => {
    const copyText = document.getElementById(cpy_id).value;
    navigator.clipboard.writeText(copyText);
  };
  return (
    <>
      <div
        className="query-item"
        onClick={() => {
          copyFunc(`cpy-${index}`);
        }}
        title={itemLabel}
      >
        <input
          className="query-item-label"
          defaultValue={itemLabel}
          readOnly
          id={`cpy-${index}`}
        />
        <div className="side-item-dd">
          <i className={`fa fa-${copy ? "copy" : ""}`}></i>
        </div>
      </div>
    </>
  );
};

export default Query;
