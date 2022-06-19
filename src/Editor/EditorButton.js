import React from "react";
const EditorButton = ({ iconName, setRotated, id, addCount }) => {
  const clickFunc =
    id === 1
      ? () => {
          setRotated(true);
        }
      : () => {
          addCount();
        };
  return (
    <div className="editor-btn" onClick={clickFunc} id={id}>
      <i className={`fa fa-${iconName}`}></i>
    </div>
  );
};

export default EditorButton;
