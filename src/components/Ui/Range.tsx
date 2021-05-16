import React from "react";
import Style from "./Range.module.scss";

interface props {
  onChange(event: React.FormEvent<HTMLInputElement>): void;
  id: string;
}

function Range(props: props) {
  return (
    <div id={props.id} className={Style.Range}>
      <label htmlFor={Style.Range_Input} className={Style.Range_Label}>
        Speedometer
      </label>
      <input
        type="range"
        min="100"
        max="1000"
        id={Style.Range_Input}
        className={Style.Range_Input}
        onChange={props.onChange}
        defaultValue="600"
        step="100"
        title="Speed"
      />
    </div>
  );
}

export default React.memo(Range);
