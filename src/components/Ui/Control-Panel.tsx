import React from "react";
import Button from "./Button";
import "./Control-Panel.scss";

interface props {
  setSimRun(): void;
  setSimReset(): void;
  setSimRandom(): void;
  Button_Text_1: string;
}

function ControlPanel(props: props) {
  return (
    <div className="ConrolPanel" id="ControlPanel">
      <Button onClick={props.setSimRun} text={props.Button_Text_1} />
      <Button onClick={props.setSimReset} text="Reset" />
      <Button onClick={props.setSimRandom} text="Random" />
    </div>
  );
}

export default React.memo(ControlPanel);
