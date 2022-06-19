import React, { useState } from "react";
import Editor from "./Editor";
import EditorTabs from "./EditorTabs";
import ResultArea from "./ResultArea";
import "./Editor.css";

const FunctionBinder = ({ run, setRun }) => {
  const [tabCount, setTabCount] = useState([0, 1]);
  const addCount = () => {
    setTabCount([...tabCount, tabCount[tabCount.length - 1] + 1]);
  };
  const [selected, setSelected] = useState(0);
  const [rotated, setRotated] = useState(false);
  const toggleRotate = () => {
    rotated ? setRotated(false) : setRotated(true);
  };
  return (
    <div className="func-binder" style={{flexDirection:rotated?'column-reverse':''}}>
      <EditorTabs
        tabCount={tabCount}
        selected={selected}
        setSelected={setSelected}
        setRotated={toggleRotate}
        addCount={addCount}
      />
      <Editor id={selected} setRun={setRun} />
      <ResultArea selected={selected} run={run} />
    </div>
  );
};

export default FunctionBinder;
