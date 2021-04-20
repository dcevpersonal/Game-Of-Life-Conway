import React from "react";
import Range from "./Range";
import "./Display-Panel.scss";

import Text from "./Text";

interface props {
  setSimSpeed(event: React.FormEvent<HTMLInputElement>): void;
  simSpeedometer: number;
  stepsCounter: number;
}

function DisplayPanel(props: props) {
  return (
    <div className="DisplayPanel">
      <Text
        text={
          props.simSpeedometer > 600
            ? "Slow"
            : props.simSpeedometer > 300
            ? "Medium"
            : "Fast"
        }
      />

      <Range onChange={props.setSimSpeed} />
      <Text text={"Steps-" + props.stepsCounter} />
    </div>
  );
}

export default React.memo(DisplayPanel);
