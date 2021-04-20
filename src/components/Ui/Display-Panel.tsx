import React from "react";
import Range from "./Range";
import "./Display-Panel.scss";

interface props {
  setSimSpeed(event: React.FormEvent<HTMLInputElement>): void;
}

function DisplayPanel(props: props) {
  return (
    <div className="DisplayPanel">
      {/* <h1>Speed</h1> */}
      <Range onChange={props.setSimSpeed} />
    </div>
  );
}

export default React.memo(DisplayPanel);
