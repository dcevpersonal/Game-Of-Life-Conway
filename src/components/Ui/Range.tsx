import React from "react";
import Style from "./Range.module.scss";

interface props {
  onChange(event: React.FormEvent<HTMLInputElement>): void;
  id: string;
}

function Range(props: props) {
  return (
    <div id={props.id} className={Style.Range}>
      <label htmlFor={Style.Range__Input} className={Style.Range__Label}>
        Speedometer
      </label>
      <input
        type="range"
        min="100"
        max="1000"
        id={Style.Range__Input}
        className={Style.Range__Input}
        onChange={props.onChange}
        defaultValue="600"
        step="100"
      />
    </div>
  );
}

export default React.memo(Range);
