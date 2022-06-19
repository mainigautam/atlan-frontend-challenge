import React from "react";
import "./Editor.css";
const Editor = ({ id, setRun }) => {
  return (
    <div className="editor-container" id={id}>
      <textarea
        className="editor-textarea"
        defaultValue='SELECT * FROM "Table_Name"'
        onChangeCapture={() => {
          setRun(false);
        }}
      ></textarea>
    </div>
  );
};

export default Editor;
