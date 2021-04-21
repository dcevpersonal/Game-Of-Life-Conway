import React from "react";
import Button from "./Button";
import Style from "./Control-Panel.module.scss";

interface props {
  setSimRun(): void;
  setSimReset(): void;
  setSimRandom(): void;
  Button_Text_1: string;
  id: string;
}

function ControlPanel(props: props) {
  return (
    <div className={Style.ControlPanel} id={props.id}>
      <Button
        onClick={props.setSimRun}
        text={props.Button_Text_1}
        id={Style.Button}
      />
      <Button onClick={props.setSimReset} text="Reset" id={Style.Button} />
      <Button onClick={props.setSimRandom} text="Random" id={Style.Button} />
    </div>
  );
}

export default React.memo(ControlPanel);
