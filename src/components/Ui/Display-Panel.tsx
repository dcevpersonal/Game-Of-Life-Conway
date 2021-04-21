import React from "react";
import Range from "./Range";
import Style from "./Display-Panel.module.scss";

import Text from "./Text";

interface props {
  setSimSpeed(event: React.FormEvent<HTMLInputElement>): void;
  simSpeedometer: number;
  stepsCounter: number;
}

function DisplayPanel(props: props) {
  return (
    <div className={Style.DisplayPanel}>
      <Text
        id={Style.Text}
        text={
          props.simSpeedometer > 600
            ? "Slow"
            : props.simSpeedometer > 300
            ? "Medium"
            : "Fast"
        }
      />

      <Range onChange={props.setSimSpeed} id={Style.Range} />
      <Text text={"Steps-" + props.stepsCounter} id={Style.Text} />
    </div>
  );
}

export default React.memo(DisplayPanel);
