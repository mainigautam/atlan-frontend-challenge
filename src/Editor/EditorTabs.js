import React from "react";
import EditorButton from "./EditorButton";
const EditorTabs = ({
  tabCount,
  selected,
  setSelected,
  setRotated,
  addCount,
}) => {
  const selectedStyle = {
    backgroundColor: "#f34d77",
    color: "#fff",
  };
  return (
    <div className="editor-nav">
      <div className="editor-tabs">
        {tabCount.map((count, index) => {
          return (
            <div
              className="tab"
              key={index}
              style={selected === count ? selectedStyle : {}}
              onClick={() => {
                setSelected(count);
              }}
            >
              <i className="fa fa-edit"></i>
              Editor-{count}
            </div>
          );
        })}
      </div>
      <div className="editor-ctrls">
        <EditorButton
          iconName={"add"}
          id={0}
          tabCount={tabCount}
          addCount={addCount}
        />
        <EditorButton iconName={"rotate"} setRotated={setRotated} id={1} />
      </div>
    </div>
  );
};

export default EditorTabs;
